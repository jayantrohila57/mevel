'use client'

import { Icons } from '@/components/common/icons'
import { site } from '@/site.config'
import { type INavigationMenu } from '@/types/navigation.interface'
import Link from 'next/link'
import * as React from 'react'

import { ModeToggle } from '../common/toggle'
import { Button } from '../ui/button'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'

export function HeadersNav({ menu }: INavigationMenu) {
  return (
    <nav className='fixed top-0 z-50 w-full'>
      <div className='flex h-14 w-full flex-row items-center justify-between  backdrop-blur-lg md:px-5'>
        <Link href='/'>
          <Button variant='ghost'>
            <div className='flex flex-row items-center justify-center gap-1'>
              <Icons.logo />
              <div className='mt-1 text-lg font-medium'>{site.name}</div>
            </div>
          </Button>
        </Link>
        <DesktopMenu menu={menu} />
        <div className='flex items-center justify-center gap-2'>
          <Link
            href='/contact'
            legacyBehavior
            passHref
            className='hidden md:static'>
            <Button variant={'outline'}>Contact us</Button>
          </Link>
          <div className='hidden sm:block'>
            <ModeToggle />
          </div>
          <MobileMenu menu={menu} />
        </div>
      </div>
    </nav>
  )
}
