import { ChevronRight } from 'lucide-react'
import type { NextPage } from 'next'

import { Button } from '../ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const aboutContent = [
  {
    title: 'Our Story',
    description:
      "Our journey began with a visionary goal – to revolutionize the digital realm. Fuelled by a relentless drive for innovation, Codemevel was born, aiming to break the norms and redefine possibilities. From our humble beginnings, we've honed our expertise, evolved with the ever-changing tech ecosystem, and navigated the forefront of digital innovation."
  },
  {
    title: 'The Codemevel Culture',
    description:
      "At Codemevel, we thrive on the startup culture, fostering an environment where ideas flourish and creativity knows no bounds. Our team isn't just a workforce; we're a community of passionate individuals bound together by a shared vision."
  },
  {
    title: 'Our Driving Force',
    description:
      "Our ethos is simple – to be at the forefront of crafting exceptional digital experiences. We blend technological prowess with artistic finesse to create web solutions that captivate, engage, and empower businesses across industries. From visually appealing web designs to cutting-edge development and innovative digital marketing strategies, we're committed to pushing boundaries and creating unparalleled user experiences."
  },
  {
    title: 'Commitment to Excellence',
    description:
      "Our commitment to excellence goes beyond delivering exceptional services. It's about building relationships, understanding unique needs, and partnering with our clients on their digital journeys. We don't just meet expectations; we exceed them, consistently raising the bar for what digital innovation can achieve."
  },
  {
    title: 'Join the Codemevel Journey',
    description:
      "Whether you're a startup aiming to make your mark or an established business seeking digital transformation, Codemevel invites you to join our journey. Let's collaborate, innovate, and craft digital success stories together. At Codemevel, innovation isn't just a buzzword; it's ingrained in our DNA. Join us as we continue redefining the digital narrative and creating experiences that inspire, engage, and propel businesses toward greater success."
  }
]

const About: NextPage = () => {
  return (
    <>
      <section
        id='About'
        className='relative z-10 min-h-screen   w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] py-5'>
        <div className='z-10 mx-auto px-5 md:px-10'>
          <div className='mx-auto  max-w-3xl py-5 text-left md:py-20 md:text-center'>
            <h2 className='text-4xl font-semibold'>About Us</h2>
            <p className='mt-4 text-lg font-light   '>
              Welcome to Codemevel, where digital innovation and transformation solutions converge. We&apos;re not just
              another startup; we&apos;re a vibrant community driven by a passion for redefining the digital landscape.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 md:grid-cols-3 md:gap-5'>
            {aboutContent.map((item, index) => (
              <Card
                key={index}
                className='flex h-full flex-col justify-between bg-popover transition-all duration-300  hover:border-[0.5px] hover:border-primary/50 hover:bg-primary/10'>
                <CardHeader className='min-h-40'>
                  <span className='w-full pb-5 font-mono text-xl slashed-zero text-primary'>0{++index}</span>
                  <CardTitle className='pb-2'>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className='flex h-full w-full items-end justify-end'>
                  <Button
                    variant={'ghost'}
                    size={'sm'}
                    className='group'>
                    Read More <ChevronRight className='ml-2 transition duration-300 group-hover:translate-x-2' />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
