import Scroll from '@/components/Scroll'
import ScrollToTopButton from '@/components/ScrollToUp'
import { HeadersNav } from '@/components/layout/Header'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeadersNav />
      {children}
      <Scroll />
      <ScrollToTopButton />
    </>
  )
}
