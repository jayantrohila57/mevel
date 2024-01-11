import {
  type DocumentDefinition,
  type ObjectDefinition,
  type SchemaTypeDefinition
} from 'sanity'

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
  faq
]
export const objects: ObjectDefinition[] = [
  social,
  seo,
  menu,
  menuItemLink,
  menuItemPage,
  accordion
]
export const pageComponents: ObjectDefinition[] = []
export const singletonDocuments: DocumentDefinition[] = [
  navigation,
  footer,
  globalSEO,
  home
]

export const schemaTypes: SchemaTypeDefinition[] = [
  ...pageDocuments,
  ...singletonDocuments,
  ...pageComponents,
  ...objects
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes
}
