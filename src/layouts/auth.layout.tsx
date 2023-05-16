/* eslint-disable react-hooks/exhaustive-deps */
import { LayoutProps } from "@/common";
import { Footer, Header } from "@/components";
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function AuthLayout({ children }: LayoutProps) {
  const router = useRouter()
  const [isLoading, profile] = useProfileStore((state: ZProfileState) => [state.isLoading, state.profile])
  useEffect(() => {
    if (!isLoading && !profile) {
      router.push('/auth/login')
    }
  }, [isLoading, profile])
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}