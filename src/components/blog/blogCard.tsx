import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Post {
  title: string
  author: string
  date: string
  readTime: number
  description: string
  imageUrl: string
}

interface BlogCardProps {
  post: Post
  index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <Card
      key={index}
      className='group h-auto w-full bg-secondary/20 backdrop-blur  transition-all duration-300 '>
      <CardHeader className='aspect-video h-full w-full overflow-hidden rounded-xl p-3 transition-all duration-500  '>
        <div className='h-full w-full overflow-hidden rounded-xl transition-all duration-300 '>
          <Image
            alt={post?.title}
            className='mb-4 h-full w-full rounded-xl object-cover transition-all duration-300 '
            height='1080'
            style={{
              objectFit: 'cover'
            }}
            src={post?.imageUrl}
            width='1920'
          />
        </div>
      </CardHeader>
      <CardContent className='flex h-full  w-full flex-col items-start justify-start gap-2 px-3 '>
        <CardTitle className='line-clamp-2 flex h-14 cursor-pointer items-start justify-start underline-offset-4 transition-all duration-300 group-hover:underline'>
          {post?.title}
        </CardTitle>
        <CardDescription>
          <p className='line-clamp-1 text-sm/relaxed'>
            {`By ${post?.author} | ${post?.date} | ${post?.readTime} min read`}
          </p>
        </CardDescription>
        <p className='line-clamp-3 text-sm/relaxed'>{post?.description}</p>
      </CardContent>
      <CardFooter className='px-3'>
        <Button
          size='sm'
          variant={'ghost'}>
          Read more
          <span>
            <ArrowRight className=' h-4 w-4' />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default BlogCard

export const BlogCard2 = () => {
  return (
    <Card className='col-span-1 h-full w-full sm:col-span-2 md:col-span-3'>
      <div className='group grid h-full w-full grid-cols-12 gap-2 rounded-xl bg-secondary/20 backdrop-blur transition-all duration-300'>
        <div className='col-span-12 h-full w-full md:col-span-8'>
          <CardHeader className='h-full w-full gap-5 overflow-hidden rounded-xl p-2 transition-all duration-500'>
            <Image
              alt='Featured news'
              className='h-full w-full rounded-md object-cover'
              height='1080'
              src='https://images.unsplash.com/photo-1705077044082-bebb7f597cee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                objectFit: 'cover'
              }}
              width='1920'
            />
          </CardHeader>
        </div>
        <div className='relative col-span-12 h-full w-full md:col-span-4'>
          <CardContent className='flex h-auto w-full flex-col items-start justify-start gap-2 p-3 md:gap-3 md:p-3 '>
            <CardTitle className='cursor-pointer underline-offset-4 transition-all duration-300 group-hover:underline md:text-2xl'>
              Exploring the Depths of the Ocean
            </CardTitle>
            <CardDescription>{`By Jayant Rohila | 10/20/2021 | 5 min read`}</CardDescription>
            <p className='text-xs/relaxed md:text-sm/relaxed'>
              Dive into the mysteries of the deep blue sea and discover the amazing creatures that inhabit it...
            </p>
          </CardContent>
          <CardFooter className='fixed bottom-0 p-3'>
            <Button
              size='sm'
              variant={'outline'}>
              Read more
              <span>
                <ArrowRight className=' h-4 w-4' />
              </span>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
