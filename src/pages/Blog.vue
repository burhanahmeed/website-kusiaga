<template>
    <Layout>
        <h1>Blogs</h1>
        Also check my Medium account -><g-link class="nav__link" to="https://medium.com/@burhanahmeed">here</g-link>
        <div class="content-wrapper">
          <template v-for="(p, idx) in $page.Post.edges">
            <g-link :to="p.node.path" :key="idx">
                <div class="item">
                  <h4>{{ p.node.title }}</h4>
                  <span><small>Posted from {{ p.node.date | date_format }}</small></span>
                  <p>{{ p.node.excerpt }}</p>
                </div>
            </g-link>
          </template>
        </div>
    </Layout>
</template>

<page-query>
query {
  Post: allPost (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        excerpt
        date
        path
      }
    }
  }
}
</page-query>

<script>
import moment from 'moment'
export default {
  metaInfo (){
    return {
      title: 'Blog Posts',
      meta: [
        { name: "description", content: this.meta.description },
            // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.meta.description },
        { name: "twitter:site", content: "@burhannahm" },
        { name: "twitter:image", content: this.meta.image },
        { name: "twitter:creator", content: "@burhannahm" },

        { property: "og:description", content: this.meta.description },
        { property: "og:image:url", content: this.meta.image },
      ]
    }
  },
  data () {
    return {
      meta: {
        description: 'We provide a content related to web technology, javascript, backends, and so on. We will give you an insight and tutorial about it.',
        image: 'https://erticonetwork.com/wp-content/uploads/2016/06/smart-city-monitoring-horisontal-view.jpg',
        site: '@burhannahm'
      }
    }
  },
  filters: {
    date_format (val) {
      return moment(val).fromNow()
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  margin: 20px;
}
.dark h4, .dark p {
  color: wheat;
}
h4, p {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
p {
  font-size: 13px;
}
.item {
  cursor: pointer;
  padding: 15px;
}
.item:hover {
  background-color: #0000002b;
}
.dark .item:hover {
  background-color: #fdfdfd2b;
}
</style>