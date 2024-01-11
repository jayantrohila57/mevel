import { AddCommentIcon, CommentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'accordion',
  title: 'Accordion Component',
  type: 'object',
  fields: [
    defineField({
      name: 'addAccordion',
      title: 'Add Questions',
      type: 'array',
      icon: CommentIcon,
      of: [
        defineField({
          name: 'questions',
          title: 'Questions',
          type: 'object',
          icon: AddCommentIcon,
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string'
            })
          ]
        })
      ]
    })
  ]
})
