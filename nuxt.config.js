// import path from 'path';
require('dotenv').config();

const keywordsContent = 'art';

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'maranta',
    meta: [
      { lang: 'en' },
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { name: 'keywords', content: keywordsContent },
      { property: 'og:site_name', content: 'Maranta' },
      { property: 'og:locale', content: 'en_US' },
      { hid: 'image', property: 'og:image', content: 'http://www.mrnt.org/img/fb.png' },
      { hid: 'vk-image', property: 'vk:image', content: 'http://www.mrnt.org/img/vk.png' },
      { hid: 'tw-image', property: 'tw:image', content: 'http://www.mrnt.org/img/fb.png' },
      { hid: 'description', name: 'description', content: 'cool project' },
      { hid: 'url', property: 'og:url', content: 'http://www.mrnt.org/' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#000000' },
    ],
  },

  target: 'static',

  css: [
    '~/assets/stylus/index.styl',
  ],

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
    extend(config, { isDev, isClient }) {
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