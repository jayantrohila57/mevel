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
import footerMenu from './objects/navigation/footerMenu'
import menu from './objects/navigation/menu'
import seo from './objects/seo/seo'
import social from './objects/seo/social'

/**
 * Exports an array containing document schema type definitions
 * for page documents like pages, blogs, categories etc.
 */
export const pageDocuments: DocumentDefinition[] = [
  page,
  blog,
  category,
  tag,
  faq,
  author
]
/**
 * Exports an array containing object schema type definitions.
 * Objects define reusable content types that can be nested in document schema types.
 */
export const objects: ObjectDefinition[] = [
  seo,
  menu,
  accordion,
  youtube,
  footerMenu
]

/**
 * Exports an array containing image schema type definitions.
 * Images define reusable image content types that can be referenced in document schema types.
 */
export const imageComponents: ImageDefinition[] = [image]

/**
 * Exports an array containing object schema type definitions for social media and rich text content.
 */
export const components: ArrayDefinition[] = [social, blockContent]

/**
 * Exports an array containing singleton document schema type definitions.
 * Singleton documents have a single instance in the studio.
 */
export const singletonDocuments: DocumentDefinition[] = [
  navigation,
  footer,
  globalSEO,
  home
]

/**
 * Exports an array containing all schema type definitions, by concatenating all the schema type arrays.
 * This allows us to define schema types in separate files and export them all in one array here.
 */
export const schemaTypes: SchemaTypeDefinition[] = [
  ...components,
  ...pageDocuments,
  ...singletonDocuments,
  ...imageComponents,
  ...objects
]

/**
 * Exports the schema object containing all schema type definitions.
 */
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes
}
