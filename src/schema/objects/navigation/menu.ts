import page from '@/schema/documents/pages/page'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'object',
  fields: [
    defineField({
      type: 'array',
      name: 'items',
      title: 'Add Menu or Submenus',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'menuItemPage',
          title: 'Add menu item of internal page',
          preview: {
            select: { title: 'page.title', subtitle: 'page.description' }
          },
          fields: [
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
        }),
        defineArrayMember({
          type: 'object',
          name: 'menuItemLink',
          title: 'Add menu item of internal or external link',
          preview: { select: { title: 'title', subtitle: 'Description' } },
          fields: [
            defineField({ type: 'string', name: 'title', title: 'Title' }),
            defineField({
              type: 'string',
              name: 'description',
              title: 'Description'
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
        }),
        defineArrayMember({
          type: 'object',
          name: 'menuItemSubmenu',
          title: 'Add submenu items',
          preview: { select: { title: 'title', subtitle: 'Description' } },
          fields: [
            defineField({ type: 'string', name: 'title', title: 'Title' }),
            defineField({
              type: 'string',
              name: 'description',
              title: 'Description'
            }),
            defineField({
              name: 'submenu',
              title: 'Submenu',
              type: 'menu'
            })
          ]
        })
      ]
    })
  ]
})
