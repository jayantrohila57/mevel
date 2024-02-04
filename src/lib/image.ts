import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../environment/env'

interface ImageSource {
  asset?: {
    _ref?: string
  }
}

/**
 * Creates an image URL builder for generating URLs to Sanity image assets.
 * Requires the Sanity project ID and dataset name to be configured.
 */
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || ''
})

/**
 * Generates a URL for the given Sanity image source.
 * Returns image width, height, and src URL if available.
 */
export const urlForImage = (
  source?: ImageSource
):
  | { src?: string | undefined; width?: number; height?: number }
  | undefined => {
  if (!source || !source.asset) {
    return undefined
  }
  const dimensions = source.asset._ref?.split('-')[2]

  if (!dimensions) {
    return undefined
  }

  const [widthStr, heightStr] = dimensions.split('x')
  const width = parseInt(widthStr, 10)
  const height = parseInt(heightStr, 10)

  const url = imageBuilder
    ?.image(source)
    ?.auto('format')
    ?.width(Math.min(width, 2000))
    ?.url()

  return {
    src: url,
    width,
    height
  }
}
