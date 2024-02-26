import { TrendUpwardIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface GlobalSEOScheme {
  _id: string
  globalSEOTitle: string
  globalSEODescription: string
  globalSEOImage: string
}

export default defineType({
  name: 'globalSEO',
  title: 'Site SEO',
  type: 'document',
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: 'globalSEOTitle',
      description:
        'This text is added to the title tag on all pages. Maximum 70 characters.',
      title: 'Global Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(70)
          .warning(`A title shouldn't be more than 70 characters.`)
    }),
    defineField({
      name: 'globalSEODescription',
      description:
        'This is meta the description on all pages where it is not defined. Maximum 160 characters.',
      title: 'Global Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(160)
          .warning(`A title shouldn't be more than 160 characters.`)
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'string',
      description: 'The main site url. Used to create canonical url'
    }),
    defineField({
      title: 'Main logo',
      description: 'Upload your main logo here. SVG preferred. ',
      name: 'logo',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.'
        })
      ]
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Support Email',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email',
            invert: false
          }
        )
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Support Phone'
    })
  ]
})
