export const nav = () => {
  return [
    { text: 'Rest API', link: '/rest/introduction/getting-started', activeMatch: '/rest/' },
    { text: 'GraphQL', link: '/graphql/introduction/getting-started', activeMatch: '/graphql/' },
    { text: 'Multividas UI', link: '/multividas-ui/introduction/getting-started', activeMatch: '/multividas-ui/' },
    {
      text: 'Learn more',
      items: [
        { text: 'Multividas', link: 'https://multividas.com' },
        { text: 'Contributing', link: 'https://github.com/multividas' },
      ]
    }
  ]
}

export const sidebarRestApi = () => {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/rest/introduction/getting-started' },
        { text: 'API Response Handling', link: '/rest/introduction/api-responser' },
        { text: 'Query Filters', link: '/rest/introduction/query-filters' },
        { text: 'Error Handling', link: '/rest/introduction/errors' },
      ]
    },
    {
      text: 'Entities',
      collapsed: true,
      items: [
        { text: 'User', link: '/rest/entities/user' },
        { text: 'Thread', link: '/rest/entities/thread' },
        { text: 'Comment', link: '/rest/entities/comment' },
        { text: 'Tag', link: '/rest/entities/tag' },
      ]
    },
    {
      text: 'User',
      collapsed: true,
      items: [
        { text: 'Getting Started', link: '/rest/users/getting-started' },
        { text: 'Get the authenticated user', link: '/rest/users/get-the-authenticated-user' },
        { text: 'Get user', link: '/rest/users/get-user' },
      ]
    },
    {
      text: 'Thread',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/rest/threads/listing' },
        { text: 'Show', link: '/rest/threads/show' },
        { text: 'Create', link: '/rest/threads/create' },
        { text: 'Delete', link: '/rest/threads/delete' },
        { text: 'Status', link: '/rest/threads/status' },
      ]
    },
    {
      text: 'Comment',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/rest/comments/listing' },
        { text: 'Show', link: '/rest/comments/show' },
        { text: 'Create', link: '/rest/comments/create' },
        { text: 'Delete', link: '/rest/comments/delete' },
        { text: 'Status', link: '/rest/comments/status' },
      ]
    },
    {
      text: 'Tag',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/rest/tags/listing' },
      ]
    },
  ]
}

export const sidebarGraphQL = () => {
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

export const sidebarMultividasUi = () => {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/multividas-ui/introduction/getting-started' },
      ]
    },
    {
      text: 'Icons',
      collapsed: false,
      items: [
        { text: 'Installation', link: '/multividas-ui/icons/installation' },
        { text: 'Explore Icons', link: '/multividas-ui/icons/explore' },
      ]
    },
  ]
}
