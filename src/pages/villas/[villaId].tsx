/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { HeadBanner, Seo } from "@/components";
import { baseURL, captKey, serverSideCache } from "@/config";
import { Villa } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { api } from "@/services";
import { Container } from "@mui/material";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useCallback, useState } from "react";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import style from '@/styles/villa.module.css'
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import { FormBooking, VillaUtil } from "@/components/pages/villa-detail";
import { settings } from "@/settings";
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";
import moment from "moment";

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
    queryFn: () => api.villa_galleries(villa_id)
  })
  return (
    <>
      <Seo
        title={villa.name}
        description={villa.description}
        url={router.asPath}
        image_url={villa.thumbnail?.original_url}
      />
      <HeadBanner
        image_url={villa.thumbnail?.original_url}
        title={villa.name}
      />
      <div className={style.container}>
        <Container>
          <div className={style.body}>
            <div className={style.body_left}>
              <h1 className={style.body_left_name}>{villa.name}</h1>
              <div className={style.body_left_images}>
                <Slider {...settings}>
                  {
                    data?.data?.map((item: any, index: number) => (
                      <div className={style.slick_img_cnt} key={index}>
                        <img
                          className={style.slick_img}
                          src={item.image?.original_url}
                          alt=""
                        />
                      </div>
                    ))
                  }
                </Slider>
              </div>
              <div className={style.body_left_desc}>
                {villa.description}
              </div>
              <VillaUtil/>
            </div>
            <div className={style.body_right}>
              {!isLoading && <FormBooking villa={villa} />}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
VillaDetail.Layout = MainLayout
export default VillaDetail

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