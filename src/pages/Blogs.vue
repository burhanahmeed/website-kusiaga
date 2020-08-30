<template>
    <Layout>
      <c-box mb="5">
        <c-text fontWeight="bold" fontSize="xl" >Blogs</c-text>
        <c-text fontSize="xl">👨🏻‍💻 Sometimes I write a blog about tech, startup, product, or just random stuffs. Written in Bahasa Indonesia.</c-text>
        <c-box mt="5">
          <template v-for="(p, idx) in $page.Post.edges">
            <g-link :to="p.node.path" :key="idx">
                <div class="item">
                  <c-text fontWeight="bold">{{ p.node.title }}</c-text>
                  <span><small>Posted from {{ p.node.date | date_format }}</small></span>
                  <p>{{ p.node.excerpt }}</p>
                </div>
            </g-link>
          </template>
        </c-box>
      </c-box>
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
import { CBox, CText } from '@chakra-ui/vue'
export default {
  components: {
    CBox,
    CText
  },
  metaInfo (){
    return {
      title: 'Blog Posts',
      meta: [
        { name: "description", content: this.meta.description },
            // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'Blog Posts - Digital Experiment Lab' },
        { name: "twitter:description", content: this.meta.description },
        { name: "twitter:site", content: "@burhannahm" },
        { name: "twitter:image", content: this.meta.image },
        { name: "twitter:creator", content: "@burhannahm" },

        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: this.meta.image },
      ]
    }
  },
  data () {
    return {
      meta: {
        description: 'We provide a content related to web technology, javascript, backends, and so on. We will give you an insight and tutorial about it.',
        image: 'https://kusiaga.com/metaimg.jpg',
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
  /* font-size: 13px; */
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