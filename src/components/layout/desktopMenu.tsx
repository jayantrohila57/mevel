'use client'

import { Icons } from '@/components/common/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { site } from '@/site.config'
import type { INavigationMenu } from '@/types/navigation.interface'
import Link from 'next/link'
import * as React from 'react'

import ListItem from './MenuListItem'

const DesktopMenu = ({ menu }: INavigationMenu) => {
  return (
    <NavigationMenu className='hidden sm:block'>
      <NavigationMenuList>
        {menu &&
          menu.map(({ newTab, slug, title, submenu, page }, index) => {
            return (
              <NavigationMenuItem key={slug + title}>
                {submenu ? (
                  <NavigationMenuTrigger>{title ? title : (page && page?.title) || 'No Title'}</NavigationMenuTrigger>
                ) : (
                  <Link
                    key={title + slug}
                    href={slug || (page && page?.slug) || '/'}
                    title={title || (page && page?.title) || 'No '}
                    target={newTab ? '_blank' : '_self'}
                    legacyBehavior
                    passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {title ? title : (page && page?.title) || 'No Title'}
                    </NavigationMenuLink>
                  </Link>
                )}
                {submenu && (
                  <NavigationMenuContent>
                    <ul className='grid grid-cols-2 gap-5 p-5 md:w-[400px]  lg:w-[600px]'>
                      {index == 0 && (
                        <li className='row-span-3'>
                          <NavigationMenuLink asChild>
                            <a
                              className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                              href='/'>
                              <Icons.logo className='h-40 w-40' />
                              <div className='mb-2 mt-4 text-2xl font-medium'>{site.name}</div>
                              <p className='text-base leading-tight text-muted-foreground'>{site.description}</p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {submenu &&
                        submenu.map(({ title, slug, description, newTab, page }) => {
                          return (
                            <ListItem
                              key={title + slug}
                              href={slug || (page && page.slug) || '/'}
                              title={title || (page && page.title) || 'No Link'}
                              target={newTab ? '_blank' : '_self'}>
                              <p className='text-xs'>
                                {' '}
                                {description || (page && page.description) || 'No Description'}
                              </p>
                            </ListItem>
                          )
                        })}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            )
          })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default DesktopMenu
