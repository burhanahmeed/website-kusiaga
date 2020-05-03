// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
// require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
// require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");
require("gridsome-plugin-remark-prismjs-all/themes/tomorrow.css");

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)
  /**
   * SEO Meta tag here
   */
  head.meta.push({
    key: 'description',
    name: 'description',
    content: `Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.`,
  })

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.`,
  })
  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: `https://erticonetwork.com/wp-content/uploads/2016/06/smart-city-monitoring-horisontal-view.jpg`,
  })

  head.meta.push({
    key: 'twitter:card',
    name: 'twitter:card',
    content: `summary_large_image`,
  })
  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.`,
  })
  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: `https://erticonetwork.com/wp-content/uploads/2016/06/smart-city-monitoring-horisontal-view.jpg`,
  })
  head.meta.push({
    key: 'twitter:site',
    name: 'twitter:site',
    content: `@burhannahm`,
  })
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://kusiaga.com' + to.path,
    })
    next()
  })
}
