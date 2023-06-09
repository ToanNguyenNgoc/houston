import { Container } from '@mui/material'
import style from './home.module.css'
import { icon } from '@/assets/icon'
import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/constants'

export const WelCome = () => {

  const utils = [
    { name: 'Lễ tân 24/7', icon: icon.foodCate },
    { name: 'Nhà hàng', icon: icon.dinnerCate },
    { name: 'Dịch vụ vận chuyển', icon: icon.transportCate },
    { name: 'Spa Suites', icon: icon.spaCate },
  ]
  return (
    <Container>
      <div className={style.welcome_cnt}>
        <div className={style.welcome_cnt_content}>
          <div className={style.welcome_cnt_content_left}>
            <div className={style.welcome_cnt_video}>
              <iframe src='https://www.youtube.com/embed/o0mSrIedcq8?autoplay=1&mute=1&loop=1&color=white&controls=0'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title="YouTube video player"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div className={style.welcome_cnt_content_right}>
            <h1>BIỆT THỰ NGHỈ DƯỠNG TỐT NHẤT Ở VŨNG TÀU</h1>
            <h3>Thức dậy với niềm hạnh phúc, nhẹ nhàng và sâu lắng trong tâm hồn.
              Sự pha trộn của lối sống hiện đại, ẩm thực tuyệt vời với sự đa dạng của ẩm thực 3
              miền và đội ngũ nhân viên sẽ vượt quá mọi sự mong đợi. Houston Garden Villa là chuỗi
              nghỉ dưỡng kiểu Indochine sẽ mang đến trải nghiệm nghỉ ngơi thư giãn, độc đáo – thực sự là ngôi nhà của bạn khi xa nhà.
            </h3>
            <Link
              href={'/'}
              className={style.welcome_right_more}
            >
              Khám phám thêm
            </Link>
            <ul className={style.welcome_right_social}>
              {
                socials.map((item, i) => (
                  <li key={i} >
                    <Link href={item.link} target='_blank'>
                      {item.icon}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className={style.welcome_cnt_utils}>
          <ul className={style.util_list}>
            {
              utils.map((item, i) => (
                <li key={i} className={style.util_item}>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <span className={style.util_item_name}>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Container>
  )
}