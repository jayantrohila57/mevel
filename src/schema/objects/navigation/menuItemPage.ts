import page from '@/schema/documents/pages/page'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'menuItemPage',
  title: 'Internal page',
  preview: { select: { title: 'title' } },
  fields: [
    defineField({ type: 'string', name: 'title', title: 'Title' }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: page.name }]
    }),
    defineField({
      type: 'boolean',
      name: 'newTab',
      title: 'Open in a new tab?',
      initialValue: false
    })
  ]
})
