import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
  initialValue: {
    title: 'Frequently Asked Questions'
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Frequently Asked Questions',
      type: 'string',
      hidden: true
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'accordion'
    })
  ]
})
