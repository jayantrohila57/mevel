import { site } from '@/site.config'
import type { IFooterMenu } from '@/types/footer.interface'
import Link from 'next/link'

import RSS from '../common/RSS'
import Social from '../common/Social'
import { Icons } from '../common/icons'
import { ModeToggle } from '../common/toggle'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Footer({ footer }: IFooterMenu) {
  return (
    <div>
      <footer className=' h-full w-full flex-row border-t px-5 py-10 md:px-10'>
        <div className='relative flex flex-col-reverse justify-between gap-8 md:flex-row'>
          <div className='absolute bottom-0 left-0 right-0 top-0 z-0 rotate-180 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

          <div className='z-10 flex max-w-5xl flex-col justify-between gap-8 py-5 pr-5 sm:flex-row md:max-w-xs md:flex-col md:pt-0 '>
            <div className='w-full'>
              <Link href='/'>
                <div className='flex flex-row items-start justify-start gap-1'>
                  <Icons.logo />
                  <div className='mt-1 text-lg font-medium'>{site.name}</div>
                </div>
              </Link>
              <p className='pb-5 text-sm leading-tight text-muted-foreground'>{site.description}</p>
              <p className='pb-1 text-sm'>
                <span className='pr-2 text-muted-foreground'>Email:</span>
                hello@Codemevel.com
              </p>
              <p className='pb-1 text-sm'>
                <span className='pr-2 text-muted-foreground'>Phone:</span> +91 7500-310-305
              </p>
              <p className='w-full pb-1 text-sm'>
                <span className='pr-2 text-muted-foreground'>Address: </span> Mayur Vihar Phase 2 - Opposite Sunjay
                Memorial School, Delhi
              </p>
            </div>
            <div className='grid w-full grid-cols-2 gap-8'>
              <div className='col-span-2'>
                <h4 className='mb-2 text-lg font-semibold'>Supported Payment</h4>
                <div className='flex space-x-2'>
                  <Icons.paypal className='h-6 w-9' />
                  <Icons.visa className='h-10 w-auto' />
                </div>
              </div>
              <div className='col-span-2'>
                <h4 className='mb-2 text-lg font-semibold'>Connect On Social</h4>
                <div className='flex gap-5'>
                  <Social />
                </div>
              </div>
            </div>
          </div>
          <div className='z-10 col-span-1 grid w-full max-w-4xl grid-cols-1 gap-8 py-5 md:col-span-2 md:pt-0'>
            <div className='grid w-full grid-cols-1 gap-8 py-5 md:grid-cols-5 md:py-0'>
              <div className='col-span-1 md:col-span-4'>
                <h4 className='mb-2 text-lg font-semibold'>Sign up to our Newsletter</h4>
                <form className='flex space-x-2'>
                  <Input
                    className='flex-1'
                    placeholder='Enter your email'
                    type='email'
                  />
                  <Button type='submit'>Subscribe</Button>
                </form>
              </div>
              <div className='col-span-1 flex h-full w-full items-center justify-start gap-2 md:col-span-1 md:justify-end'>
                <ModeToggle />
                <RSS />
              </div>
            </div>
            <div className='grid w-full grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-5'>
              {footer &&
                footer?.map(({ title, submenu }) => {
                  return (
                    <div key={title}>
                      <h3 className='mb-5 text-lg font-semibold'>{(title && title) || 'No Title'}</h3>
                      <ul className='space-y-1 text-sm md:space-y-2'>
                        {submenu &&
                          submenu?.map(({ newTab, slug, title }) => {
                            return (
                              <li key={slug + title}>
                                <Link
                                  className='underline-offset-4 hover:underline'
                                  target={newTab ? '_blank' : '_self'}
                                  href={slug || '/'}>
                                  {title || 'No Title'}
                                </Link>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <div className='z-10 col-span-1 border-t border-gray-700 pt-5 text-left text-sm md:col-span-3'>
          <span>© 2024 Codemevel All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
