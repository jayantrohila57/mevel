import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

const faqData = [
  {
    question: 'Why does turning my device off and on again solve all issues?',
    answer: 'Because it clears the memory and starts the system from scratch.',
    value: 'item-1'
  },
  {
    question: 'Are extra cables in the box bonus decorations?',
    answer:
      'As tempting as it is to weave them into artistic sculptures, those cables are essential for connecting, charging, and beaming digital magic.',
    value: 'item-2'
  },
  {
    question: 'Can I wear my VR headset to my cousin&apos;s wedding?',
    answer:
      'Yes but you might end up inadvertently dodging invisible dance partners or trying to high-five digital confetti.',
    value: 'item-3'
  },
  {
    question: 'How often should I update my software?',
    answer:
      'It&apos;s recommended to keep your software up to date to ensure you have the latest security patches and features.',
    value: 'item-4'
  },
  {
    question: 'Why does my device get hot when I&apos;m using it?',
    answer:
      'Devices can generate heat during operation, especially when running intensive tasks. This is normal, but if it gets too hot, it may indicate a problem.',
    value: 'item-5',
    className: 'border-b-0'
  }
]

export default function FaqComponent() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Card className='w-[550px] shadow-lg'>
        <CardContent className='p-6'>
          <h2 className='text-2xl font-semibold'>Frequently Asked Questions</h2>
          <Accordion
            className='mt-4 w-full'
            type='multiple'>
            {faqData.map(({ question, answer, className }, index) => (
              <AccordionItem
                key={index + question}
                value={index + question}
                className={className}>
                <AccordionTrigger className='hover:underline-none'>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
