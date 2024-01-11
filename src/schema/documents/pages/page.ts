import { ComposeIcon, DocumentTextIcon, SearchIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Content', icon: ComposeIcon, default: true },
    { name: 'seo', title: 'SEO', icon: SearchIcon }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Primary Title',
      type: 'string',
      description:
        'Primary Title of the page. On cards, it is displayed as Primary Title.',
      group: 'content',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Primary Subtitle',
      type: 'string',
      description:
        'Primary Subtitle of the page. On cards, it is displayed as Primary Subtitle.',
      group: 'content'
    }),
    defineField({
      name: 'summary',
      title: 'Description',
      group: 'content',
      description:
        'This is used to describe the page and appears as the text in page cards.',
      type: 'text'
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      group: 'content',
      description:
        'It will appear as small text on cards above the title. Max 100 characters. When the field is left blank, the page type will be displayed.',
      type: 'string',
      validation: (rule) => rule.max(100)
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    })
  ]
})
