import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

/**
 * Renders a 404 "Page Not Found" page.
 *
 * Returns a React component with:
 * - A heading with the 404 status code and message.
 * - A paragraph explaining the page could not be found.
 * - A link back to the home page.
 */
export default function NotFound() {
  return (
    <>
      <div className=' flex h-screen  flex-col items-center justify-center gap-5 p-5 '>
        <div className='absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
          <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]'></div>
        </div>
        <Icons.logo />
        <h1 className='flex flex-col px-5 text-center text-6xl font-bold'>
          <span className='w-full font-mono text-7xl'>404 </span>Page Not Found
        </h1>
        <p className='mt-4 max-w-xl px-5 text-center text-lg text-primary/90'>
          Oops! The page you&apos;re looking for does not exist. It might have been moved or deleted.
        </p>
        <Link href='/'>
          <Button>Go Back to Home</Button>
        </Link>
      </div>
    </>
  )
}
