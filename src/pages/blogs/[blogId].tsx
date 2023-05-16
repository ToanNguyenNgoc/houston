import { NextPageWithLayout } from "@/common";
import { HeadBanner, Seo } from "@/components";
import { apiBlog, serverSideCache } from "@/config";
import { Blog } from "@/interfaces";
import { MainLayout } from "@/layouts";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import queryString from "query-string";
import style from '@/styles/blogs.module.css'
import { Container } from "@mui/material";

interface BlogDetailProps {
  blog: Blog
}
//


export const BlogDetail: NextPageWithLayout = (props) => {
  const { blog } = props as BlogDetailProps
  const image_thumb = `${apiBlog}${blog.attributes.image?.data?.attributes?.url}`
  return (
    <>
      <Seo
        title={blog.attributes.title}
        description={blog.attributes.description} url=""
        image_url={image_thumb}
      />
      <HeadBanner
        image_url={image_thumb}
        title={blog.attributes?.title}
      />
      <Container>
        <div className={style.detail_body}>
          <span className={style.detail_body_desc}>{blog.attributes?.description}</span>
          <div
            className={style.detail_body_content}
            dangerouslySetInnerHTML={{__html:blog.attributes.content}}
          />
        </div>
      </Container>
    </>
  )
}
BlogDetail.Layout = MainLayout
export default BlogDetail
export async function getServerSideProps(context: GetServerSidePropsContext) {
  serverSideCache(context)
  const { params } = context
  const queryParams = queryString.parse(params?.blogId as string)
  let blog: Blog | null
  try {
    const response = await axios.get(`${apiBlog}/api/articles/${queryParams.id}`, {
      params: {
        'populate[category][populate]': '*',
        'populate[image][populate]': '*',
        'populate[author][populate]': '*',
        'populate[localizations][populate]': '*'
      }
    })
    blog = response.data.data
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { blog }
  }
}