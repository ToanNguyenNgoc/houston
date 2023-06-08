/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { AccountLayout } from "@/layouts";
import { PageHeaderAccount } from "./index"
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";
import style from "@/styles/booking-detail.module.css"
import moment from "moment";
import Image from "next/image";
import { pmIcon } from "@/constants";
import { BookingStatus, Seo } from "@/components";
import Link from "next/link";
import { slugify } from "@/utils";
import { FaLongArrowAltRight } from "react-icons/fa";

const BookingDetail: NextPageWithLayout = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { data, isLoading } = useQuery({
    queryKey: ['BOOKING', id],
    queryFn: () => api.bookingById(id),
    onError: () => router.replace('/404'),
  })
  const booking = data?.data
  const branch = booking?.branch
  return (
    <>
      <PageHeaderAccount title="Lịch sử đặt phòng" />
      <Seo title="Chi tiết đặt phòng" description="" url="" />
      <div className={style.container}>
        <div className={style.created_at}>
          <span>Ngày đặt</span>
          {moment(booking?.created_at).format("HH:ss [ngày] DD [tháng] MM, YYYY")}
        </div>
        <div className={style.payment_method}>
          Phương thức thanh toán
          <span>
            <Image
              src={pmIcon.find(i => i.key === booking?.payment_method?.name_children_key)?.icon ?? ''}
              alt=""
              width={22}
              height={22}
            />
            {booking?.payment_method?.name ?? booking?.payment_method?.name_children}
          </span>
        </div>
        <div className={style.payment_gateway}>
          Trạng thái
          <div className={style.pmt_gw_cnt}>
            <BookingStatus status={booking?.payment_gateway?.status ?? ''} statusType="BOOKING" />
            <BookingStatus status={booking?.status_booking ?? ''} />
          </div>
        </div>
        <div className={style.body}>
          <span className={style.title}>Chi tiết</span>
          <div className={style.villa}>
            <div className={style.villa_img}>
              <img src={booking?.villa?.thumbnail?.original_url} alt="" />
            </div>
            <div className={style.villa_info}>
              <Link
                href={`/danh-sach-villa/${slugify(booking?.villa?.name ?? '')}&id=${booking?.villa?.id}`}
                className={style.villa_name}
              >
                {booking?.villa?.name}
              </Link>
              <Link
                href={`/branches/${slugify(booking?.branch?.name ?? '')}&id=${booking?.branch?.id}`}
                className={style.address}
              >
                <p>{branch?.name}</p>
                <span>
                  {branch?.address}{branch?.ward?.name},,{branch?.district?.name},{branch?.province?.name}
                </span>
              </Link>
            </div>
          </div>
          <div className={style.booking_date}>
            <div className={style.booking_date_item}>
              <p>Nhận phòng</p>
              <p>{moment(booking?.from_date_booking).format("[ngày] DD [thg] MM, YYYY")}</p>
            </div>
            <FaLongArrowAltRight size={20} />
            <div className={style.booking_date_item}>
              <p>Trả phòng</p>
              <p>{moment(booking?.to_date_booking).format("[ngày] DD [thg] MM, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

BookingDetail.Layout = AccountLayout
export default BookingDetail