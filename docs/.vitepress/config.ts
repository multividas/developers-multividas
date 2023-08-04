import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
  lang: 'en-US',
  title: 'Multivida',
  description: 'Multivida API documentation',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0f4c81' }],
  ],

  vite: {
    plugins: [pagefindPlugin({
      forceLanguage:'en-US',
      btnPlaceholder: 'Search Docs',
      placeholder: 'Search Docs',
      emptyText: 'No recent searches',
      heading: 'Documentation',
      excludeSelector:['img','a.header-anchor']
    })],
  },

  themeConfig: {
    siteTitle: 'Multivida',
    logo: '/logo.svg',

    nav: nav(),

    sidebar: {
      '/rest-api/': sidebarRestApi(),
      '/graphql/': sidebarGraphQL(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/multivida' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Soulaimane Yahya'
    }
  }
})

function nav() {
  return [
    { text: 'Rest API', link: '/rest-api/introduction/getting-started', activeMatch: '/rest-api/' },
    { text: 'GraphQL', link: '/graphql/introduction/getting-started', activeMatch: '/graphql/' },
    {
      text: 'Learn more',
      items: [
        { text: 'Multivida', link: 'https://multivida.blog' },
        { text: 'Contributing', link: 'https://github.com/multivida' },
      ]
    }
  ]
}

function sidebarGraphQL() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/graphql/introduction/getting-started' },
      ]
    },
  ]
}

function sidebarRestApi() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/rest-api/introduction/getting-started' },
        { text: 'Query Filters', link: '/rest-api/introduction/query-filters' },
        { text: 'Errors', link: '/rest-api/introduction/errors' },
      ]
    },
    {
      text: 'Entities',
      collapsed: true,
      items: [
        { text: 'User', link: '/rest-api/entities/user' },
        { text: 'Thread', link: '/rest-api/entities/thread' },
        { text: 'Comment', link: '/rest-api/entities/comment' },
        { text: 'Reply', link: '/rest-api/entities/reply' },
        { text: 'Tag', link: '/rest-api/entities/tag' },
      ]
    },
    {
      text: 'Thread',
      collapsed: true,
      items: [
        { text: 'Get', link: '/rest-api/threads/get' },
        { text: 'Show', link: '/rest-api/threads/show' },
        { text: 'Create', link: '/rest-api/threads/create' },
        { text: 'Update', link: '/rest-api/threads/update' },
        { text: 'Delete', link: '/rest-api/threads/delete' },
      ]
    },
    {
      text: 'Comment',
      collapsed: true,
      items: [
        { text: 'Get', link: '/rest-api/comments/get' },
        { text: 'Show', link: '/rest-api/comments/show' },
        { text: 'Create', link: '/rest-api/comments/create' },
        { text: 'Update', link: '/rest-api/comments/update' },
        { text: 'Delete', link: '/rest-api/comments/delete' },
      ]
    },
    {
      text: 'Reply',
      collapsed: true,
      items: [
        { text: 'Get', link: '/rest-api/replies/get' },
        { text: 'Show', link: '/rest-api/replies/show' },
        { text: 'Create', link: '/rest-api/replies/create' },
        { text: 'Update', link: '/rest-api/replies/update' },
        { text: 'Delete', link: '/rest-api/replies/delete' },
      ]
    },
    {
      text: 'Tag',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/rest-api/tags/listing' },
      ]
    },
  ]
}
