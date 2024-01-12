import { Icons } from '@/components/icons'
 
// import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className='hero-background flex h-screen w-full  flex-col items-center justify-center gap-5 bg-black'>
      <Icons.logo />
      <h2 className='text-3xl font-semibold'>Not Found</h2>
      <p className='text-xl '>
        Sorry about that! Try returning to one of our main pages to find what
        you’re looking for.
      </p>
      {/* <Link href="/">
        <Button title="Return Home" ariaLabel="Return Home" />
      </Link> */}
    </div>
  )
}
