import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../environment/env'

/**
 * Creates a Sanity client instance configured with the project ID, dataset,
 * API version, and CDN usage from the environment. This client can be used
 * to make requests to the Sanity API for this project.
 */
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn
})
