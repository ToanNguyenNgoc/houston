/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { baseURL } from "@/config";
import { MainLayout } from "@/layouts";
import { fmPrice, slugify } from "@/utils";
import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import style from '@/styles/villas.module.css'
import {  Seo } from "@/components";
import { useRouter } from "next/router";
import { icon } from '@/assets/icon'
import Image from "next/image";
import { Villa } from "@/interfaces";
import { Container } from "@mui/material";

interface Props {
  villas: Villa[]
}

const Villas: NextPageWithLayout = (props) => {
  const router = useRouter()
  const { villas } = props as Props;
  return (
    <div>
      <Seo title="Danh sách villa" description="Danh sách villa" url={router.pathname} />
      <div className={style.container}>
        <div className={style.banner}>
          <Image
            className={style.banner_img}
            src={icon.villasBg}
            alt=""
          />
          <div className={style.banner_content}>
            <p className={style.banner_content_title}>Phòng nghỉ & Villa</p>
            <span>
              Các phòng và biệt thự của chúng tôi được thiết kế tinh tế<br /> bằng vật liệu tự nhiên
              tạo cảm giác kết nối với môi trường xung quanh
            </span>
          </div>
        </div>
        <Container>
          <div className={style.villa}>
            <ul className={style.villa_list}>
              {
                villas.map((item, index) => (
                  <li key={item.id} className={style.villa_list_item}>
                    <Link
                      className={style.villa_item}
                      href={`/danh-sach-villa/${slugify(item.name)}&id=${item.id}`}
                    >
                      <Image src={icon.alternate} className={style.item_bg} alt="" />
                      <div className={(index % 2 === 0) ? style.item : style.item_re}>
                        <img src={item.thumbnail?.original_url ?? ''} className={style.item_img} alt="" />
                        <div className={style.item_detail}>
                          <h1>{item.name}</h1>
                          <span className={style.item_detail_desc}>
                            {item.description}
                          </span>
                          <div className={style.item_detail_price}>
                            {
                              item.special_price < item.price ?
                                <>
                                  <p>{fmPrice(item.special_price)}VND / 1 đêm</p>
                                  <p>{fmPrice(item.price)}VND</p>
                                </>
                                :
                                <p>{fmPrice(item.price)}VND / 1 đêm</p>
                            }
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </Container>
      </div>
    </div>
  )
}

Villas.Layout = MainLayout
export default Villas

export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  let villas = []
  try {
    const response = await axios.get(`${baseURL}villas`, {
      params: {
        page: 1,
        limit: 15
      }
    }).then(res => res.data.data)
    villas = response
  } catch (error) {
    console.log(error)
  }
  return {
    props: { villas },
    revalidate: 3600 * 24
  }
}