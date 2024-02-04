import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Component() {
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the Depths of the Ocean',
      author: 'Jane Doe',
      date: 'Jan 13, 2024',
      readTime: '5 min read',
      excerpt: 'Dive into the mysteries of the deep blue sea and discover the amazing creatures that inhabit it...',
      imageAlt: 'Ocean depths',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'The Future of AI',
      author: 'John Smith',
      date: 'Jan 12, 2024',
      readTime: '7 min read',
      excerpt: 'Artificial Intelligence is transforming our world in unprecedented ways. This article explores...',
      imageAlt: 'AI Future',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Climate Change: A Global Challenge',
      author: 'Sarah Johnson',
      date: 'Jan 11, 2024',
      readTime: '6 min read',
      excerpt:
        'Climate change is one of the most pressing issues of our time. This article discusses the causes, effects, and solutions...',
      imageAlt: 'Climate Change',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'The Art of Minimalism',
      author: 'Mike Davis',
      date: 'Jan 10, 2024',
      readTime: '4 min read',
      excerpt:
        "Minimalism is more than just an aesthetic. It's a lifestyle choice that can lead to a more mindful and fulfilling life...",
      imageAlt: 'Minimalism Art',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Exploring the Cosmos',
      author: 'Emily White',
      date: 'Jan 9, 2024',
      readTime: '8 min read',
      excerpt:
        'The universe is vast and full of wonders. Join us as we journey through the cosmos and uncover the secrets of the stars...',
      imageAlt: 'Cosmos Exploration',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'The Power of Meditation',
      author: 'Robert Brown',
      date: 'Jan 8, 2024',
      readTime: '5 min read',
      excerpt:
        'Meditation can transform your life in profound ways. Learn about the benefits of this ancient practice and how you can incorporate it into your daily routine...',
      imageAlt: 'Meditation Power',
      imageUrl: '/placeholder.svg'
    }
  ]

  return (
    <section className='mx-auto grid max-w-6xl grid-cols-3 items-start gap-6 px-4 py-6 lg:gap-12'>
      {blogPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <Image
              alt={post.imageAlt}
              className='mb-4 h-48 w-full object-cover'
              height='200'
              src={post.imageUrl}
              style={{
                aspectRatio: '300/200',
                objectFit: 'cover'
              }}
              width='300'
            />
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              By {post.author} | {post.date} | {post.readTime}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm/relaxed'>{post.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Button size='sm'>Read more</Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
