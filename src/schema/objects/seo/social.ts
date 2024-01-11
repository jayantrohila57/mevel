import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  type: 'array',
  title: 'Social Links',
  description: 'Enter your Social Media URLs',
  validation: (Rule) => Rule.unique(),
  of: [
    defineArrayMember({
      type: 'object',
      fields: [
        defineField({
          type: 'string',
          name: 'media',
          title: 'Choose Social Media',
          options: {
            list: [
              { title: 'Twitter', value: 'twitter' },
              { title: 'Facebook', value: 'facebook' },
              { title: 'Instagram', value: 'instagram' },
              { title: 'Linkedin', value: 'linkedin' },
              { title: 'Youtube', value: 'youtube' }
            ]
          }
        }),
        defineField({
          type: 'url',
          name: 'url',
          title: 'Full Profile URL'
        })
      ],
      preview: {
        select: {
          title: 'media',
          subtitle: 'url'
        }
      }
    })
  ]
})
