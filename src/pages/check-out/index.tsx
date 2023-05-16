/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { NextPageWithLayout } from "@/common";
import { Seo } from "@/components";
import { AuthLayout } from "@/layouts";
import { useBookingStore, useProfileStore } from "@/stores/zustand";
import { ZBookingState, ZProfileState } from "@/stores/zustand/type";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import style from '@/styles/checkout.module.css'
import moment from "moment";
import { ErrorOutlineIcon } from "@/assets/icon-mui";
import { fmPrice, rangeDate } from "@/utils";
import { FaHome, FaMapMarkerAlt, FaRegCheckCircle } from 'react-icons/fa'
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@tanstack/react-query";
import { ReqBooking } from "@/interfaces";
import { api } from "@/services";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { captKey } from "@/config";

const now = moment().format('YYYY-MM-DD')

const Checkout: NextPageWithLayout = () => {
  const [profile] = useProfileStore((state: ZProfileState) => [state.profile])
  const [data] = useBookingStore((state: ZBookingState) => [state.data])
  const refNote = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  useEffect(() => {
    if (!data.villa || !data.booking_value) router.push('/')
  }, [])
  const [captcha, setCaptcha] = useState('')
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  const verifyRecaptchaCallback = useCallback((token: string) => {
    setCaptcha(token)
  }, [])
  const night = rangeDate(data.booking_value?.from_date_booking, data.booking_value?.to_date_booking)
  let price = 0
  if (data.villa && data.villa.price > data.villa.special_price) { price = data.villa.special_price }
  if (data.villa) { price = data.villa.price }
  const { mutate, isLoading } = useMutation({
    mutationFn: (body: ReqBooking) => api.booking(body),
    onSuccess: () => {
      setRefreshReCaptcha(r => !r)
    },
    onError: () => {
      setRefreshReCaptcha(r => !r)
    }
  })
  const onSubmitBooking = () => {
    if (data.booking_value) {
      mutate({
        ...data.booking_value,
        note: refNote.current?.value ?? '',
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
                  {fmPrice(data.villa?.price)}VND/1đêm
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
                  <span>Hôm nay không cần trả tiền. Bạn sẽ thanh toán trong nhận phòng.</span>
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
            <div className={style.right_bot}>
              <LoadingButton
                loading={isLoading}
                onClick={onSubmitBooking}
                style={{ backgroundColor: 'var(--primary)' }}
                size='large' variant="contained" >
                Hoàn tất đặt phòng
              </LoadingButton>
            </div>
          </div>
        </div>
      </Container>
      <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} onVerify={verifyRecaptchaCallback} />
    </GoogleReCaptchaProvider>
  )
}
Checkout.Layout = AuthLayout
export default Checkout