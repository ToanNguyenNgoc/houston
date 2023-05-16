import { LayoutProps } from "@/common"
import { Footer, Seo } from "@/components"
import style from "@/styles/sign-layout.module.css"
import { icon } from "@/assets/icon"
import Image from "next/image"
import { Container } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export const SignLayout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const [tab, setTab] = useState(router.pathname)
  return (
    <>
      <Seo
        title={tab === '/auth/login' ? 'Đăng nhập' : 'Đăng ký'}
        description={tab === '/auth/login' ? 'Đăng nhập' : 'Đăng ký'}
        url={router.pathname}
      />
      <div className={style.container}>
        <Image
          className={style.image_bg}
          src={icon.bgSign}
          alt=""
        />
        <div className={style.wrapper}>
          <div className={style.header}>
            <Container>
              <div className={style.header_cnt}>
                <Link className={style.header_link} href={'/'}>
                  <Image
                    className={style.header_icon}
                    src={icon.iconOrigin}
                    alt=""
                  />
                  <span className={style.header_title}>Houston Garden</span>
                </Link>
                <span className={style.header_path}>
                  {tab === '/auth/login' ? 'Đăng nhập' : 'Đăng ký'}
                </span>
              </div>
            </Container>
          </div>
          <Container className={style.child_cnt} >
            <div className={style.card_cnt}>
              <div className={style.card_cnt_head}>
                <Link
                  onClick={() => setTab('/auth/login')}
                  className={style.card_cnt_head_link}
                  href={'/auth/login'} >Đăng nhập
                </Link>
                <Link
                  onClick={() => setTab('/auth/register')}
                  className={style.card_cnt_head_link}
                  href={'/auth/register'}>Đăng ký
                </Link>
              </div>
              {children}
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}