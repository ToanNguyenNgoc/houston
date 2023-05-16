/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { Seo } from "@/components";
import { MainLayout } from "@/layouts";
import { useRouter } from "next/router";
import style from '@/styles/blogs.module.css'
import { Container } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { apiBlog } from "@/config";
import { Blog } from "@/interfaces";
import Link from "next/link";
import moment from "moment";

interface BlogsProps {
  blogs: Blog[]
}

const Blogs: NextPageWithLayout = (props) => {
  const router = useRouter()
  const { blogs } = props as BlogsProps
  return (
    <>
      <Seo title="Tin tức" description="tin tức" url={router.pathname} />
      <Container>
        <div className={style.container}>
          <ul className={style.blog_list}>
            {
              blogs.map(item => (
                <li key={item.id} className={style.blog_list_item}>
                  <Link href={`/blogs/${item.attributes.slug}&id=${item.id}`} className={style.blog_link}>
                    <div className={style.item_img}>
                      <img src={`${apiBlog}${item.attributes?.image?.data?.attributes?.url}`} alt="" />
                    </div>
                    <div className={style.item_detail}>
                      <span className={style.detail_title}>
                        {item.attributes?.title}
                      </span>
                      <div className={style.detail_author_create}>
                        <p>{moment(item.attributes?.createdAt).format("D [thg] M, YYYY")}</p>
                        <p>{item.attributes?.author?.data?.attributes?.name}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </>
  )
}
Blogs.Layout = MainLayout
export default Blogs

export const getStaticProps: GetStaticProps<BlogsProps> = async (
  context: GetStaticPropsContext
) => {
  let blogs = []
  try {
    const res = await axios.get(`${apiBlog}/api/articles`,
      { params: { 'populate': '*' } }
    )
    blogs = res.data.data
  } catch (error) {
    console.log(error)
  }
  return {
    props: { blogs },
    revalidate: 3600 * 24
  }
}