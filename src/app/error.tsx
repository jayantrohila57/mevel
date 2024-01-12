'use client'

import { Icons } from '@/components/icons'
// Error components must be Client Components
//
import Link from 'next/link'
import { useEffect } from 'react'

// import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className='hero-background flex h-screen w-full flex-col items-center justify-center gap-5 bg-black'>
      <Icons.logo />
      <h2 className='text-3xl font-semibold'>Something went wrong!</h2>
      <p className='mx-auto max-w-2xl p-5 text-xl '>
        Error recieved in requested resource, Message:{error.message}
      </p>
      {/* <Button
        title="Try again"
        onClick={() => reset()}
        ariaLabel=" Try again"
      /> */}
      {/* <Link href="/">
        <Button title="Return Home" ariaLabel="Return Home" />
      </Link> */}
    </div>
  )
}
