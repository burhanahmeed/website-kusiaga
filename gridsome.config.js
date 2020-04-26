// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Kusiaga',
  titleTemplate: '%s - Digital Experiement Lab',
  icon: './src/assets/icon.jpg',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-112771033-3'
      }
    }
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/other/location/Post.vue'
      }
    ]
  }
}
