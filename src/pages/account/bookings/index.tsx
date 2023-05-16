/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { Seo } from "@/components";
import { AccountLayout } from "@/layouts";
import { api } from "@/services";
import style from '@/styles/account.module.css'
import { useInfiniteQuery } from "@tanstack/react-query";
import { FaMapMarkerAlt, FaAngleLeft } from 'react-icons/fa'
import moment from "moment";
import Link from "next/link";
import { fmPrice } from "@/utils";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";

export const PageHeaderAccount = ({title}:{title:string})=>{
  const router = useRouter()
  return (
    <div className={style.account_page_title}>
    <button onClick={() => router.back()} className={style.account_page_title_btn}>
      <FaAngleLeft size={26} color="var(--primary)" />
    </button>
    <span>{title}</span>
  </div>
  )
}

const Bookings: NextPageWithLayout = () => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['BOOKINGS'],
    queryFn: ({ pageParam = 1 }) => api.bookings({
      page: pageParam,
      limit: 10,
      includes: 'full_address|villa_media'
    }),
    getNextPageParam: (page: any) => page.current_page + 1
  })
  const totalItem = data?.pages[0]?.total ?? 0
  const bookings = data?.pages?.map(item => item.data).flat() ?? []
  return (
    <>
      <Seo title="Lịch sử đặt phòng" description="" url="" />
      <PageHeaderAccount title="Lịch sử đặt phòng" />
      <div className={style.account_page_body}>
        <ul className={style.booking_list}>
          {
            bookings.map(item => (
              <li key={item.id} className={style.booking_list_item}>
                <Link href='/' className={style.booking_item}>
                  <div className={style.booking_item_img}>
                    <img src={item.villa?.thumbnail?.original_url} alt="" />
                  </div>
                  <div className={style.booking_item_detail}>
                    <div>
                      <div className={style.booking_item_detail_head_create}>
                        ngày đặt: {moment(item.created_at).format('HH:mm DD [thg] MM, YYYY')}
                      </div>
                      <div className={style.booking_item_detail_head}>
                        <span>{item.villa?.name}</span>
                        <span>Trạng thái đặt <br />{item.status_booking}</span>
                      </div>
                      <span className={style.booking_item_detail_address}>
                        <FaMapMarkerAlt color="var(--primary)" size={12} />
                        {item.branch?.address},{item.branch?.ward?.name},
                        {item.branch?.district?.name},{item.branch?.province?.name}
                      </span>
                      <div className={style.range_date}>
                        <div className={style.range_date_item}>
                          <p>Nhận phòng</p>
                          <p>{moment(item.from_date_booking).format('DD [thg] MM, YYYY')}</p>
                        </div>
                        <div className={style.range_date_item}>
                          <p>Trả phòng</p>
                          <p>{moment(item.to_date_booking).format('DD [thg] MM, YYYY')}</p>
                        </div>
                      </div>
                    </div>
                    <div className={style.booking_item_detail_amount}>
                      <span>Tổng cộng</span>
                      <span>{fmPrice(item.amount)} / ({item.nights} đêm)</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
        <div className={style.account_page_bot}>
          {
            bookings.length < totalItem &&
            <LoadingButton
              loading={isFetchingNextPage}
              onClick={() => fetchNextPage()}
              style={{ color: 'var(--primary)' }}
            >
              Xem thêm
            </LoadingButton>
          }
        </div>
      </div>
    </>
  )
}
Bookings.Layout = AccountLayout
export default Bookings