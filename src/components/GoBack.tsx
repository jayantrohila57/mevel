'use client'

import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

import { Button } from './ui/button'

function GoBack({ link }: { link: string }) {
  return (
    <div className='fixed left-8 top-16 '>
      <Button size='icon'>
        <Link href={link}>
          <ArrowLeftCircle className='h-6  fill-primary transition-all duration-300' />
        </Link>
      </Button>
    </div>
  )
}

export default GoBack
