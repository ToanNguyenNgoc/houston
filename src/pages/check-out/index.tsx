/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { NextPageWithLayout } from "@/common";
import Image from "next/image";
import { Popup, Seo } from "@/components";
import { AuthLayout } from "@/layouts";
import { useBookingStore, useProfileStore } from "@/stores/zustand";
import { ZBookingState, ZProfileState } from "@/stores/zustand/type";
import { Button, Container, Radio } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import style from '@/styles/checkout.module.css'
import moment from "moment";
import { ErrorOutlineIcon } from "@/assets/icon-mui";
import { fmPrice, rangeDate } from "@/utils";
import { FaHome, FaMapMarkerAlt, FaRegCheckCircle } from 'react-icons/fa'
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Booking, ReqBooking } from "@/interfaces";
import { api } from "@/services";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { captKey } from "@/config";
import { QR_TIME_CACHE, pmIcon } from "@/constants";
import { useNoti } from "@/hooks";

const now = moment().format('YYYY-MM-DD')

const Checkout: NextPageWithLayout = () => {
  const [profile] = useProfileStore((state: ZProfileState) => [state.profile])
  const [data] = useBookingStore((state: ZBookingState) => [state.data])
  const [payment, setPayment] = useState<{ method: string | null, bank: string | null }>({
    method: null,
    bank: null
  })
  const refNote = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const { firstLoad, resultLoad, noti, onCloseNoti } = useNoti()
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const verifyRecaptchaCallback = useCallback((token: string) => {
    setCaptcha(token)
  }, [])
  useEffect(() => {
    setRefreshReCaptcha(r => !r)
    if (!data.villa || !data.booking_value) router.push('/')
  }, [captcha])
  const night = rangeDate(data.booking_value?.from_date_booking, data.booking_value?.to_date_booking)
  let price = data.villa?.price ?? 0
  if (data.villa && data.villa.price > data.villa.special_price) { price = data.villa.special_price }
  const { mutate, isLoading } = useMutation({
    mutationFn: (body: ReqBooking) => api.booking(body),
    onSuccess: (response) => {
      setRefreshReCaptcha(r => !r)
      const booking = response.data as Booking
      if (booking.payment_method?.name_key === "CASH") {
        resultLoad({ element: <Notification status="SUCCESS" /> })
      }
      if (booking.payment_gateway?.payment_url && booking.payment_method?.name_key === 'VNPAY') {
        if (typeof window !== undefined) window.location.assign(booking.payment_gateway.payment_url)
      }
    },
    onError: () => {
      setRefreshReCaptcha(r => !r)
      resultLoad({ element: <Notification status="FAIL" close={onCloseNoti} /> })
    }
  })
  const { data: dataPayment } = useQuery({
    queryKey: ['PAYMENT_METHOD'],
    queryFn: () => api.paymentMethods(),
    staleTime: QR_TIME_CACHE
  })
  const onSubmitBooking = () => {
    if (captcha === "") return setRefreshReCaptcha(r => !r)
    if (data.booking_value) {
      mutate({
        ...data.booking_value,
        note: refNote.current?.value ?? '',
        payment_method: payment.method as any,
        payment_method_bank: payment.bank,
        recaptcha: captcha
      })
    }
  }
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={captKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Seo title="Xác nhận đặt phòng" description="" url="" />
      <Container>
        <div className={style.cnt}>
          <div className={style.left}>
            <div className={style.left_booking_detail}>
              <span className={style.left_title}>Chi tiết đặt phòng</span>
              <div className={style.detail_range_date}>
                <div className={style.range_item}>
                  <span>Nhận phòng</span>
                  <p>
                    {moment(data.booking_value?.from_date_booking).format('DD ')}
                    tháng
                    {moment(data.booking_value?.from_date_booking).format(' MM ')}
                    năm
                    {moment(data.booking_value?.from_date_booking).format(' YYYY')}
                  </p>
                </div>
                <div className={style.range_item}>
                  <span>Trả phòng</span>
                  <p>
                    {moment(data.booking_value?.to_date_booking).format('DD ')}
                    tháng
                    {moment(data.booking_value?.to_date_booking).format(' MM ')}
                    năm
                    {moment(data.booking_value?.to_date_booking).format(' YYYY')}
                  </p>
                </div>
              </div>
              <div className={style.detail_count_date}>
                <ErrorOutlineIcon color='success' />
                <span> còn {rangeDate(now, data.booking_value?.from_date_booking)} ngày nữa</span>
              </div>
              <p className={style.detail_total_date}>
                Tổng thời gian thuê :
                <span>{night} đêm</span>
              </p>
            </div>
            <div className={style.left_bill}>
              <span className={style.left_title}>Chi tiết giá</span>
              <div className={style.bill_row}>
                <span className={style.bill_row_label}>Đơn giá</span>
                <span className={style.bill_row_value}>
                  {fmPrice(price)}VND/1đêm
                </span>
              </div>
              <div className={style.bill_row}>
                <span className={style.bill_row_label}>Thuê trong</span>
                <span className={style.bill_row_value}>
                  {night}đêm
                </span>
              </div>
              <div className={`${style.bill_row} ${style.bill_row_total}`}>
                <span className={style.bill_row_label}>Tổng</span>
                <span className={style.bill_row_value}>
                  {fmPrice(price * night)} VND
                </span>
              </div>
            </div>
            <div className={style.left_bill}>
              <span className={style.left_title}>Phương thức thanh toán</span>
              <ul className={style.method_list}>
                {
                  dataPayment?.data?.map(item => (
                    <li
                      onClick={() => setPayment({ method: item.name_key, bank: item.name_children_key })}
                      key={item.id} className={style.method_item}
                    >
                      <Radio
                        style={{ color: 'var(--primary)' }}
                        checked={item.name_children_key === payment.bank} readOnly
                      />
                      <div className={style.method_de}>
                        <Image
                          src={pmIcon.find(ic => (ic.key === item.name_children_key || ic.key === item.name_key))?.icon ?? ''}
                          alt={item.name_key}
                          width={42}
                          height={42}
                        />
                        {item.name_children ?? item.name}
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.right_villa_card}>
              <img className={style.villa_img} src={data.villa?.thumbnail?.original_url} alt="" />
              <div className={style.villa_detail}>
                <span className={style.villa_detail_cate_name}>
                  {data.villa?.villa_cate?.villa_cate_name}
                </span>
                <div className={style.villa_detail_name}>
                  <span>
                    <FaHome color="var(--primary)" className={style.fa_home} />
                    {data.villa?.name}
                  </span>
                </div>
                <span className={style.villa_detail_address}>
                  <FaMapMarkerAlt className={style.fa_location} color="var(--primary)" />
                  {data.villa?.branch?.address}, {data.villa?.branch?.ward?.name},
                  {data.villa?.branch?.district?.name}, {data.villa?.branch?.province?.name}
                </span>
              </div>
            </div>
            <div className={style.right_util_card}>
              <span className={style.left_title}>Tiện ích</span>
              <ul className={style.list_util}>
                <li className={style.util_item}>
                  <FaRegCheckCircle color="var(--green-dark)" size={24} />
                  <span>Bạn sẽ có nguyên căn hộ cho riêng mình!</span>
                </li>
                <li className={style.util_item}>
                  <FaRegCheckCircle color="var(--green-dark)" size={24} />
                  <span>Hôm nay có thể không cần trả tiền. Bạn sẽ thanh toán trong nhận phòng.</span>
                </li>
              </ul>
            </div>
            <div className={style.right_info_card}>
              <div className={style.right_info_card_head}>
                <span className={style.left_title}>Thông tin của bạn</span>
                <Link href={'/'}>thay đổi</Link>
              </div>
              <div className={style.info_row}>
                {profile?.fullname}
              </div>
              <div className={style.info_column}>
                <div className={style.info_row}>
                  {profile?.email}
                </div>
                <div className={style.info_row}>
                  {profile?.telephone}
                </div>
              </div>
              <textarea ref={refNote} className={style.info_row_note} placeholder="Ghi chú" />
            </div>
          </div>
        </div>
      </Container>
      <div className={style.right_bot}>
        <Container>
          <div className={style.right_bot_cnt}>
            <LoadingButton
              disabled={!payment.bank}
              loading={isLoading}
              onClick={onSubmitBooking}
              style={{ backgroundColor: 'var(--primary)' }}
              size='large' variant="contained" >
              {(!payment.bank || payment.bank === "CASH") ? "Hoàn tất đặt phòng" : "Thanh toán"}
            </LoadingButton>
          </div>
        </Container>
      </div>
      <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} onVerify={verifyRecaptchaCallback} />
      <Popup open={noti.openAlert} onClose={onCloseNoti} >
        {noti.element}
      </Popup>
    </GoogleReCaptchaProvider>
  )
}
Checkout.Layout = AuthLayout
export default Checkout

const Notification = ({ status, close }: { status: 'SUCCESS' | 'FAIL', close?: () => void }) => {
  const router = useRouter()
  return (
    <div className={style.success}>
      <p className={style.success_cnt}>
        {status === "SUCCESS" && "Đặt phòng thành công !"}
        {status === "FAIL" && "Có lỗi xảy ra. Vui lòng thử lại ! "}
      </p>
      <div className={style.success_bot}>
        {
          status === "SUCCESS" &&
          <>
            <Button
              size="large" style={{ backgroundColor: 'var(--primary)' }}
              variant="contained"
              onClick={() => router.replace("/")}
            >
              Trang chủ
            </Button>
            <Button
              size="large"
              variant="outlined"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
              onClick={() => router.replace("/account/bookings")}
            >
              Xem lịch sử
            </Button>
          </>
        }
        {
          status === "FAIL" &&
          <Button
            size="large" style={{ backgroundColor: 'var(--primary)' }}
            variant="contained"
            onClick={close}
          >
            Đã hiểu
          </Button>
        }
      </div>
    </div>
  )
}