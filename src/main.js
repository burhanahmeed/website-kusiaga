// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
import Chakra from '@chakra-ui/vue'
// require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
// require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");
require("gridsome-plugin-remark-prismjs-all/themes/tomorrow.css");

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Chakra)
  Vue.use(VueDisqus)
  Vue.component('Layout', DefaultLayout)
}
