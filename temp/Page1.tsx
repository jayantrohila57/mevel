import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Component() {
  return (
    <div className='flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900'>
      <header className='flex h-14 items-center px-4 lg:px-6'>
        <Link
          className='flex items-center justify-center'
          href='#'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium underline-offset-4 hover:underline'
            href='#'>
            Features
          </Link>
          <Link
            className='text-sm font-medium underline-offset-4 hover:underline'
            href='#'>
            Pricing
          </Link>
          <Link
            className='text-sm font-medium underline-offset-4 hover:underline'
            href='#'>
            About
          </Link>
          <Link
            className='text-sm font-medium underline-offset-4 hover:underline'
            href='#'>
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full border-y py-12 md:py-24 lg:py-32'>
          <div className='space-y-10 px-4 md:px-6 xl:space-y-16'>
            <div className='mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10'>
              <div>
                <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  The complete platform for building the Web
                </h1>
              </div>
              <div className='flex flex-col items-start space-y-4'>
                <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
                  Beautifully designed components that you can copy and paste
                  into your apps. Accessible. Customizable. Open Source.
                </p>
                <div className='space-x-4'>
                  <Link
                    className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                    href='#'>
                    Get Started
                  </Link>
                  <Link
                    className='inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                    href='#'>
                    Button
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt='Hero'
              className='mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover'
              height='300'
              src='/placeholder.svg'
              width='1270'
            />
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container space-y-12 px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  New Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Faster iteration. More innovation.
                </h2>
                <p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  The platform for rapid progress. Let your team focus on
                  shipping features instead of managing infrastructure with
                  automated CI/CD, built-in testing, and integrated
                  collaboration.
                </p>
              </div>
            </div>
            <div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>
                  Infinite scalability, zero config
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Enable code to run on-demand without needing to manage your
                  own infrastructure or upgrade hardware.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>
                  Real-time insights and controls
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Get granular, first-party, real-user metrics on site
                  performance per deployment.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>
                  Personalization at the edge
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Deliver dynamic, personalized content, while ensuring users
                  only see the best version of your site.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>
                  Real-time insights and controls
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Get granular, first-party, real-user metrics on site
                  performance per deployment.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>
                  Personalization at the edge
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Deliver dynamic, personalized content, while ensuring users
                  only see the best version of your site.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>
                  Infinite scalability, zero config
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Enable code to run on-demand without needing to manage your
                  own infrastructure or upgrade hardware.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-4 sm:flex-row'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='#'>
                Contact Sales
              </Link>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='#'>
                Tour the Platform
              </Link>
            </div>
          </div>
        </section>
        <section className='w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32'>
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Experience the workflow the best frontend teams love.
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD.
              </p>
            </div>
            <div className='mx-auto w-full max-w-sm space-y-2'>
              <form className='flex space-x-2'>
                <Input
                  className='max-w-lg flex-1'
                  placeholder='Enter your email'
                  type='email'
                />
                <Button type='submit'>Sign Up</Button>
              </form>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                Sign up to get notified when we launch.
                <Link
                  className='underline underline-offset-2'
                  href='#'>
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  New Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Faster iteration. More innovation.
                </h2>
                <p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  The platform for rapid progress. Let your team focus on
                  shipping features instead of managing infrastructure with
                  automated CI/CD, built-in testing, and integrated
                  collaboration.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height='310'
                src='/placeholder.svg'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Collaboration</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Make collaboration seamless with built-in code review
                        tools.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Automation</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Automate your workflow with continuous integration.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Scale</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Deploy to the cloud with a single click and scale with
                        ease.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32'>
          <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Experience the workflow the best frontend teams love.
              </h2>
              <p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD.
              </p>
            </div>
            <div className='flex space-x-4 lg:justify-end'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='#'>
                Contact Sales
              </Link>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='#'>
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Meet our Customers
              </h2>
              <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Trusted by the best teams in the world. We help teams of all
                sizes.
              </p>
            </div>
            <div className='divide-y rounded-lg border'>
              <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                    height='70'
                    src='/placeholder.svg'
                    width='140'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                    height='70'
                    src='/placeholder.svg'
                    width='140'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-8'>
                  <img
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                    height='70'
                    src='/placeholder.svg'
                    width='140'
                  />
                </div>
              </div>
              <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                    height='70'
                    src='/placeholder.svg'
                    width='140'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                    height='70'
                    src='/placeholder.svg'
                    width='140'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                    height='70'
                    src='/placeholder.svg'
                    width='140'
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center space-x-4'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='#'>
                Contact Sales
              </Link>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='#'>
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className='w-full border-t py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-10 px-10 md:gap-16 lg:grid-cols-2'>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Performance
                </div>
                <h2 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  Traffic spikes should be exciting, not scary.
                </h2>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Get Started
                </Link>
              </div>
              <div className='flex flex-col items-start space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Security
                </div>
                <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed'>
                  Fully managed infrastructure designed to scale dynamically
                  with your traffic, a global edge to ensure your site is fast
                  for every customer, and the tools to monitor every aspect of
                  your app.
                </p>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
          <Link
            className='text-xs underline-offset-4 hover:underline'
            href='#'>
            Terms of Service
          </Link>
          <Link
            className='text-xs underline-offset-4 hover:underline'
            href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}
