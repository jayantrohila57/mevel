import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const post = {
  title: 'Sample Post Title',
  date: '2022-09-01',
  formattedDate: 'September 1, 2022',
  readTime: 5,
  coverImage: '/path/to/image.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  excerpt: 'This is a sample excerpt from the post.',
  sections: [
    { id: 1, title: 'Section 1', content: 'Content for section 1.' },
    { id: 2, title: 'Section 2', content: 'Content for section 2.' }
  ],
  comments: [
    { id: 1, author: 'Author 1', content: 'Comment from author 1.' },
    { id: 2, author: 'Author 2', content: 'Comment from author 2.' }
  ]
}
export default function BlogLayout() {
  return (
    <main className='mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-6 lg:flex-row lg:gap-12'>
      <article className='flex-1 space-y-6'>
        {/* Dummy post data for mapping */}

        <nav className='flex items-center space-x-2 text-gray-500 dark:text-gray-400'>
          <Link
            className='hover:text-gray-900 dark:hover:text-gray-50'
            href='/'>
            Home
          </Link>
          <span>/</span>
          <Link
            className='hover:text-gray-900 dark:hover:text-gray-50'
            href='/blog'>
            Blog
          </Link>
          <span>/</span>
          <span>{post.title}</span>
        </nav>
        <h1 className='text-4xl font-bold tracking-tight'>{post.title}</h1>
        <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
        <Image
          alt='Cover image'
          className='rounded-lg object-cover'
          height={400}
          src={post.coverImage}
          width={800}
          layout='responsive'
        />
        <div className='flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className='inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800'>
              {tag}
            </span>
          ))}
        </div>
        <p className='text-gray-500 dark:text-gray-400'>{post.excerpt}</p>
        <div className='prose prose-lg'>
          {post.sections.map((section) => (
            <React.Fragment key={section.id}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </React.Fragment>
          ))}
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold'>Comments</h2>
          <div className='mt-4 space-y-4'>
            {post.comments.map((comment) => (
              <div
                key={comment.id}
                className='rounded-lg border border-gray-200 p-4 dark:border-gray-700'>
                <h3 className='text-lg font-medium'>{comment.author}</h3>
                <p className='text-gray-500 dark:text-gray-400'>{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <aside className='flex-1 space-y-6'>
        <div className='sticky top-0 pt-6'>
          <h2 className='text-lg font-semibold tracking-tight'>Table of Contents</h2>
          <nav className='mt-4 space-y-2'>
            {post.sections.map((section, index) => (
              <Link
                key={index}
                className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-50'
                href={`#${section.id}`}>
                {section.title}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className='text-lg font-semibold tracking-tight'>Recent Posts</h2>
          <div className='mt-4 space-y-4'>
            {[
              { id: '1', title: 'Post One', excerpt: 'This is the first post', coverImage: '/path/to/image1.jpg' },
              { id: '2', title: 'Post Two', excerpt: 'This is the second post', coverImage: '/path/to/image2.jpg' }
            ].map((post) => (
              <div
                key={post.id}
                className='flex items-start space-x-4'>
                <Image
                  alt='Cover image'
                  className='aspect-square rounded-lg object-cover'
                  height={100}
                  src={post.coverImage}
                  width={100}
                />
                <div className='space-y-2'>
                  <h3 className='text-lg font-medium'>{post.title}</h3>
                  <p className='text-gray-500 dark:text-gray-400'>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-lg font-semibold tracking-tight'>Popular Tags</h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            {['React', 'JavaScript', 'CSS'].map((tag) => (
              <span
                key={tag}
                className='inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-lg font-semibold tracking-tight'>Categories</h2>
          <div className='mt-4 space-y-2'>
            {['Development', 'Design', 'Marketing'].map((category) => (
              <Link
                key={category}
                className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-50'
                href={`/${category.toLowerCase()}`}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </main>
  )
}
