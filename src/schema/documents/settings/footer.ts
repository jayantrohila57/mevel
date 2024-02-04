import footerMenu from '@/schema/objects/navigation/footerMenu'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: BlockElementIcon,
  preview: { prepare: () => ({ title: 'Footer' }) },
  fields: [
    defineField({
      name: 'FooterMenu',
      title: 'Footer',
      type: footerMenu.name
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'social'
    })
  ]
})
