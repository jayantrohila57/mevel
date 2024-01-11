import { YouTubePreview } from '@/components/sanity/custom/YouTubePreview'
import { DocumentVideoIcon } from '@sanity/icons'
import type { ComponentType } from 'react'
import {
  type PreviewLayoutKey,
  type PreviewProps,
  defineField,
  defineType
} from 'sanity'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: DocumentVideoIcon,
  fields: [
    defineField({
      name: 'height',
      type: 'number',
      description:
        'Enter Required Height for this Embed. Leave it blank for 16:9 ratio.'
    }),
    defineField({
      name: 'url',
      type: 'url',
      description:
        'Enter the URL to Embed \r\n(eg: https://youtube.com/embed/xxx '
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Youtube Video caption',
      description: 'Appears below video.',
      validation: (Rule) =>
        Rule.error('Caption Text can not be empty!').required()
    })
  ],

  preview: {
    select: {
      title: 'caption',
      url: 'url',
      height: 'height'
    }
  },
  components: {
    preview: YouTubePreview as ComponentType<PreviewProps<PreviewLayoutKey>>
  }
})
