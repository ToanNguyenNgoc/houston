/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { HeadBanner, Seo } from "@/components";
import { baseURL, captKey, serverSideCache } from "@/config";
import { Villa } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { api } from "@/services";
import { Button, Container, Drawer, useMediaQuery } from "@mui/material";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import queryString from "query-string";
import style from '@/styles/villa.module.css'
import { useQuery } from "@tanstack/react-query";
import Slider, { Settings } from "react-slick";
import { FormBooking, VillaUtil } from "@/components/pages/villa-detail";
import { settings } from "@/settings";
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";
import { QR_TIME_CACHE } from "@/assets/constants";
import { FaStar, FaThList } from "react-icons/fa";
import { fmPrice } from "@/utils";
import { useState } from "react";

interface VIllaProps {
  villa: Villa,
  villa_id: string
}


const VillaDetail: NextPageWithLayout = (props) => {
  const router = useRouter()
  const { villa, villa_id } = props as VIllaProps
  const [isLoading] = useProfileStore((state: ZProfileState) => [state.isLoading])
  const { data } = useQuery({
    queryKey: ['VILLA_GALLERIES', villa_id],
    queryFn: () => api.villa_galleries(villa_id),
    staleTime: QR_TIME_CACHE
  })
  const villaGalleries = data?.data.map(i => i.image?.original_url) ?? []
  const listImageUrl = [villa.thumbnail?.original_url ?? '', ...villaGalleries]
  const isMb = useMediaQuery('(max-width:767px)');
  return (
    <>
      <Seo
        title={villa.name}
        description={villa.description}
        url={router.asPath}
        image_url={villa.thumbnail?.original_url}
      />
      <Container>
        <div className={style.container}>
          <div className={style.head}>
            <div className={style.head_detail}>
              <div className={style.head_detail_left}>
                <h1 className={style.villa_name}>{villa.name}</h1>
                <p className={style.villa_cate}>
                  <FaThList size={13} color='var(--primary)' />
                  {villa.villa_cate?.villa_cate_name}
                </p>
                <p className={style.villa_star}>
                  <FaStar size={12} color='var(--primary)' /> 5,0
                </p>
              </div>
              <div className={style.head_detail_right}>

              </div>
            </div>
            <div className={style.head_banner_cnt}>
              {
                isMb ?
                  <SliderImage images={listImageUrl} />
                  :
                  <div className={style.head_banner_desk}>
                    {
                      listImageUrl.slice(0, 4).map(url => (
                        <div key={url} className={style.banner_item_cnt}>
                          <img src={url} alt="" />
                        </div>
                      ))
                    }
                  </div>
              }
            </div>
          </div>
          {!isMb && <Price villa={villa} />}
          <div className={style.body}>
            <div className={style.body_left}>
              <p className={style.body_title}>
                Giới thiệu về biệt thự này
              </p>
              <span className={style.body_desc}>
                {villa.description}
              </span>
              <VillaUtil />
            </div>
            {
              !isMb ?
                <div className={style.body_right}>
                  <FormBooking villa={villa} />
                </div>
                :
                <Bottom villa={villa} />
            }
          </div>
        </div>
      </Container>
    </>
  )
}
VillaDetail.Layout = MainLayout
export default VillaDetail

const SliderImage = ({ images }: { images: string[] }) => {
  const [cur, setCur] = useState(1)
  const bannerSettings: Settings = {
    ...settings,
    autoplay: false,
    afterChange: (currentSlide) => setCur(currentSlide + 1)
  }
  return (
    <div className={style.head_banner_mb}>
      <div className={style.slide_page}>
        {cur}/{images.length}
      </div>
      <Slider {...bannerSettings}>
        {
          images.map((url, i) => (
            <div key={i} className={style.slider_item}>
              <img src={url} alt="" />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

const Price = ({ villa }: { villa: Villa }) => {
  return (
    <div className={style.price}>
      {
        villa.special_price < villa.price ?
          <>
            <span>{fmPrice(villa.special_price)} VND/đêm</span>
            <span>{fmPrice(villa.price)} VND/đêm</span>
          </>
          :
          <span>{fmPrice(villa.price)} VND/đêm</span>
      }
    </div>
  )
}
const Bottom = ({ villa }: { villa: Villa }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} anchor='bottom' >
        <div className={style.bottom_form_cnt}>
          <FormBooking villa={villa} />
        </div>
      </Drawer>
      <div className={style.bottom}>
        <div className={style.bottom_left}>
          <Price villa={villa} />
        </div>
        <div className={style.bottom_right}>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            size='large'
            style={{ backgroundColor: 'var(--primary)', width: '100%' }}
          >
            Đặt phòng
          </Button>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  serverSideCache(context)
  const { params } = context
  const queryParams = queryString.parse(params?.villaId as string)
  let villa: Villa | null
  try {
    const response = await axios.get(`${baseURL}villas/${queryParams.id}`, {
      params: { 'includes': 'category|branch|full_address' }
    })
    villa = response.data.data
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { villa: villa, villa_id: queryParams.id }
  }
}