import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Multivida',
  description: 'Multivida API documentation',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0f4c81' }],
  ],

  themeConfig: {
    siteTitle: 'Multivida',
    logo: '/images/logo.svg',

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
        { text: 'API Response Handling', link: '/rest-api/introduction/api-responser' },
        { text: 'Query Search', link: '/rest-api/introduction/query-search' },
        { text: 'Query Filters', link: '/rest-api/introduction/query-filters' },
        { text: 'Error Handling', link: '/rest-api/introduction/errors' },
      ]
    },
    {
      text: 'Authentication',
      collapsed: true,
      items: [
        { text: 'OAuth Apps', link: '/rest-api/authentication/oauth-apps' },
        { text: 'OAuth Apps Scopes', link: '/rest-api/authentication/oauth-apps-scopes' },
        { text: 'Personnel Access Tokens', link: '/rest-api/authentication/personal-access-tokens' },
        { text: 'Personnel Access Tokens Scopes', link: '/rest-api/authentication/personal-access-tokens-scopes' },
      ]
    },
    {
      text: 'REST Hooks',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/rest-api/resthooks/overview' },
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
      text: 'User',
      collapsed: true,
      items: [
        { text: 'Getting Started', link: '/rest-api/users/getting-started' },
        { text: 'Get the authenticated user', link: '/rest-api/users/get-the-authenticated-user' },
        { text: 'Get user', link: '/rest-api/users/get-user' },
      ]
    },
    {
      text: 'Thread',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/rest-api/threads/listing' },
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
        { text: 'Listing', link: '/rest-api/comments/listing' },
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
        { text: 'Listing', link: '/rest-api/replies/listing' },
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
    {
      text: 'Settings',
      collapsed: true,
      items: [

      ]
    },
  ]
}
