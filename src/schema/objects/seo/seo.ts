import { defineField, defineType } from 'sanity'

type CanonicalURL = {
  current: string
}
export interface PageSEOSchema {
  pageTitle?: string
  metaDescription?: string
  h1Header?: string
  canonicalURL?: CanonicalURL
  robotsNoIndex?: boolean
  robotsNoFollow?: boolean
  imageMeta?: string
  socialTitle?: string
  socialDescription?: string
}

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false
  },
  fieldsets: [
    {
      name: 'robots',
      title: 'Robots Meta',
      description:
        'Sets the robots meta tag for this page. This tag controls how search engines crawl and index your site.',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'openGraph',
      title: 'Open Graph Protocol Fields',
      description: 'The Open Graph protocol enables any web page to become a rich object in a social graph.',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    defineField({
      name: `pageTitle`,
      title: `Page Title`,
      description:
        'The page title tag. Maximum 70 characters. Must be unique. If left empty, will default to global title.',
      type: `string`,
      validation: (Rule) => [
        Rule.max(70).warning(`Title shouldn't be more than 70 characters.`),
        Rule.min(5).warning('Title should be at least 5 characters')
      ]
    }),
    defineField({
      name: `metaDescription`,
      title: `Meta Description`,
      description:
        'The meta description for this page. Maximum 160 characters. If left empty, will default to global description.',
      type: `text`,
      validation: (Rule) => [
        Rule.max(160).warning('Description should be less than 160 characters.'),
        Rule.min(5).warning('Description should be at least 5 characters')
      ]
    }),
    defineField({
      name: `h1Header`,
      title: `H1 Header`,
      description: 'The H1 header for this page. Maximum 60 characters.',
      type: `text`,
      validation: (Rule) => [Rule.max(60).warning('The H1 header should be less than 60 characters.')]
    }),
    defineField({
      name: 'robotsNoIndex',
      description: `Hide this page from search engines and the sitemap.`,
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
      fieldset: 'robots'
    }),
    defineField({
      name: 'robotsNoFollow',
      description: `Hide this page from search engines and the sitemap.`,
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
      fieldset: 'robots'
    }),
    defineField({
      name: 'imageMeta',
      type: `image`,
      description:
        'This is the meta image presented in search, Open Graph, Twitter and other social for this page when shared. If left empty, will default to global image.',
      fieldset: 'openGraph'
    }),
    defineField({
      name: `socialTitle`,
      title: `Social Title`,
      description:
        'This is the title presented in search, Open Graph, Twitter and other social for this page when shared. If left empty, will default to global title.',
      type: `string`,
      fieldset: 'openGraph',
      validation: (Rule) => [Rule.max(60).warning(`Social title shouldn't be more than 60 characters.`)]
    }),
    defineField({
      name: `socialDescription`,
      title: `Social Description`,
      description:
        'This is the description presented in search, Open Graph, Twitter and other social for this page when shared. If left empty, will default to global description.',
      type: `text`,
      fieldset: 'openGraph',
      validation: (Rule) => [
        Rule.max(75).warning('Social description should be less than 75 characters.'),
        Rule.min(5).warning('Social description should be at least 5 characters')
      ]
    })
  ]
})
