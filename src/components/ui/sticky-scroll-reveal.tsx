'use client'

import { cn } from '@/lib/utils'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react'

import { Button } from './button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

export const StickyScroll = ({
  content,
  contentClassName
}: {
  content: {
    title: string
    description: string
    image: string
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // container: ref,
    smooth: 20,
    offset: ['start center', 'end center']
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })
  return (
    <motion.div
      className='relative grid grid-cols-6 gap-5 md:grid-cols-12'
      ref={ref}>
      <div className='col-span-6 flex flex-col items-start gap-5 pb-20'>
        {content.map((item, index) => (
          <motion.div
            className={`${activeCard === index ? 'dot-matrix ' : ' '}  rounded-2xl`}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3
            }}
            key={item?.title + index}>
            <Card
              key={index}
              className='flex h-full flex-col justify-between transition-all duration-300 hover:border-[0.5px] hover:border-primary/50 hover:bg-primary/10'>
              <CardHeader className='min-h-40'>
                <span className='w-full pb-5 font-mono text-xl slashed-zero text-primary'>0{++index}</span>
                <CardTitle className='pb-2'>{item?.title}</CardTitle>
                <CardDescription>{item?.description}</CardDescription>
              </CardHeader>
              <CardFooter className='flex h-full w-full items-end justify-end'>
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  className='group'>
                  Read More <ChevronRight className='ml-2 transition duration-300 group-hover:translate-x-2' />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        className={cn(
          'sticky top-20 col-span-6 hidden h-[80vh] overflow-hidden rounded-md bg-secondary backdrop-blur-sm [mask-image:radial-gradient(ellipse_150%_200%_at_0%_90%,#000_20%,transparent_100%)] lg:block',
          contentClassName
        )}>
        <div className='relative h-full w-full'>
          <Image
            src={content[activeCard]?.image ?? ''}
            alt={content[activeCard]?.title ?? ''}
            width={1920}
            height={1080}
            className='h-full w-full object-cover contrast-125 grayscale'
          />
          <div className='absolute bottom-10 right-0 flex   w-full items-center justify-center '>
            <Button
              variant={'ghost'}
              size={'lg'}
              className='group  bg-secondary/50   backdrop-blur-2xl'>
              Inquiry Now <ChevronRight className='ml-2 transition duration-300 group-hover:translate-x-2' />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
