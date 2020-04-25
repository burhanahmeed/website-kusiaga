// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Kusiaga',
  titleTemplate: '%s - Digital Experiement Lab',
  icon: './src/assets/icon.jpg',
  plugins: [],
  templates: {
    Post: [
      {
        path: '/blog/:year/:month/:title',
        component: './src/other/location/Post.vue'
      }
    ]
  }
}
