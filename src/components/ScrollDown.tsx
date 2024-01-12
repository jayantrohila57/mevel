'use client'

import Lenis from '@studio-freight/lenis'
import { ArrowDownCircle } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'

import { Button } from './ui/button'

function ScrollDown({ link }: { link: string }) {
  const lenisRef = useRef<Lenis | null>(null)
  useEffect(() => {
    lenisRef.current = new Lenis()
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
      }
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const handleClick = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(link)
    }
  }, [link])

  return (
    <Button
      variant={'ghost'}
      size='icon'
      onClick={handleClick}>
      <ArrowDownCircle className='h-10 w-10 animate-pulse cursor-pointer p-1 opacity-30 hover:opacity-50' />
    </Button>
  )
}

export default ScrollDown
