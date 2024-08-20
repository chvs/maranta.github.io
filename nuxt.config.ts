import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import svgLoader from 'vite-svg-loader'
const currentDir = dirname(fileURLToPath(import.meta.url));

const keywordsContent = 'design management, дизайн-менеджмент, менеджмент в it, топ-менеджмент';

export default defineNuxtConfig({
  ssr: false,

  css: [
    // '~/assets/scss/global.scss',
    // See https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
    join(currentDir, './assets/scss/global.scss'),
  ],

  app: {
    head: {
      title: '@менеджментваду',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
        { property: 'og:site_name', content: 'Maranta' },
        { property: 'og:title', content: 'maranta' },
        { property: 'og:description', content: 'Мы делаем здесь amazing customer service (c)' },
        { hid: 'keywords', name: 'keywords', content: keywordsContent },
        { hid: 'image', property: 'og:image', content: 'http://www.mrnt.org/img/share.png' },
        { hid: 'vk-image', property: 'vk:image', content: 'http://www.mrnt.org/img/share.png' },
        { hid: 'tw-image', property: 'tw:image', content: 'http://www.mrnt.org/img/share.png' },
        { hid: 'image-width', property: 'og:image:width', content: '1200' },
        { hid: 'image-height', property: 'og:image:height', content: '630' },
        { hid: 'description', name: 'description', content: 'Мы делаем здесь amazing customer service (c)' },
        { hid: 'twitter-image', property: 'twitter:image', content: 'http://www.mrnt.org/img/share.png' },
        { hid: 'twitter-card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'url', property: 'og:url', content: 'http://www.mrnt.org/' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#000000' },
      ],
    }
  },

  modules: [
    '@zadigetvoltaire/nuxt-gtm',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://www.mrnt.org',
  },

  sitemap: {
    exclude: ['/404'],
    urls: [
      '/post/onboarding',
      '/post/photo-9',
      '/post/product-design',
      '/post/photo-8',
      '/post/interview',
      '/post/strategy',
      '/post/photo-7',
      '/post/culture',
      '/post/photo-6',
      '/post/design',
      '/post/photo-5',
      '/post/matrix',
      '/post/zone',
      '/post/photo-4',
      '/post/planning',
      '/post/photo-3',
      '/post/communication',
      '/post/photo-2',
      '/post/codex',
      '/post/photo-1',
      '/post/hr-crisis',
      '/work',
      '/photo',
    ]
  },

  gtm: {
    id: 'GTM-N2GPJJD',
  },

  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "~/assets/scss/index.scss";\n',
          // See https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
          additionalData: `@import "${join(currentDir, './assets/scss/index.scss')}";\n`,
        },
      },
    },
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },

  compatibilityDate: '2024-08-08'
});