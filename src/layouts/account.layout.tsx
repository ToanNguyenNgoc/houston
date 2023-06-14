/* eslint-disable @next/next/no-img-element */
import { LayoutProps } from "@/common";
import { AuthLayout } from "@/layouts/auth.layout";
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";
import style from '@/styles/account-layout.module.css';
import { Container } from "@mui/material";
import Link from "next/link";
import { MdOutlineMail, MdPhone } from 'react-icons/md';
import { FaUserAlt, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa'
import { useRouter } from "next/router";

const links = [
  {
    icon: <FaUserAlt size={14} color="var(--primary)" />,
    href: '/account/profile',
    title: 'Tài khoản của tôi'
  },
  {
    icon: <FaShoppingBag size={14} color="var(--primary)" />,
    href: '/account/bookings',
    title: 'Lịch sử đặt phòng'
  },
]

export function AccountLayout({ children }: LayoutProps) {
  const router = useRouter()
  const [profile, logoutProfile] = useProfileStore((state: ZProfileState) => [state.profile, state.logoutProfile])
  const onLogout = async () => {
    await logoutProfile()
    router.push('/')
  }
  return (
    <AuthLayout>
      <Container>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.left_profile}>
              <div className={style.l_profile_left}>
                <img src={profile?.avatar?.original_url ?? profile?.social_avatar} alt="" />
              </div>
              <div className={style.l_profile_right}>
                <span className={style.l_profile_right_name}>{profile?.fullname}</span>
                <div className={style.l_profile_right_item}>
                  <MdOutlineMail color="var(--white)" size={12} />
                  <span> {profile?.email}</span>
                </div>
                <div className={style.l_profile_right_item}>
                  <MdPhone color="var(--white)" size={12} />
                  <span> {profile?.telephone}</span>
                </div>
              </div>
            </div>
            <ul className={style.left_link_list}>
              {
                links.map((link, i) => (
                  <li key={i} className={style.left_link_list_item}>
                    <Link
                      style={link.href === router.pathname ? { backgroundColor: 'var(--bg-act)' } : {}}
                      className={style.l_nav_link} href={link.href}
                    >
                      {link.icon}
                      <span className={style.l_nav_link_txt}>{link.title}</span>
                    </Link>
                  </li>
                ))
              }
              <li className={style.left_link_list_item}>
                <div onClick={onLogout} className={style.l_nav_link} >
                  <FaSignOutAlt size={14} color="var(--primary)" />
                  <span className={style.l_nav_link_txt}>Đăng xuất</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            style={router.pathname !== '/account' ? { 
              left: '0' } : {}}
            className={style.right}
          >
            {children}
          </div>
        </div>
      </Container>
    </AuthLayout>
  )
}