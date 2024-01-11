/* eslint-disable indent */
import { Iframe } from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

import { iframeOptions } from '../draft/draftViewSettings'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case 'article':
    case 'artistPage':
    case 'exhibitionPage':
      return S.document().views([
        S.view.form(),
        S.view.component(Iframe).options(iframeOptions).title('Draft View')
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
