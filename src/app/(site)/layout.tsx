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
    </>
  )
}
