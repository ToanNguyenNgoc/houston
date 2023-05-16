import { NextPageWithLayout } from "@/common";
import { serverSideCache } from "@/config";
import { Branch } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { api } from "@/services";
import { GetServerSidePropsContext } from "next";
import style from '@/styles/branch.module.css'
import { HeadBanner, Seo } from "@/components";
import { slugify } from "@/utils";
import queryString from "query-string";

interface BranchProps {
  branch: Branch
}

const Branch: NextPageWithLayout = (props) => {
  const { branch } = props as BranchProps
  return (
    <>
      <Seo
        title={branch.name}
        description={branch.content}
        image_url={branch.image?.original_url}
        url={`branches/${slugify(branch.name)}&id=${branch.id}`}
      />
      <HeadBanner title={branch.name} image_url={branch.image?.original_url} content="Branch" />
    </>
  )
}
Branch.Layout = MainLayout
export default Branch

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