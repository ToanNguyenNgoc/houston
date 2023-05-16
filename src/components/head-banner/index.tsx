/* eslint-disable @next/next/no-img-element */
import style from './head-banner.module.css'

interface HeadBannerProps {
  image_url?: string;
  title?: string;
  content?: string;
}

export const HeadBanner = (props: HeadBannerProps) => {
  return (
    <div className={style.container}>
      <img src={props.image_url} alt="" />
      <div className={style.body}>
        <h1 className={style.title}>{props.title}</h1>
        <span className={style.content}>{props.content}</span>
      </div>
    </div>
  )
}