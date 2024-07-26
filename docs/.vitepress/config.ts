// Vitepress
import { defineConfig } from 'vitepress'
// Partials
import {
  nav,
  // multividas
  sideBarMultividasRest,
  sideBarMultividasGraphql,
  // multichat
  sideBarMultiChatRest,
  // open source
  sidebarMultividasUi
} from './nav'

export default defineConfig({
  lang: 'en-US',
  title: 'Multividas',
  description: 'Multividas Developers',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0f4c81' }],
    // open graph SEO tips
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'Multividas Developers' }],
    ['meta', { property: 'og:title', content: 'Multividas Developers' }],
    ['meta', { property: 'og:description', content: 'Welcome to Multividas Developers! Explore various features and functionalities through our API documentation.' }],
    ['meta', { property: 'og:image', content: '/images/logo.svg' }],
    ['meta', { property: 'og:url', content: 'developers.multividas.com' }],
    ['meta', { property: 'og:site_name', content: 'Multividas Developers' }],
    // multividas tags
    ['meta', { property: 'multividas:card', description: 'summary' }],
    ['meta', { property: 'multividas:site', description: 'multividascom' }],
    ['meta', { property: 'multividas:title', description: 'Multividas Developers' }],
    ['meta', { property: 'multividas:description', description: 'With Multividas, you can share threads, publish articles and news.' }],
    ['meta', { property: 'multividas:image', description: 'https://avatars.githubusercontent.com/u/137715137?v=4' }],
  ],

  themeConfig: {
    siteTitle: 'Multividas',
    logo: '/images/logo.svg',

    nav: nav(),

    sidebar: {
      '/products/multividas/rest/': sideBarMultividasRest(),
      '/products/multividas/graphql/': sideBarMultividasGraphql(),
      '/products/multichat/rest/': sideBarMultiChatRest(),
      '/open-source/multividas-ui': sidebarMultividasUi(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/multividas' },
      { icon: 'twitter', link: 'https://twitter.com/multividaseng' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/multividas/' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${(new Date()).getFullYear()}-present Multividas`
    }
  }
})

