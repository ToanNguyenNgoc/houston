import { NextPageWithLayout } from '@/common'
import { Seo } from '@/components'
import { HomeBanner, HomeBranch, HomeVilla, WelCome } from '@/components/pages/home'
import { baseURL } from '@/config'
import { Banner, Branch, Villa } from '@/interfaces'
import { MainLayout } from '@/layouts'
import { api } from '@/services'
import axios from 'axios'
import { GetStaticProps, GetStaticPropsContext } from 'next'

interface HomeProps {
  branches: Branch[];
  banners: Banner[]
}

const Home: NextPageWithLayout = (props) => {
  const { branches, banners } = props as HomeProps;
  return (
    <>
      <Seo title='Trang chủ' description='Trang chủ Houston Garden' url='' />
      <main>
        <HomeBanner banners={banners} />
        <WelCome />
        <HomeVilla/>
        <HomeBranch branches={branches} />
      </main>
    </>
  )
}
export default Home
Home.Layout = MainLayout

export const getStaticProps: GetStaticProps<HomeProps> = async (
  context: GetStaticPropsContext
) => {
  let branches: Branch[] = []
  let banners: Banner[] = []
  try {
    const response = await axios.get(`${baseURL}branches`)
    branches = response.data?.data
  } catch (error) { }
  //
  try {
    const response = await api.banners()
    banners = response.data
  } catch (error) { }
  return {
    props: { branches, banners },
    revalidate: 3600 * 24
  }
}