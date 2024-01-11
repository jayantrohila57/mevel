import Logo from '../../Logo'

function StudioLogo() {
  return (
    <button
      type="button"
      aria-label="Header logo"
      id="logo"
      className="flex flex-row items-end   justify-center active:scale-[.99]"
    >
      <Logo />
    </button>
  )
}

export default StudioLogo
