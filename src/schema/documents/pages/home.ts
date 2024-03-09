import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface GlobalSEOScheme {
  _id: string
  globalSEOTitle: string
  globalSEODescription: string
  globalSEOImage: string
}

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This text is added to the title tag on all pages. Maximum 70 characters.',
      title: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().max(70).warning(`A title shouldn't be more than 70 characters.`)
    })
  ]
})
