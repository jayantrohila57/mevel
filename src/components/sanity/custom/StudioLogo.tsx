import { Icons } from '@/components/common/icons'

function StudioLogo() {
  return (
    <button
      type='button'
      aria-label='Header logo'
      id='logo'
      className='flex flex-row items-end   justify-center active:scale-[.99]'>
      <Icons.logo />
    </button>
  )
}

export default StudioLogo
