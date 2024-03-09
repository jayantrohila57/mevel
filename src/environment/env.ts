/**
 * Throws an error if the provided value is undefined.
 * Otherwise, returns the value. Used to assert required config values.
 */
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
/**
 * Constructs the host URL for the environment,
 * using HTTPS in production/preview or HTTP otherwise.
 */
export const envHost = `http${
  ['production', 'preview'].includes(process.env.SANITY_STUDIO_VERCEL_ENV || '') ? 's' : ''
}://${process.env.SANITY_STUDIO_VERCEL_URL}`

/**
 * Constructs the base URL for the environment,
 * using HTTPS in production/preview or HTTP otherwise.
 */
export const baseUrl = `http${
  ['production', 'preview'].includes(process.env.SANITY_STUDIO_VERCEL_ENV || '') ? 's' : ''
}://${process.env.SANITY_STUDIO_VERCEL_URL}`

/** The base path for the Sanity Studio. */
export const basePath = '/studio'

/** The name of the Sanity studio, loaded from the NEXT_PUBLIC_SANITY_STUDIO_NAME environment variable. */
export const name = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_NAME,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_NAME'
)

/** The preview secret ID, used for previewing unpublished content. */
export const previewSecretId: `${string}.${string}` = 'preview.secret'

/**
 * The base URL for previewing drafts of unpublished content in the studio.
 */
export const SANITY_STUDIO_PREVIEW_BASE_URL = process.env.SANITY_STUDIO_PREVIEW_BASE_URL || '/api/draft'

/** The API version used to access the Sanity API. */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-06'

/**
 * Asserts that the provided value is defined, and throws an error if not.
 * Used to validate required environment variables.
 */
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

/**
 * Asserts that the provided value is defined, and throws an error if not.
 * Used to validate required environment variables.
 */
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false
