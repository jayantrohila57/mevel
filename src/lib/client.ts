import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../environment/env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn
})
