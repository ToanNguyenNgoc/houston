import { useState } from 'react';
import style from './bottom-navigation.module.css'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FaGripVertical, FaHome, FaNewspaper, FaUserAlt } from "react-icons/fa"
import { useRouter } from 'next/router';
import { ZProfileState } from '@/stores/zustand/type';
import { useProfileStore } from '@/stores/zustand';

export const BottomNavigate = () => {
  const [profile] = useProfileStore((state: ZProfileState) => [state.profile])
  const router = useRouter()
  const links = [
    { title: 'Trang chủ', href: '/', icon: <FaHome size={18} style={{ marginBottom: '4px' }} /> },
    { title: 'Villa', href: '/danh-sach-villa', icon: <FaGripVertical size={18} style={{ marginBottom: '4px' }} /> },
    { title: 'Tin tức', href: '/blogs', icon: <FaNewspaper size={18} style={{ marginBottom: '4px' }} /> },
    {
      title: profile ? 'Tài khoản' : 'Đăng nhập',
      href: profile ? '/account' : '/auth/login',
      icon: <FaUserAlt size={18} style={{ marginBottom: '4px' }} />
    },
  ]
  const onChange = (link: typeof links[0]) => {
    router.push({ pathname: link.href })
  }
  return (
    <div className={style.container}>
      <BottomNavigation
        showLabels
        value={links.findIndex(i => i.href === router.asPath)}
      >
        {
          links.map((link, i) => (
            <BottomNavigationAction onClick={() => onChange(link)} key={i} label={link.title} icon={link.icon} />
          ))
        }
      </BottomNavigation>
    </div>
  )
}