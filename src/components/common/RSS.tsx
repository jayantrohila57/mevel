import { RssIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'

function RSS() {
  return (
    <Link href='/sitemap.xml'>
      <Button
        variant={'outline'}
        size={'icon'}>
        <RssIcon className='h-5 w-5 ' />
      </Button>
    </Link>
  )
}

export default RSS
