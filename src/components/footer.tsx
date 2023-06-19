import { icon } from "@/assets/icon"
import { BottomNavigate } from "@/components/bottom-navigation"
import { info, pmIcon, socials } from "@/constants"
import style from "@/styles/footer.module.css"
import { Container, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import { GoMail } from "react-icons/go"

const pathsBottom = [
  '/',
  '/danh-sach-villa',
  '/blogs',
  '/account'
]

export function Footer() {
  const { asPath } = useRouter()
  const mb = useMediaQuery('(max-width:767px)');
  const links = [
    { cnt: "Tin tức", href: '/blogs' },
    { cnt: "Biệt thự nổi bật", href: '/danh-sach-villa' },
    { cnt: "Về chúng tôi", href: '/about' },
    { cnt: "Liên hệ", href: '/' }
  ]
  return (
    <>
      {(mb && pathsBottom.includes(asPath)) && <BottomNavigate />}
      {
        !mb &&
        <div className={style.wrapper}>
          <Container>
            <div className={style.container}>
              <div className={style.left}>
                <h2 className={style.title}>
                  Houston Garden Villa
                </h2>
                <Image
                  className={style.left_bg}
                  src={icon.houstonPanel}
                  width={200}
                  height={120}
                  alt="houston panel"
                />
                <span className={style.left_slt}>
                  Xứng đáng nhận lại nhiều hơn những gì bạn bỏ ra
                </span>
                <div className={style.socials}>
                  {
                    socials.map((item, i) => (
                      <Link className={style.social_item} href={item.link} target='_blank' key={i}>
                        {item.icon}
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className={style.center}>
                <h2 className={style.title}>
                  Nổi bật
                </h2>
                <ul className={style.list_link}>
                  {
                    links.map(link => (
                      <li key={link.cnt} className={style.link_item}>
                        <Link href={link.href}>
                          {link.cnt}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={style.right}>
                <h2 className={style.title}>
                  Để đặt phòng
                </h2>
                <ul className={style.list_link}>
                  <li className={style.link_item}>
                    <Link className={style.right_link} href={info.location} target='_blank'>
                      <FaMapMarkerAlt />
                      E12-E13, Thùy Dương 4, Khu du lịch Thanh Bình - Long Cung, Vũng Tàu, Bà Rịa - Vũng Tàu
                    </Link>
                  </li>
                  <li className={style.link_item}>
                    <Link className={style.right_link} href={`tel:${info.phone}`}>
                      <FaPhone />
                      {info.phone}
                    </Link>
                  </li>
                  <li className={style.link_item}>
                    <Link className={style.right_link} href={`mailto:${info.email}`}>
                      <GoMail />
                      {info.email}
                    </Link>
                  </li>
                </ul>
                <div className={style.pm_method}>
                  <h2 className={style.title}>Phương thức thanh toán</h2>
                  <div className={style.pm_method_list}>
                    {
                      pmIcon.map(item => (
                        <div key={item.key} className={style.pm_method_item}>
                          <Image
                            width={36}
                            height={36}
                            src={item.icon}
                            alt={item.key}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      }
    </>
  )
}