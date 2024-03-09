'use client'

import type { NextComponentType, NextPageContext } from 'next'

import { StickyScroll } from '../ui/sticky-scroll-reveal'

interface Props {}
const servicesContent = [
  {
    title: 'Web Development Excellence',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Our web development services are the cornerstone of seamless digital experiences. From responsive and visually captivating websites to complex web applications, our team leverages the latest technologies and industry best practices to bring your vision to life. We ensure user-centric, high-performance web solutions that resonate with your audience.'
  },
  {
    title: 'UI/UX Design Mastery',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "Transforming interfaces into immersive experiences is our forte. Our UI/UX design experts craft intuitive, visually stunning interfaces that enhance user engagement and interaction. Whether it's creating wireframes, and prototypes, or redesigning existing interfaces, we prioritize user experience to ensure smooth and delightful journeys for your audience."
  },
  {
    title: 'Strategic Digital Marketing',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "Amplify your brand's visibility and reach with our strategic digital marketing solutions. From SEO and content strategies to social media management and PPC campaigns, we develop comprehensive marketing plans tailored to your objectives. Our data-driven approach ensures targeted, measurable results that propel your brand forward in the competitive digital landscape."
  },
  {
    title: 'Scalable SaaS Solutions',
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "Unlock the potential of Software as a Service (SaaS) with our scalable solutions. Whether you're a startup looking for a custom SaaS application or an enterprise seeking scalable software solutions, our expertise covers a spectrum of industries. We build robust, scalable, and user-friendly SaaS products that streamline operations and drive efficiency."
  },
  {
    title: 'E-commerce Solutions',
    image:
      'https://images.unsplash.com/photo-1612103198005-b238154f4590?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Entering the world of e-commerce? Trust Codemevel to develop robust and secure e-commerce platforms that drive conversions. Our solutions cover everything from intuitive product catalogs and secure payment gateways to seamless checkout experiences, ensuring a delightful shopping journey for your customers.'
  },
  {
    title: 'Mobile App Development',
    image:
      'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "In the era of mobile dominance, our mobile app development services cater to diverse platforms and devices. We design and develop user-friendly, feature-rich mobile applications that resonate with your audience, whether it's iOS, Android, or cross-platform solutions. From concept to deployment, we ensure apps that make an impact."
  }
]
const Services: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
  return (
    <section className='relative z-10 h-full min-h-screen w-full pb-20'>
      <div className='z-10 mx-auto px-5 md:px-10'>
        <div className='mx-auto  max-w-3xl py-5 text-left md:py-20 md:text-center'>
          <h2 className='text-4xl font-semibold '>Services Overview</h2>
          <p className='mt-4 text-lg font-light  '>
            Welcome to Codemevel&apos;s comprehensive suite of services designed to elevate your digital presence and
            drive success in the online realm. We specialize in an array of cutting-edge web services tailored to meet
            diverse business needs.
          </p>
        </div>

        <StickyScroll content={servicesContent} />
      </div>
    </section>
  )
}

export default Services
