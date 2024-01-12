'use client'

import { ArrowUpCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { Button } from './ui/button'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      const threshold = 300
      setIsVisible(scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='fixed bottom-4 right-4'>
      {isVisible && (
        <Button
          size='icon'
          onClick={() => scrollToTop()}>
          <ArrowUpCircle className='h-6  fill-primary transition-all duration-300' />
        </Button>
      )}
    </div>
  )
}

export default ScrollToTopButton
