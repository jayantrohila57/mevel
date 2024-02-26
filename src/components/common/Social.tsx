// eslint-disable-next-line import/no-extraneous-dependencies
import { SocialIcon } from 'react-social-icons'

import { Button } from '../ui/button'

const socialLinks: string[] = [
  'https://github.com/codemevel',
  'https://www.instagram.com/codemevel/',
  'https://www.facebook.com/profile.php?id=61553456875424',
  'https://twitter.com/codemevel',
  'https://www.linkedin.com/company/codemevel'
]
function Social() {
  return (
    <div className='flex h-full w-full items-center justify-start gap-2'>
      {socialLinks.map((url) => {
        return (
          <Button
            variant={'outline'}
            key={url}
            size={'icon'}>
            <SocialIcon
              bgColor='transparent'
              className='invert dark:invert-0'
              aria-label={url}
              fgColor='white'
              url={url}
              target='_blank'
              key={url}
            />
          </Button>
        )
      })}
    </div>
  )
}

export default Social
