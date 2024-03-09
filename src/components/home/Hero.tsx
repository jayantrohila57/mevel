import { site } from '@/site.config'
import { ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

import ScrollDown from '../common/ScrollDown'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='relative h-full w-full overflow-x-hidden'>
      <div className='absolute left-80 top-52 h-96 w-96 animate-pulse rounded-full bg-gray-500/30 delay-75' />
      <div className='absolute right-80 top-24 h-96 w-96 animate-pulse rounded-full bg-gray-500/30' />
      <div className='absolute -top-0 right-10 h-96 w-96 animate-pulse rounded-full bg-gray-500/30 delay-75' />
      <div className='absolute -top-40 left-40 h-96 w-96 animate-pulse rounded-full bg-gray-500/30' />
      <div className='dot-matrix relative flex h-full w-full items-center justify-center backdrop-blur-3xl '>
        <div className='flex h-screen w-full flex-col items-center justify-center bg-gradient-to-t from-background via-transparent to-background pt-20 md:pt-0 '>
          <div className='absolute top-32 z-10 flex items-center gap-2 rounded-full border bg-secondary/20 p-2  md:top-28'>
            <Link href='/blog'>
              <div className='flex flex-row opacity-70 hover:opacity-100'>
                <span className='mt-0.5 rounded-full  px-2 py-1 text-xs font-semibold leading-none  '>New</span>
                <span className='mt-0.5 pr-2 text-sm'>Checkout Our Latest Blog.</span>
                <ExternalLink className='p-1' />
              </div>
            </Link>
          </div>
          <h1 className='max-w-4xl scroll-m-20 px-5  pb-2 text-left text-5xl font-bold tracking-tight  sm:text-6xl md:px-0 md:text-center  md:text-6xl'>
            {site.description}
          </h1>
          <h2 className='max-w-3xl scroll-m-20 px-5 py-3 pb-2 text-left text-lg font-light tracking-tight opacity-80 first:mt-0 sm:text-xl md:px-0 md:text-center md:text-2xl'>
            {site.subHeading}
          </h2>
          <div className='z-10 flex w-full  max-w-5xl flex-col items-center justify-center gap-5 p-5 md:flex-row'>
            <Link
              href='/contact'
              legacyBehavior
              passHref>
              <Button
                variant={'default'}
                className='group w-full  md:w-auto'>
                Read More <ChevronRight className='ml-2 transition duration-300 group-hover:translate-x-2' />
              </Button>
            </Link>
            <Link
              href='/contact'
              legacyBehavior
              passHref>
              <Button
                className='group w-full md:w-auto'
                variant={'outline'}>
                View Pricing <ChevronRight className='ml-2 transition duration-300 group-hover:translate-x-2' />
              </Button>
            </Link>
          </div>
          <div className='absolute bottom-0 z-10'>
            <ScrollDown link='#About' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
