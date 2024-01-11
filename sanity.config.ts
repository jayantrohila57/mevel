/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */
import StudioLogo from '@/components/StudioLogo'
import { customPublishConfirm } from '@/components/actions/customPublishConfirm'
import { defaultDocumentNode } from '@/components/structure'
import { generalStructure } from '@/components/structure/structure'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/environment/env'
import { schema, singletonDocuments } from './src/schema/schema'

const singletonActions = new Set<string>([
  'publish',
  'discardChanges',
  'restore'
])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      logo: StudioLogo
    }
  },
  document: {
    // @ts-expect-error: Missing type definition for `customPublishConfirm`
    actions: (actions, context) => {
      // Replace publish with custom publish action that contains confirmation dialogue
      const newActions = actions.map((originalAction) => {
        if (originalAction.action === 'publish') {
          return customPublishConfirm(originalAction)
        }
        return originalAction
      })
      // remove actions form singleton documents, include schedule action
      if (singletonDocuments.some((doc) => doc.name === context.schemaType)) {
        const filteredActions = newActions.filter(
          ({ action }) => action && singletonActions.has(action)
        )
        return filteredActions
      }

      return newActions
    }
  },
  plugins: [
    deskTool({ structure: generalStructure, defaultDocumentNode }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
