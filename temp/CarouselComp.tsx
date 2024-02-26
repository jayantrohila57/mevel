import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default function Component() {
  return (
    <Carousel className='mx-auto w-full max-w-2xl'>
      <CarouselContent>
        <CarouselItem>
          <img
            alt='Image 1'
            className='aspect-[2/1] rounded-md object-cover'
            height='500'
            src='/placeholder.svg'
            width='1000'
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt='Image 2'
            className='aspect-[2/1] rounded-md object-cover'
            height='500'
            src='/placeholder.svg'
            width='1000'
          />
        </CarouselItem>
        <CarouselItem>
          <img
            alt='Image 3'
            className='aspect-[2/1] rounded-md object-cover'
            height='500'
            src='/placeholder.svg'
            width='1000'
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
