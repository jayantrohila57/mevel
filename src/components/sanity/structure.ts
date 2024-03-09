import { apiVersion } from '@/environment/env'
import {
  BlockElementIcon,
  CogIcon,
  CommentIcon,
  DocumentsIcon,
  EditIcon,
  FilterIcon,
  HomeIcon,
  TagIcon,
  TiersIcon,
  TrendUpwardIcon,
  UserIcon
} from '@sanity/icons'
import { Iframe } from 'sanity-plugin-iframe-pane'
import type { StructureBuilder } from 'sanity/desk'

import { iframeOptions } from './custom/draftViewSettings'

export const generalStructure = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      S.divider(),
      S.listItem()
        .title('Home page')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('home')
            .views([S.view.form(), S.view.component(Iframe).options(iframeOptions).title('Draft View')])
            .documentId('home')
        ),
      S.listItem()
        .title('All Pages')
        .icon(DocumentsIcon)
        .child(
          S.documentList()
            .title('All Pages')
            .apiVersion(apiVersion)
            .filter('_type == "page"')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
            .child((childId) =>
              S.document()
                .id(childId)
                .schemaType('page')
                .views([S.view.form(), S.view.component(Iframe).options(iframeOptions).title('Draft View')])
            )
        ),
      S.listItem()
        .title('Blog')
        .icon(EditIcon)
        .child(
          S.list()
            .title('Manage Blog')
            .items([
              S.listItem()
                .title('Blog')
                .icon(EditIcon)
                .child(
                  S.documentList()
                    .title('Blog')
                    .apiVersion(apiVersion)
                    .filter('_type == "blog"')
                    .defaultOrdering([{ field: 'name', direction: 'asc' }])
                    .child((childId) =>
                      S.document()
                        .id(childId)
                        .schemaType('blog')
                        .views([S.view.form(), S.view.component(Iframe).options(iframeOptions).title('Draft View')])
                    )
                ),
              S.listItem()
                .title('Authors')
                .icon(UserIcon)
                .child(
                  S.documentList()
                    .title('Authors')
                    .apiVersion(apiVersion)
                    .filter('_type == "author"')
                    .defaultOrdering([{ field: 'name', direction: 'asc' }])
                    .child((childId) =>
                      S.document()
                        .id(childId)
                        .schemaType('author')
                        .views([S.view.form(), S.view.component(Iframe).options(iframeOptions).title('Draft View')])
                    )
                ),
              S.listItem()
                .title('Blog Catagories')
                .icon(FilterIcon)
                .child(
                  S.documentList()
                    .title('Blog Catagories')
                    .apiVersion(apiVersion)
                    .filter('_type == "category"')
                    .defaultOrdering([{ field: 'name', direction: 'asc' }])
                    .child((childId) =>
                      S.document()
                        .id(childId)
                        .schemaType('category')
                        .views([S.view.form(), S.view.component(Iframe).options(iframeOptions).title('Draft View')])
                    )
                ),
              S.listItem()
                .title('Blog Tags')
                .icon(TagIcon)
                .child(
                  S.documentList()
                    .title('Blog Tags')
                    .apiVersion(apiVersion)
                    .filter('_type == "tag"')
                    .defaultOrdering([{ field: 'name', direction: 'asc' }])
                    .child((childId) =>
                      S.document()
                        .id(childId)
                        .schemaType('tag')
                        .views([S.view.form(), S.view.component(Iframe).options(iframeOptions).title('Draft View')])
                    )
                ),
              S.divider()
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Site Components')
        .icon(TiersIcon)
        .child(
          S.list()
            .title('Site Components')
            .items([
              S.listItem()
                .title('FAQ Component')
                .icon(CommentIcon)
                .child(
                  S.documentList()
                    .title('FAQ Component')
                    .apiVersion(apiVersion)
                    .filter('_type == "faq"')
                    .defaultOrdering([{ field: 'name', direction: 'asc' }])
                    .child((childId) => S.document().id(childId).schemaType('faq').views([S.view.form()]))
                )
            ])
        ),
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Global SEO')
                .icon(TrendUpwardIcon)
                .child(S.document().schemaType('globalSEO').documentId('globalSEO')),
              S.listItem()
                .title('Main Navigation')
                .icon(BlockElementIcon)
                .child(S.document().schemaType('navigation').documentId('navigation')),
              S.listItem()
                .title('Footer Links')
                .icon(BlockElementIcon)
                .child(S.document().schemaType('footer').documentId('footer')),
              S.divider()
            ])
        ),
      S.divider()
    ])
