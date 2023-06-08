import style from "./booking-status.module.css"

interface IBookingStatusProps {
  status: string;
  statusType?: 'BOOKING' | 'PAYMENT'
}

export const BookingStatus = ({ status, statusType = 'BOOKING' }: IBookingStatusProps) => {
  let title = 'Trạng thái đặt phòng'
  if (statusType === 'PAYMENT') title = 'Trạng thái thanh toán'
  const renderStatus = () => {
    let cnt = {
      txt: '',
      bg: '',
      color: ''
    }
    switch (status) {
      case "PENDING":
        return cnt = { txt: 'Đang chờ', color: '#f9a825', bg: '#f9a82526' }
      case "SUCCESS":
        return cnt = { txt: 'Thành công', color: '#43a047', bg: '#43a04747' }
      case "CANCEL":
        return cnt = { txt: 'Đã hủy', color: '#ef5350', bg: '#ef535057' }
      default:
        return cnt
    }
  }
  const { } = renderStatus()
  return (
    <div style={{ backgroundColor: renderStatus().bg }} className={style.container} >
      <p style={{ color: renderStatus().color }} className={style.title}>{title}</p>
      <p style={{ color: renderStatus().color }} className={style.status}>{renderStatus().txt}</p>
    </div>
  )
}