import {
  type ArrayDefinition,
  type DocumentDefinition,
  type ImageDefinition,
  type ObjectDefinition,
  type SchemaTypeDefinition
} from 'sanity'

import author from './documents/blog/author'
import blog from './documents/blog/blog'
import category from './documents/blog/category'
import tag from './documents/blog/tag'
import accordion from './documents/components/accordion'
import faq from './documents/components/faq'
import home from './documents/pages/home'
import page from './documents/pages/page'
import footer from './documents/settings/footer'
import globalSEO from './documents/settings/globalSEO'
import navigation from './documents/settings/navigation'
import blockContent from './objects/blog/blockContent'
import image from './objects/blog/image'
import youtube from './objects/blog/youtube'
import menu from './objects/navigation/menu'
import menuItemLink from './objects/navigation/menuItemLink'
import menuItemPage from './objects/navigation/menuItemPage'
import seo from './objects/seo/seo'
import social from './objects/seo/social'

export const pageDocuments: DocumentDefinition[] = [
  page,
  blog,
  category,
  tag,
  faq,
  author
]
export const objects: ObjectDefinition[] = [
  seo,
  menu,
  menuItemLink,
  menuItemPage,
  accordion,
  youtube
]
export const imageComponents: ImageDefinition[] = [image]
export const components: ArrayDefinition[] = [social, blockContent]
export const singletonDocuments: DocumentDefinition[] = [
  navigation,
  footer,
  globalSEO,
  home
]

export const schemaTypes: SchemaTypeDefinition[] = [
  ...components,
  ...pageDocuments,
  ...singletonDocuments,
  ...imageComponents,
  ...objects
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes
}
