import document from '@/components/sanity/document'
import icon from '@/components/sanity/icon'
import plugins from '@/components/sanity/plugins'
import { defineConfig } from 'sanity'

import { basePath, baseUrl, dataset, name, projectId } from './src/environment/env'
import { schema } from './src/schema/schema'

/**
 * Defines the Sanity studio configuration object.
 * Contains the base path, base URL, project ID, dataset, name, schema,
 * icon component, document component, and plugins.
 */
const config = {
  basePath,
  baseUrl,
  projectId,
  dataset,
  name,
  schema,
  icon,
  document,
  plugins
}

/**
 * Defines the Sanity studio configuration by passing the configuration object to Sanity's defineConfig() function.
 */
const sanityConfig = defineConfig(config)

export default sanityConfig
