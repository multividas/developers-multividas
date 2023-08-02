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

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Models', link: '/models' },
          { text: 'Threads', link: '/threads' },
          { text: 'Comments', link: '/comments' },
          { text: 'Replies', link: '/replies' },
          { text: 'Tags', link: '/tags' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/multivida' }
    ],


    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Soulaiamne Yahya'
    }
  }
})


function nav() {
  return [
    { text: 'MultiVida API', link: '/' },
    { text: 'Guide', link: '/guide' },
    {
      text: 'Learn more',
      items: [
        { text: 'Multivida', link: 'https://multivida.blog' },
        { text: 'Contribution', link: 'https://github.com/multivida' },
      ]
    }
  ]
}
