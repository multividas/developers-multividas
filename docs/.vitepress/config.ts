import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'MultiVida',
  description: 'MultiVida API documentation',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0f4c81' }],
  ],

  themeConfig: {
    siteTitle: 'MultiVida',
    logo: '/logo.svg',

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/multivida' }
    ],

    // on prod
    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Soulaiamne Yahya'
    }
  }
})


function nav() {
  return [
    { text: 'Guide', link: '/guide/introduction/getting-started', activeMatch: '/guide/' },
    {
      text: 'Learn more',
      items: [
        { text: 'Multivida', link: 'https://multivida.blog' },
        { text: 'Contributing', link: 'https://github.com/multivida' },
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/guide/introduction/getting-started' },
        { text: 'Query Filters', link: '/guide/introduction/query-filters' },
        { text: 'Errors', link: '/guide/introduction/errors' },
      ]
    },
    {
      text: 'Models',
      collapsed: true,
      items: [
        { text: 'Thread', link: '/guide/models/thread' },
        { text: 'Comment', link: '/guide/models/comment' },
        { text: 'Reply', link: '/guide/models/reply' },
        { text: 'Tag', link: '/guide/models/tag' },
      ]
    },
    {
      text: 'Thread',
      collapsed: true,
      items: [
        { text: 'Get', link: '/guide/threads/get' },
        { text: 'Show', link: '/guide/threads/show' },
        { text: 'Create', link: '/guide/threads/create' },
        { text: 'Update', link: '/guide/threads/update' },
        { text: 'Delete', link: '/guide/threads/delete' },
      ]
    },
    {
      text: 'Comment',
      collapsed: true,
      items: [
        { text: 'Get', link: '/guide/comments/get' },
        { text: 'Show', link: '/guide/comments/show' },
        { text: 'Create', link: '/guide/comments/create' },
        { text: 'Update', link: '/guide/comments/update' },
        { text: 'Delete', link: '/guide/comments/delete' },
      ]
    },
    {
      text: 'Reply',
      collapsed: true,
      items: [
        { text: 'Get', link: '/guide/replies/get' },
        { text: 'Show', link: '/guide/replies/show' },
        { text: 'Create', link: '/guide/replies/create' },
        { text: 'Update', link: '/guide/replies/update' },
        { text: 'Delete', link: '/guide/replies/delete' },
      ]
    },
    {
      text: 'Tag',
      collapsed: true,
      items: [
        { text: 'Get', link: '/guide/tags/get' },
        { text: 'Show', link: '/guide/tags/show' },
        { text: 'Create', link: '/guide/tags/create' },
        { text: 'Update', link: '/guide/tags/update' },
        { text: 'Delete', link: '/guide/tags/delete' },
      ]
    },
  ]
}
