function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
export const envHost = `http${
  ['production', 'preview'].includes(process.env.SANITY_STUDIO_VERCEL_ENV || '')
    ? 's'
    : ''
}://${process.env.SANITY_STUDIO_VERCEL_URL}`

export const baseUrl = `http${
  ['production', 'preview'].includes(process.env.SANITY_STUDIO_VERCEL_ENV || '')
    ? 's'
    : ''
}://${process.env.SANITY_STUDIO_VERCEL_URL}`

export const basePath = '/studio'

export const name = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_NAME,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_NAME'
)

export const previewSecretId: `${string}.${string}` = 'preview.secret'

// Used to generate URLs for previewing your content
export const SANITY_STUDIO_PREVIEW_BASE_URL =
  process.env.SANITY_STUDIO_PREVIEW_BASE_URL || '/api/draft'

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false
