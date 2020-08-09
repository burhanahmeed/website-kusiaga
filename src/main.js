// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
import Chakra from '@chakra-ui/vue'
// require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
// require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");
require("gridsome-plugin-remark-prismjs-all/themes/tomorrow.css");

import '~/assets/css/style.css';

import customTheme from './custom-theme.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Chakra, {
    extendTheme: customTheme
  })

  Vue.use(Chakra)
  Vue.use(VueDisqus)
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'
  })
}
