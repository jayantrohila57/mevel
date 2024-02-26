'use client'

import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className='  flex h-screen flex-col items-center justify-center gap-5 p-5 '>
      <div className='absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
        <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]'></div>
      </div>
      <Icons.logo />
      <h1 className='flex flex-col px-5 text-center text-3xl font-bold'>
        <span className='w-full p-5 text-5xl'>Oops! </span>
        Something went wrong!
      </h1>

      <code className='mt-4 max-w-xl rounded-xl border p-5 text-center font-mono text-lg slashed-zero text-primary/90 shadow-sm backdrop-blur-md'>
        Error received in requested resource <br />
        Message:
        {error.message}
      </code>
      <div className='flex flex-row gap-5'>
        <Button onClick={() => reset()}>Try again</Button>
        <Link href='/'>
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
