import APIFactory from '@/api/api'
import Scroll from '@/components/common/Scroll'
import ScrollToTopButton from '@/components/common/ScrollToUp'
import Footer from '@/components/layout/Footer'
import { HeadersNav } from '@/components/layout/Header'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Fetch menu and footer data concurrently
  const [menuResponse, footerResponse] = await Promise.all([
    APIFactory().Menu(),
    APIFactory().footer()
  ])

  // Extract menu and footer from responses (if available)
  const menu = menuResponse?.menu || []
  const footer = footerResponse?.footer || []

  return (
    <>
      <HeadersNav menu={menu} />
      {children}
      <Footer footer={footer} />
      <Scroll />
      <ScrollToTopButton />
    </>
  )
}
