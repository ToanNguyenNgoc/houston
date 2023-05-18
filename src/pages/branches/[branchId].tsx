/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { serverSideCache } from "@/config";
import { Branch, Villa } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { api } from "@/services";
import { GetServerSidePropsContext } from "next";
import style from '@/styles/branch.module.css'
import { EmptyResult, Seo, VillaCard, VillaCardLoad } from "@/components";
import { slugify } from "@/utils";
import queryString from "query-string";
import { Button, Container, IconButton } from "@mui/material";
import { FaMapMarkerAlt, FaHeart, FaShare, FaAngleDown } from 'react-icons/fa'
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QR_TIME_CACHE } from "@/assets/constants";
import { LoadingButton } from "@mui/lab";

interface BranchProps {
  branch: Branch
}

const Branch: NextPageWithLayout = (props) => {
  const { branch } = props as BranchProps
  const tabs = [
    { id: 1, name: 'Biệt thự' },
    { id: 2, name: 'Giới thiệu' },
  ]
  const [tab, setTab] = useState(1)
  const renderTab = () => {
    let child: JSX.Element
    switch (tab) {
      case 1:
        return child = <TabVillas branch={branch} />;
      case 2:
        return child = <TabDecs branch={branch} />;
      default:
        break;
    }
  }
  return (
    <>
      <Seo
        title={branch.name}
        description={branch.content}
        image_url={branch.image?.original_url}
        url={`branches/${slugify(branch.name)}&id=${branch.id}`}
      />
      <Container>
        <div className={style.container}>
          <div className={style.banner_cnt}>
            <div className={style.banner_head}>
              <div className={style.banner_head_left}>
                <h1 className={style.branch_name}>{branch.name}</h1>
                <span className={style.banner_address}>
                  <FaMapMarkerAlt color="var(--primary)" style={{ margin: '0px 4px -1px 0px' }} />
                  {branch.address}
                </span>
              </div>
              <div className={style.banner_head_right}>
                {/* <div className={style.heart_btn}>
                  <FaShare />
                  Chia sẻ
                </div>
                <div className={style.heart_btn}>
                  <FaHeart />
                  Yêu thích
                </div> */}
              </div>
            </div>
            <div className={style.banner_image_cnt}>
              <img src={branch.image?.original_url} className={style.banner_image} alt="" />
            </div>
          </div>
          <ul className={style.tab_cnt}>
            {
              tabs.map(item => (
                <li
                  onClick={() => setTab(item.id)}
                  style={item.id === tab ? { color: 'var(--primary)' } : {}}
                  key={item.id}
                  className={style.tab_item}
                >
                  {item.name}
                </li>
              ))
            }
          </ul>
          <div className={style.tab_render_cnt}>
            {renderTab()}
          </div>
        </div>
      </Container>
    </>
  )
}
Branch.Layout = MainLayout
export default Branch

interface TabVillasProps {
  branch: Branch
}

const TabVillas = ({ branch }: TabVillasProps) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['BRANCH_VILLA', branch.id],
    queryFn: ({ pageParam = 1 }) => api.villas({
      page: pageParam,
      limit: 16,
      branch_id: branch.id,
      status: true,
    }),
    staleTime: QR_TIME_CACHE,
    getNextPageParam: (page: any) => page?.current_page + 1,
  })
  const villas = data?.pages?.map(i => i.data).flat() ?? []
  const totalItem = data?.pages[0]?.total ?? 0
  return (
    <div>
      <ul className={style.villa_list}>
        {
          isLoading ?
            [1, 2, 3, 4].map(i => (
              <li key={i} className={style.villa_list_item}>
                <VillaCardLoad />
              </li>
            ))
            :
            villas.map(item => (
              <li key={item.id} className={style.villa_list_item}>
                <VillaCard villa={item} />
              </li>
            ))
        }
      </ul>
      <div className={style.villa_bot}>
        {
          villas.length < totalItem &&
          <LoadingButton
            variant="contained"
            loading={isFetchingNextPage}
            style={{ backgroundColor: 'var(--primary)' }}
            onClick={() => fetchNextPage()}
          >
            <FaAngleDown size={20} />
          </LoadingButton>
        }
      </div>
      {!isLoading && totalItem === 0 && <EmptyResult title="Đang cập nhật danh sách biệt thự" />}
    </div>
  )
}
const TabDecs = ({ branch }: { branch: Branch }) => {
  return (
    <div
      className={style.desc_cnt}
      dangerouslySetInnerHTML={{ __html: branch.description }}
    />
  )
}







export async function getServerSideProps(context: GetServerSidePropsContext) {
  serverSideCache(context)
  let branch: Branch
  const { params } = context
  const queryParams = queryString.parse(params?.branchId as string) as { id: string }
  try {
    const response = await api.branchById(queryParams.id)
    branch = response.data
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: { branch }
  }
}