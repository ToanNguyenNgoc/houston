import style from './villa-detail.module.css'
import {
  FaWifi, FaParking, FaDoorClosed, FaSmokingBan, FaHouseUser, FaWineGlassAlt, FaWheelchair,
  FaStarOfLife
} from 'react-icons/fa'

export const VillaUtil = () => {
  const utils = [
    {
      icon: <FaWifi className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Wi-Fi miễn phí'
    },
    {
      icon: <FaParking className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Chỗ đỗ xe miễn phí'
    },
    {
      icon: <FaDoorClosed className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Phòng gia đình'
    },
    {
      icon: <FaSmokingBan className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Phòng không hút thuốc'
    },
    {
      icon: <FaHouseUser className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Dịch vụ phòng'
    },
    {
      icon: <FaWheelchair className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Tiện ích cho khách khuyết tật'
    },
    {
      icon: <FaWineGlassAlt className={style.util_icon} size={16} color='var(--green-dark-2)' />,
      content: 'Bữa sáng tốt'
    }
  ]
  return (
    <div className={style.util_cnt}>
      <span className={style.booking_form_title}>Tiện ích và dịch vụ đi kèm</span>
      <ul className={style.list_util}>
        {
          utils.map((item, index: number) => (
            <li key={index} className={style.util_item}>
              {item.icon}
              <span className={style.util_item_content}>{item.content}</span>
            </li>
          ))
        }
      </ul>
      <ul className={style.list_util_free}>
        <li>
          <FaStarOfLife size={8} style={{margin:'0px 6px 0px 3px'}} color='var(--green-dark-2)' />
          Miễn phí buffet sáng
        </li>
        <li>
          <FaStarOfLife size={8} style={{margin:'0px 6px 0px 3px'}} color='var(--green-dark-2)' />
          Nước uống chào mừng khi nhận phòng
        </li>
        <li>
          <FaStarOfLife size={8} style={{margin:'0px 6px 0px 3px'}} color='var(--green-dark-2)' />
          Đặt trước, thanh toán sau
        </li>
      </ul>
    </div>
  )
}