/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import style from '@/styles/header.module.css'
import Head from "next/head"
import { useRef } from "react"
import { Container, useMediaQuery } from "@mui/material"
import { FaListUl } from 'react-icons/fa'
import { useProfileStore } from "@/stores/zustand"
import { ZProfileState } from "@/stores/zustand/type"

export function Header() {
  const [profile] = useProfileStore((state: ZProfileState) => [state.profile])
  const mb = useMediaQuery('(max-width:767px)');
  const refHeader = useRef<HTMLDivElement>(null)
  const refHeaderRight = useRef<HTMLDivElement>(null)
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (refHeader.current && window.scrollY > 50) {
        refHeader.current.style.backgroundColor = `rgb(255 255 255 / ${window.scrollY}%)`
        refHeader.current.style.boxShadow = 'var(--box-shadow)'
      }
    })
  }
  const openMenu = () => refHeaderRight.current?.classList.add(style.header_right_act)
  if (typeof window !== 'undefined') {
    window.addEventListener('click', () => {
      refHeaderRight.current?.classList.remove(style.header_right_act)
    })
  }
  const closeTimeOut = () => setTimeout(() => {
    refHeaderRight.current?.classList.remove(style.header_right_act)
  }, 300)
  return (
    <div>
      <Head>
        <title>Houston Garden</title>
        <meta name="description" content="Houston Garden" />
        <meta name="keywords" content="Houston Garden" />
        <meta name="author" content="Houston Garden" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={refHeader} className={style.header}>
        <Container>
          <div className={style.header_cnt}>
            <div className={style.header_left}>
              <Link href={'/'} className={style.header_left_home}>
                Houton Garden Villa
              </Link>
            </div>
            <div onClick={(e) => {
              e.stopPropagation();
              openMenu()
            }} className={style.btn_open_menu}>
              <FaListUl color="var(--primary)" size={20} />
            </div>
            <div onClick={(e) => e.stopPropagation()} ref={refHeaderRight} className={style.header_right}>
              <div
                onClick={closeTimeOut}
                className={style.header_right_nav_link}
              >
                <Link href={'/'}>Trang chủ</Link>
                <Link href={'/danh-sach-villa'}>Villas</Link>
                <Link href={'/'}>Giới thiệu</Link>
                <Link href={'/blogs'}>Tin tức</Link>
                <Link href={'/'}>Liên hệ</Link>
              </div>
              <div className={style.header_right_auth}>
                {
                  !profile ?
                    <div className={style.header_right_link}>
                      <Link href={'/auth/register'}>Đăng ký</Link>
                      <Link href={'/auth/login'}>Đăng nhập</Link>
                    </div>
                    :
                    <div className={style.header_right_auth_link}>
                      <img src={profile?.avatar?.original_url ?? profile?.social_avatar} alt="" />
                      <Link href={mb ? '/account' : '/account/profile'}>
                        {profile?.fullname || profile.email}
                      </Link>
                    </div>
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}