import { site } from '@/site.config'
import { ArrowRightCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import ScrollDown from '../ScrollDown'
import { Icons } from '../icons'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='relative   '>
      <div className='absolute left-80 top-52 h-96 w-96 rounded-full bg-red-500/20' />
      <div className='absolute right-80 top-20 h-96 w-96 rounded-full bg-blue-500/20' />
      <div className='absolute -top-0 right-10 h-96 w-96 rounded-full bg-cyan-500/20' />
      <div className='absolute -top-0 left-10 h-96 w-96 rounded-full bg-violet-500/20' />
      <div className='dot-matrix relative flex h-full w-full items-center justify-center backdrop-blur-3xl '>
        <div className=' flex h-[90vh] w-full flex-col items-center justify-center bg-gradient-to-t from-background via-transparent to-background '>
          <div className='absolute top-20 z-10 flex items-center gap-2 rounded-full border bg-secondary/20  p-2'>
            <Link href='/'>
              <div className='flex flex-row opacity-70 hover:opacity-100'>
                <span className='mt-0.5 rounded-full  px-2 py-1 text-xs font-semibold leading-none  '>
                  New
                </span>
                <span className='mt-0.5 pr-2 text-sm'>
                  Checkout Our Latest Blog.
                </span>
                <ExternalLink className='p-1' />
              </div>
            </Link>
          </div>
          <h1 className='max-w-4xl scroll-m-20 pb-2 text-center text-4xl font-bold tracking-tight  md:text-5xl'>
            {site.description}
          </h1>
          <h2 className='max-w-4xl scroll-m-20 pb-2 text-center text-3xl font-normal tracking-tight opacity-80 first:mt-0'>
            {site.subHeading}
          </h2>
          <div className='z-10 flex w-full max-w-5xl flex-row items-center justify-center gap-5 py-2'>
            <Link
              href='/contact'
              legacyBehavior
              passHref>
              <Button>
                Get Started <ArrowRightCircle className='p-1 ' />
              </Button>
            </Link>
            <Link
              href='/contact'
              legacyBehavior
              passHref>
              <Button variant={'secondary'}>View Pricing</Button>
            </Link>
          </div>
          <div className='absolute bottom-0 z-10'>
            <ScrollDown link='#about' />
          </div>
        </div>

        <div className='absolute inset-0 h-full w-full rounded-full border border-x-2 border-secondary-foreground/30 border-x-secondary-foreground/30 p-[5%] sm:[mask-image:linear-gradient(transparent_0%,white_10%,white_90%,transparent_100%)]'>
          <div className='relative h-full w-full rounded-full border border-x-2 border-secondary-foreground/30 border-x-secondary-foreground/30 p-[5%]'>
            <Icons.hero6 className='absolute -top-8 left-60 h-20 w-20 fill-primary p-2 transition-all duration-300 hover:scale-105' />
            <div className='relative h-full w-full rounded-full border border-x-2 border-secondary-foreground/30 border-x-secondary-foreground/30'>
              <Icons.hero1 className='absolute -bottom-28 left-60 h-20 w-20 fill-primary p-2 transition-all duration-300 hover:scale-105' />
              <Icons.hero5 className='absolute -right-24 top-28 h-20 w-20 fill-primary p-2 transition-all duration-300 hover:scale-105' />
              <Icons.hero2 className='absolute -left-10 bottom-32 h-20 w-20 fill-primary p-2 transition-all duration-300 hover:scale-105' />
              <Icons.hero3 className='absolute -bottom-12 right-40 h-20 w-20 fill-primary p-2 transition-all duration-300 hover:scale-105' />
              <Icons.hero4 className='absolute -top-24 right-20 h-20 w-20 fill-primary p-2 transition-all duration-300 hover:scale-105' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
