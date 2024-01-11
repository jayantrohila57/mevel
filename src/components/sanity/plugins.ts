import { defaultDocumentNode } from '@/components/sanity'
import { generalStructure } from '@/components/sanity/structure'
import { apiVersion, dataset } from '@/environment/env'
import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { isDev } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { draftReviewPluginV3 } from 'sanity-plugin-draft-review-v3'
import { media } from 'sanity-plugin-media'
import { noteField } from 'sanity-plugin-note-field'
import { deskTool } from 'sanity/desk'

const devOnlyPlugins = [
  visionTool({
    defaultApiVersion: apiVersion,
    defaultDataset: dataset
  }),
  draftReviewPluginV3({})
]

const plugins = [
  deskTool({ structure: generalStructure, defaultDocumentNode }),
  codeInput(),
  noteField(),
  media(),
  unsplashImageAsset(),
  ...(isDev ? devOnlyPlugins : [])
]
export default plugins
