import Image from 'next/image'
import type { ReactNode } from 'react'

interface StepProps {
  title: string
  icon: ReactNode
  description: string[]
  buttonText: string
  codeSnippet?: string | null
  index: number
}
const stepsData: StepProps[] = [
  {
    icon: <FileIcon className='h-10 w-10 ' />,
    title: 'Requirements Gathering',
    description: [
      'This phase involves understanding and documenting the project requirements and needs.',
      'The requirements gathering phase is crucial for the success of the project. It involves detailed discussions with the client to understand their needs and expectations.'
    ],
    buttonText: 'Read More',
    codeSnippet: null,
    index: 0
  },
  {
    icon: <LayoutIcon className='h-10 w-10 ' />,
    title: ' Design',
    description: [
      'In this phase, wire frames and mockups are created to visualize the design of the software.',
      'The design phase involves creating a visual representation of the software. This includes creating wire frames, mockups, and prototypes.'
    ],
    buttonText: 'Read More',
    codeSnippet: null,
    index: 1
  },
  {
    icon: <CodeIcon className='h-10 w-10 ' />,
    title: ' Development',
    description: [
      'The actual code is written in this phase based on the design.',
      'The development phase involves coding the software based on the design. This includes front-end and back-end development.'
    ],
    buttonText: 'Read More',
    codeSnippet: `function HelloWorld() {
      return <h1>Hello, world!</h1>;
    }`,
    index: 2
  },
  {
    icon: <BugIcon className='h-10 w-10 ' />,
    title: '  Testing',
    description: [
      'The software is tested for bugs and issues in this phase.',
      'The testing phase involves checking the software for bugs and issues. This includes unit testing, integration testing, and user acceptance testing.'
    ],
    buttonText: 'Read More',
    codeSnippet: `describe('HelloWorld', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HelloWorld />, div);
      });
    })`,
    index: 3
  },
  {
    icon: <UploadCloudIcon className='h-10 w-10 ' />,
    title: '  Deployment',
    description: [
      'The software is deployed to a server and made available for use.',
      'The deployment phase involves making the software available for use. This includes deploying the software to a server and setting up the necessary infrastructure.'
    ],
    buttonText: 'Read More',
    codeSnippet: null,
    index: 4
  }
]

const isOdd = (number: number) => number % 2 !== 0

interface StepComponentProps extends StepProps {
  isOdd: boolean
}

const StepComponent: React.FC<StepComponentProps> = ({
  title,
  description,
  buttonText,
  codeSnippet,
  index,
  isOdd
}: StepComponentProps) => (
  <section
    className={`grid w-full grid-cols-2 items-center justify-between gap-60 p-10 ${
      isOdd ? 'md:flex-row-reverse' : 'md:flex-row'
    }`}>
    <div className='flex h-full max-w-xl flex-col items-center border md:items-start'>
      <span className='py-2 font-mono text-2xl slashed-zero'>Step - 0{index + 1}</span>
      <h2 className='pb-5 text-4xl font-bold tracking-tight'>{title}</h2>
      {description.map((paragraph, idx) => (
        <p
          key={idx}
          className='text-center md:text-left'>
          {paragraph}
        </p>
      ))}
      {codeSnippet && (
        <div className='mt-4 rounded-lg bg-gray-800 p-4 text-white'>
          <pre className='font-mono text-sm'>{codeSnippet}</pre>
        </div>
      )}
      <button className='mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>
        {buttonText}
      </button>
    </div>
    <div className='aspect-video w-full'>
      <Image
        alt='Step visualization'
        className='mb-4 h-48 w-full border object-cover'
        height='200'
        src='/placeholder.svg'
        style={{ aspectRatio: '300/200', objectFit: 'cover' }}
        width='300'
      />
    </div>
  </section>
)

export default function OurProcess() {
  return (
    <main className='relative grid h-full w-full grid-cols-1 gap-10 p-10'>
      <div className='absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform border-r-[0.2px] border-primary/90' />
      <div className='absolute left-1/2 top-1/2 h-60 -translate-x-1/2 -translate-y-1/2 transform border-l-[0.2px] border-blue-500/90' />
      {stepsData.map((step, index) => (
        <div
          key={index}
          className='relative'>
          {index < stepsData.length - 1 && (
            <div className='absolute left-1/2 top-1/2 h-full -translate-x-1/2 transform'>
              <div className='rounded-full border bg-secondary p-3'>{step.icon}</div>
            </div>
          )}
          <StepComponent
            {...step}
            index={index}
            isOdd={isOdd(index)}
          />
        </div>
      ))}
    </main>
  )
}

// function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <path d='M12 5v14' />
//       <path d='m19 12-7 7-7-7' />
//     </svg>
//   )
// }

function BugIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='m8 2 1.88 1.88' />
      <path d='M14.12 3.88 16 2' />
      <path d='M9 7.13v-1a3.003 3.003 0 1 1 6 0v1' />
      <path d='M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6' />
      <path d='M12 20v-9' />
      <path d='M6.53 9C4.6 8.8 3 7.1 3 5' />
      <path d='M6 13H2' />
      <path d='M3 21c0-2.1 1.7-3.9 3.8-4' />
      <path d='M20.97 5c0 2.1-1.6 3.8-3.5 4' />
      <path d='M22 13h-4' />
      <path d='M17.2 17c2.1.1 3.8 1.9 3.8 4' />
    </svg>
  )
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points='16 18 22 12 16 6' />
      <polyline points='8 6 2 12 8 18' />
    </svg>
  )
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
      <polyline points='14 2 14 8 20 8' />
    </svg>
  )
}

function LayoutIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect
        width='18'
        height='18'
        x='3'
        y='3'
        rx='2'
        ry='2'
      />
      <line
        x1='3'
        x2='21'
        y1='9'
        y2='9'
      />
      <line
        x1='9'
        x2='9'
        y1='21'
        y2='9'
      />
    </svg>
  )
}

function UploadCloudIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242' />
      <path d='M12 12v9' />
      <path d='m16 16-4-4-4 4' />
    </svg>
  )
}
