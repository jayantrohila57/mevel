import { Icons } from '@/components/common/icons'

function Loading() {
  return (
    <div className='flex h-screen w-full animate-pulse items-center justify-center bg-black'>
      <Icons.logo />
    </div>
  )
}

export default Loading
