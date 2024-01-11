import document from '@/components/sanity/document'
import icon from '@/components/sanity/icon'
import plugins from '@/components/sanity/plugins'
import { defineConfig } from 'sanity'

import {
  basePath,
  baseUrl,
  dataset,
  name,
  projectId
} from './src/environment/env'
import { schema } from './src/schema/schema'

export default defineConfig({
  basePath,
  baseUrl,
  projectId,
  dataset,
  name,
  schema,
  icon,
  document,
  plugins
})
