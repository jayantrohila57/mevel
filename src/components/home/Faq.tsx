import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQ {
  question: string
  answer: string
  value: string
}
const faqs: FAQ[] = [
  {
    question: 'What services does Codemevel offer?',
    answer:
      'Codemevel specializes in web development, UI/UX design, digital marketing, SaaS solutions, mobile app development, and custom software solutions.',
    value: '1'
  },
  {
    question: 'How does Codemevel ensure the success of web projects?',
    answer:
      'Our success lies in understanding client needs, meticulous planning, agile development, and continuous client collaboration throughout the project.',
    value: '2'
  },
  {
    question: "What sets Codemevel's digital marketing strategies apart?",
    answer:
      'Our strategies are data-driven, tailored to client objectives, and constantly optimized for maximum impact and ROI.',
    value: '3'
  },
  {
    question: 'What industries does Codemevel cater to?',
    answer:
      'Codemevel caters to diverse industries, including but not limited to e-commerce, healthcare, finance, education, and technology.',
    value: '4'
  },
  {
    question: 'How can I partner with Codemevel?',
    answer:
      'We welcome agencies, freelancers, technology partners, and business alliances. Fill out our partnership inquiry form on the website to explore collaboration opportunities.',
    value: '5'
  },
  {
    question: 'Does Codemevel provide post-launch support?',
    answer:
      'Yes, we offer comprehensive post-launch support, including maintenance, updates, and troubleshooting to ensure your solution operates smoothly.',
    value: '6'
  },
  {
    question: "What makes Codemevel's SaaS solutions scalable?",
    answer:
      'Our SaaS solutions are designed with scalability in mind, allowing for seamless expansion as your business grows, coupled with robust architecture and flexibility.',
    value: '7'
  },
  {
    question: 'How does Codemevel approach UI/UX design?',
    answer:
      'We prioritize user-centric designs, ensuring intuitive interfaces that enhance user experience, engagement, and retention.',
    value: '8'
  },
  {
    question: 'Can I request a custom software solution?',
    answer:
      'Our team excels in delivering custom software solutions tailored to specific business needs. Contact us for a consultation.',
    value: '9'
  },
  {
    question: "What is Codemevel's client onboarding process?",
    answer:
      'Our onboarding process involves understanding client requirements, setting expectations, defining goals, and laying out a detailed project roadmap.',
    value: '10'
  },
  {
    question: 'What kind of support does Codemevel offer during projects?',
    answer:
      'We provide dedicated project managers, regular updates, open communication channels, and opportunities for client feedback throughout the project lifecycle.',
    value: '11'
  },
  {
    question: 'How can I request a consultation with Codemevel?',
    answer:
      'Feel free to reach out via our contact form or directly schedule a consultation through our website to discuss your project requirements.',
    value: '12'
  }
]

export default function FaqComponent() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center px-5 md:px-10'>
      <div className='mx-auto  max-w-3xl py-5 text-left md:py-10 md:text-center'>
        <h2 className='text-4xl font-semibold'>Frequently Asked Questions</h2>
        <p className='mt-4 text-lg font-light   '>
          Welcome to Codemevel, where digital innovation and transformation solutions converge. We&apos;re not just
          another startup; we&apos;re a vibrant community driven by a passion for redefining the digital landscape.
        </p>
      </div>
      <div className='grid h-full w-full grid-cols-3  md:grid-cols-5 md:py-10'>
        <div className='col-span-2 hidden h-full w-full rounded-2xl bg-[url("https://images.unsplash.com/photo-1627517484493-c171f32999cb?q=80&w=588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] object-cover grayscale md:block'></div>
        <Accordion
          className='col-span-3 w-full rounded-2xl bg-none p-0 md:bg-popover  md:px-5'
          type='single'
          collapsible>
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem
              className='flex flex-row items-center justify-start'
              key={index + question}
              value={index + question}>
              <span className='mr-5 flex h-full w-auto items-center justify-center font-mono text-xl slashed-zero text-primary md:text-2xl'>
                0{++index}
              </span>
              <div className='flex w-full flex-col text-left'>
                <AccordionTrigger className='hover:underline-none text-left'>{question}</AccordionTrigger>
                <AccordionContent className='text-left font-light'>{answer}</AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
