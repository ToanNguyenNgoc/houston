import { LayoutProps } from "@/common";
import { Footer, Header } from "@/components";

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}