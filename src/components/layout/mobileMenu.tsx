'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet'
import { site } from '@/site.config'
import type { INavigationMenu } from '@/types/navigation.interface'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

import { Icons } from '../common/icons'
import { ModeToggle } from '../common/toggle'
import ListItem from './MenuListItem'

const MobileMenu = ({ menu }: INavigationMenu) => {
  return (
    <Sheet>
      <SheetTrigger className='mr-2 block rounded-xl border p-1.5 md:hidden'>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        side={'bottom'}
        className='w-full rounded-t-3xl'>
        <NavigationMenu>
          <NavigationMenuList className='flex flex-col items-start justify-items-start p-0'>
            <div className='flex h-full w-full select-none flex-col justify-end px-5'>
              <Icons.logo className='h-20 w-20' />
              <div className='my-2 text-base font-medium'>
                <span>{site.name}</span>
              </div>
              <p className='text-xs leading-tight text-muted-foreground'>{site.description}</p>
            </div>
            <Accordion
              type='single'
              collapsible
              className='w-full'>
              {menu &&
                menu.map(({ newTab, slug, title, submenu, page }) => {
                  return (
                    <AccordionItem
                      value={title}
                      key={slug + title}>
                      <NavigationMenuItem className='w-full'>
                        {submenu ? (
                          <AccordionTrigger className='py-2'>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              {title ? title : (page && page?.title) || 'No Title'}
                            </NavigationMenuLink>
                          </AccordionTrigger>
                        ) : (
                          <div className='py-2'>
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
                          </div>
                        )}
                        <AccordionContent>
                          {submenu && (
                            <ul className='grid w-full grid-cols-2 gap-2 rounded-xl border p-2'>
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
                          )}
                        </AccordionContent>
                      </NavigationMenuItem>
                    </AccordionItem>
                  )
                })}
            </Accordion>
          </NavigationMenuList>
        </NavigationMenu>
        <SheetFooter className='flex flex-row p-5  '>
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
