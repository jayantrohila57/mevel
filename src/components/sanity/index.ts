/* eslint-disable indent */
import { Iframe } from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

import { iframeOptions } from './custom/draftViewSettings'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case 'page':
    case 'author':
    case 'home':
    case 'blog':
      return S.document().views([
        S.view.form(),
        S.view.component(Iframe).options(iframeOptions).title('Draft View')
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
