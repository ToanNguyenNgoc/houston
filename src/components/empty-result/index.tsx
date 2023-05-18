import Image from 'next/image'
import style from './empty-result.module.css'
import { icon } from '@/assets/icon'
import { ReactNode } from 'react'

interface EmptyResultProps {
  children?: ReactNode;
  title?: string
}

export const EmptyResult = ({ children, title }: EmptyResultProps) => {
  return (
    <div className={style.container}>
      <Image
        src={icon.nullResult}
        alt='empty'
      />
      <span className={style.title}>
        {title ?? 'Không tìm thấy kết quả'}
      </span>
      {children}
    </div>
  )
}