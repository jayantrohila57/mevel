import BlogCard, { BlogCard2 } from './blogCard'

export default function BlogLayout() {
  return (
    <section className='dot-matrix relative h-full w-full'>
      <main className='relative h-full w-full p-5 pt-16 md:px-10 md:py-20 '>
        <h2 className='mb-4 text-2xl font-bold'>Featured Blogs</h2>
        <div className='mx-auto grid h-full w-full grid-cols-1 items-center justify-stretch gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <BlogCard2 />
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              post={post}
              index={index}
            />
          ))}
        </div>
      </main>
    </section>
  )
}

// Example blog post data structure
const blogPosts = [
  {
    title: 'The Future of AI',
    imageUrl:
      'https://images.unsplash.com/photo-1706425278305-b9440b5fcd1f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'John Smith',
    date: 'Jan 12, 2024',
    readTime: 7,
    description: 'Artificial Intelligence is transforming our world in unprecedented ways. This article explores...'
  },
  {
    title: 'Climate Change: A Global Challenge',
    imageUrl:
      'https://images.unsplash.com/photo-1705077044031-78fa96045766?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Sarah Johnson',
    date: 'Jan 11, 2024',
    readTime: 6,
    description:
      'Climate change is one of the most pressing issues of our time. This article discusses the causes, effects, and solutions...'
  },
  {
    title: 'The Art of Minimalism',
    imageUrl:
      'https://images.unsplash.com/photo-1706007496099-a3e4fea6a835?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Mike Davis',
    date: 'Jan 10, 2024',
    readTime: 4,
    description:
      'Minimalism is more than just an aesthetic. Its a lifestyle choice that can lead to a more mindful and fulfilling life...'
  },
  {
    title: 'Exploring the Cosmos',
    imageUrl:
      'https://images.unsplash.com/photo-1701962541409-e2c1256a8574?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Emily White',
    date: 'Jan 9, 2024',
    readTime: 8,
    description:
      'The universe is vast and full of wonders. Join us as we journey through the cosmos and uncover the secrets of the stars...'
  },
  {
    title: 'The Power of Meditation',
    imageUrl:
      'https://images.unsplash.com/photo-1702540122576-dd7d387f652f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Robert Brown',
    date: 'Jan 8, 2024',
    readTime: 5,
    description:
      'Meditation can transform your life in profound ways. Learn about the benefits of this ancient practice and how you can incorporate it into your daily routine...'
  }
]
