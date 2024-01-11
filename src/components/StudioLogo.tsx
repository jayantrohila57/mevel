import Logo from './Logo'

function StudioLogo() {
  return (
    <button
      type='button'
      aria-label='Header logo'
      id='headerlogo'
      className='flex flex-row items-end   justify-center active:scale-[.99]'>
      <Logo />
      <p className='pr-5 text-2xl font-semibold text-white'>Codemevel</p>
    </button>
  )
}

export default StudioLogo
