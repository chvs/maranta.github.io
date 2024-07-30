const keywordsContent = 'ui/ux designer, illustrator, photographer, musician';

export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: '@менеджментваду',
    meta: [
      { lang: 'en' },
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { name: 'keywords', content: keywordsContent },
      { property: 'og:site_name', content: 'Maranta' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: 'maranta' },
      { property: 'og:description', content: 'Мы делаем здесь amazing customer service ©' },
      { hid: 'image', property: 'og:image', content: 'http://www.mrnt.org/img/share.png' },
      { hid: 'vk-image', property: 'vk:image', content: 'http://www.mrnt.org/img/share.png' },
      { hid: 'tw-image', property: 'tw:image', content: 'http://www.mrnt.org/img/share.png' },
      { hid: 'image-width', property: 'og:image:width', content: '1200' },
      { hid: 'image-height', property: 'og:image:height', content: '630' },
      { hid: 'description', name: 'description', content: 'Мы делаем здесь amazing customer service ©' },
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
  },

  target: 'static',

  css: ['@/assets/scss/global.scss'],

  styleResources: {
    scss: ['~/assets/scss/index.scss'],
  },

  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap' // always the last
  ],

  sitemap: {
    hostname: 'https://www.mrnt.org',
    exclude: ['/404'],
    routes: [
      'post/design',
      'post/photo-5',
      'post/matrix',
      'post/zone',
      'post/photo-4',
      'post/planning',
      'post/photo-3',
      'post/communication',
      'post/photo-2',
      'post/codex',
      'post/photo-1',
      'post/hr-crisis',
      '/work',
      '/photo',
    ],
  },

  gtm: {
    id: 'GTM-N2GPJJD',
    // enabled: true,
  },

  /*
  ** Build
  */
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: process.env.NODE_ENV !== 'production'
            ? '[name]__[local]__[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    },
    extend(config) {
      const svgRule = config.module.rules
        .find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'vue-loader',
          'vue-svg-loader',
        ],
      });
    },
  }
};