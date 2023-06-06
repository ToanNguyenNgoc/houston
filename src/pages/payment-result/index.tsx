/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { AuthLayout } from "@/layouts";
import { api } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import style from "@/styles/payment-result.module.css"
import { FaCheckCircle } from "react-icons/fa";
import moment from "moment";
import { fmPrice } from "@/utils";
import { Button } from "@mui/material";


const PaymentResult: NextPageWithLayout = () => {
  const router = useRouter()
  const txn_ref = router.query.txn_ref as string
  const { data } = useQuery({
    queryKey: ['PM-RESULT', txn_ref],
    queryFn: () => api.paymentGatewayStatus(txn_ref),
    enabled: txn_ref ? true : false,
    onError:() => router.push('404')
  })
  const booking = data?.data
  return (
    <div className={style.container}>
      <div className={style.bg_image}>
        <img src={booking?.villa?.thumbnail?.original_url} alt={booking?.villa?.name} />
      </div>
      <div className={style.bill_cnt}>
        <div className={style.bill_card}>
          <div className={style.bill_head}>
            <div className={style.bill_head_icon}>
              <FaCheckCircle style={{ width: '24px', height: '24px' }} color="var(--green-dark-2)" />
            </div>
            <p className={style.bill_head_title}>Thanh toán thành công !</p>
          </div>
          <div className={style.bill_body}>
            <div className={style.row}>
              <span className={style.label}>Villa</span>
              <span className={style.value}>{booking?.villa?.name}</span>
            </div>
            <div className={style.row}>
              <span className={style.label}>Trạng thái</span>
              <span className={style.value}>Thành công</span>
            </div>
            <div className={style.bill_body_de}>
              <div className={style.row}>
                <span className={style.label}>Txn ref</span>
                <span className={style.value}>{booking?.payment_gateway?.txn_ref}</span>
              </div>
              <div className={style.row}>
                <span className={style.label}>Chi nhánh</span>
                <span className={style.value}>{booking?.branch?.name}</span>
              </div>
              <div className={style.row}>
                <span className={style.label}>Phương thức thanh toán</span>
                <span className={style.value}>{booking?.payment_method?.name}</span>
              </div>
              <div className={style.row}>
                <span className={style.label}>Thời gian thanh toán</span>
                <span className={style.value}>
                  {moment(booking?.payment_gateway?.updated_at).format("HH:mm, D [thg] M [năm] YYYY")}
                </span>
              </div>
              <div className={style.row}>
                <span className={style.label}>Số tiền thanh toán</span>
                <span className={style.value}>
                  {fmPrice(booking?.amount)} VNĐ
                </span>
              </div>
            </div>
          </div>
          <div className={style.bill_bot}>
            <Button
              size="medium" style={{ backgroundColor: 'var(--primary)' }}
              variant="contained"
              onClick={() => router.replace("/")}
            >
              Tiếp tục khám phá
            </Button>
            <Button
              size="medium"
              variant="outlined"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
              onClick={() => router.replace("/account/bookings")}
            >
              Xem lịch sử
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
PaymentResult.Layout = AuthLayout
export default PaymentResult