import { customPublishConfirm } from '@/components/sanity/custom/customPublishConfirm'
import { singletonDocuments } from '@/schema/schema'
import type { DocumentPluginOptions } from 'sanity'

const singletonActions = new Set<string>(['publish', 'discardChanges', 'restore'])

const document: DocumentPluginOptions = {
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
      const filteredActions = newActions.filter(({ action }) => action && singletonActions.has(action))
      return filteredActions
    }

    return newActions
  }
}
export default document
