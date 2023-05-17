/* eslint-disable @next/next/no-img-element */
import { Banner } from "@/interfaces"
import Slider, { Settings } from "react-slick"
import style from './home.module.css'
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { slugify } from "@/utils"
import { useState } from "react"


export const HomeBanner = ({ banners }: { banners: Banner[] }) => {
  const [crrSlide, setCrrSlide] = useState(0)
  const settings: Settings = {
    customPaging: (index) => {
      return (
        <button
          style={index === crrSlide ? {backgroundColor:'var(--primary)'}:{}}
          className={style.dot_item_btn}
        />
      )
    },
    dotsClass: style.banner_dot,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    afterChange: (currentSlide) => setCrrSlide(currentSlide),
  }
  const router = useRouter()
  const onBannerClick = (banner: Banner) => {
    switch (banner.type) {
      case 'BRANCH':
        router.push(`/branches/${slugify(banner.name)}&id=${banner.original_id}`)
        break;
      case 'VILLA':
        router.push(`/danh-sach-villa/${slugify(banner.name)}&id=${banner.original_id}`)
        break;
      default:
        break;
    }
  }
  return (
    <div className={style.banner_cnt}>
      <Slider {...settings}>
        {
          banners.map((item, i) => (
            <div key={item.id} className={style.banner_item_cnt}>
              <img
                style={item.content !== "" ? { filter: 'brightness(70%)' } : {}}
                src={item.media?.original_url} className={style.banner_item_img} alt=""
              />
              <div className={style.banner_item}>
                <div className={style.banner_item_content}>
                  {i == 0 && <h1 className={style.banner_item_name}>{item.name}</h1>}
                  <span className={style.banner_item_content}>{item.content}</span>
                  {
                    item.type !== 'HOME' &&
                    <div className={style.banner_item_btn}>
                      <Button
                        onClick={() => onBannerClick(item)}
                        variant='contained'
                        size='large'
                        style={{ backgroundColor: 'var(--primary)' }}
                      >
                        Khám phá ngay
                      </Button>
                    </div>
                  }
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}