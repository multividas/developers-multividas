export const nav = () => {
  return [
    {
      text: 'Developer Products',
      items: [
        { text: 'Multividas', link: '/products/multividas/getting-started' },
        { text: 'MultiChat', link: '/products/multichat/getting-started' },
      ]
    },
    {
      text: 'Open Source',
      items: [
        { text: 'Multividas UI', link: '/open-source/multividas-ui/introduction/getting-started' }
      ]
    },
    {
      text: 'Learn more',
      items: [
        { text: 'Contributing', link: 'https://github.com/multividas' },
      ]
    }
  ]
}

/**
 * Developer Products
 */
export const sidebarDeveloperProducts = () => {
  return [

  ]
};

export const sideBarMultividasRest = () => {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/products/multividas/rest/introduction/getting-started' },
        { text: 'API Response Handling', link: '/products/multividas/rest/introduction/api-responser' },
        { text: 'Query Filters', link: '/products/multividas/rest/introduction/query-filters' },
        { text: 'Error Handling', link: '/products/multividas/rest/introduction/errors' },
      ]
    },
    {
      text: 'Entities',
      collapsed: true,
      items: [
        { text: 'User', link: '/products/multividas/rest/entities/user' },
        { text: 'Thread', link: '/products/multividas/rest/entities/thread' },
        { text: 'Comment', link: '/products/multividas/rest/entities/comment' },
        { text: 'Tag', link: '/products/multividas/rest/entities/tag' },
      ]
    },
    {
      text: 'User',
      collapsed: true,
      items: [
        { text: 'Getting Started', link: '/products/multividas/rest/users/getting-started' },
        { text: 'Get the authenticated user', link: '/products/multividas/rest/users/get-the-authenticated-user' },
        { text: 'Get user', link: '/products/multividas/rest/users/get-user' },
      ]
    },
    {
      text: 'Thread',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/products/multividas/rest/threads/listing' },
        { text: 'Show', link: '/products/multividas/rest/threads/show' },
        { text: 'Create', link: '/products/multividas/rest/threads/create' },
        { text: 'Delete', link: '/products/multividas/rest/threads/delete' },
        { text: 'Status', link: '/products/multividas/rest/threads/status' },
      ]
    },
    {
      text: 'Comment',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/products/multividas/rest/comments/listing' },
        { text: 'Show', link: '/products/multividas/rest/comments/show' },
        { text: 'Create', link: '/products/multividas/rest/comments/create' },
        { text: 'Delete', link: '/products/multividas/rest/comments/delete' },
        { text: 'Status', link: '/products/multividas/rest/comments/status' },
      ]
    },
    {
      text: 'Tag',
      collapsed: true,
      items: [
        { text: 'Listing', link: '/products/multividas/rest/tags/listing' },
      ]
    },
  ]
}

export const sideBarMultividasGraphql = () => {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/products/multividas/graphql/introduction/getting-started' },
      ]
    },
  ]
}

export const sidebarMultiChat = () => {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/products/multichat/getting-started' },
      ]
    }
  ]
}

/**
 * Open Source
 */
export const sidebarOpenSource = () => {
  return [

  ]
};

export const sidebarMultividasUi = () => {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/open-source/multividas-ui/introduction/getting-started' },
      ]
    },
    {
      text: 'Icons',
      collapsed: false,
      items: [
        { text: 'Installation', link: '/open-source/multividas-ui/icons/installation' },
        { text: 'Explore Icons', link: '/open-source/multividas-ui/icons/explore' },
      ]
    },
  ]
}
