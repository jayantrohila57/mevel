import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'FooterMenu',
  title: 'Footer Links',
  type: 'object',
  fields: [
    defineField({
      type: 'array',
      name: 'items',
      title: 'Add Footer Menu',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'footerItemLink',
          title: 'Add Link of internal or external page',
          preview: { select: { title: 'title', subtitle: 'Description' } },
          fields: [
            defineField({ type: 'string', name: 'title', title: 'Title' }),
            defineField({
              type: 'array',
              name: 'submenu',
              title: 'Add submenu',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'footerItemSubmenu',
                  title: 'Add Subitems',
                  preview: {
                    select: { title: 'title', subtitle: 'Description' }
                  },
                  fields: [
                    defineField({
                      type: 'string',
                      name: 'title',
                      title: 'Title'
                    }),
                    defineField({
                      name: 'slug',
                      title: 'Add Url of the Link without Domain',
                      type: 'url',
                      validation: (Rule) =>
                        Rule.uri({
                          allowRelative: true
                        })
                    }),
                    defineField({
                      type: 'boolean',
                      name: 'newTab',
                      title: 'Open in a new tab?',
                      initialValue: false
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  ]
})
