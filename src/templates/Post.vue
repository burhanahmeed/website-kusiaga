<template>
  <Layout>
    <div class="information">
      <h2>{{ $page.post.title }}</h2>
      <span>Date posted: {{ $page.post.date | date_format }}</span>
      <!-- <span>Date posted: {{ $page.post.date | date_format }}</span> -->
    </div>
    <div class="content">
      <div class="markdown-body main-c" v-html="$page.post.content"/>
      <div class="author">
        <img src="../assets/avatar.png" alt="avatar">
        <div class="info">
          <p class="name">Burhan A</p>
          <p class="titled">A learner</p>
        </div>
      </div>
      <vue-disqus shortname="Kusiaga" :identifier="$page.post.title"></vue-disqus>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    date
    content
    excerpt
    thumbnail
  }
}
</page-query>

<script>
import moment from 'moment';

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.excerpt },
          // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title + ' - Digital Experiment Lab' },
        { name: "twitter:site", content: "@burhannahm" },
        { name: "twitter:image", content: this.$page.post.thumbnail ? 'https://kusiaga.com'+this.$page.post.thumbnail : '' },
        { name: "twitter:creator", content: "@burhannahm" },

        { name: "og:description", content: this.$page.post.excerpt },
        { name: "og:image", content: this.$page.post.thumbnail ? 'https://kusiaga.com'+this.$page.post.thumbnail : '' },
      ],
    }
  },
  components: {

  },
  filters: {
    date_format (val) {
      return moment(val).format('LLLL')
    }
  }
};
</script>

<style scoped>
@import url('/css/style.css');
.main-c {
  margin: 20px 0;
  margin-bottom: 30px;
}
.dark .markdown-body {
  color: wheat;
}
pre {
  background-color: #3a3c3e !important;
}
.information span {
  font-size: 12px;
  margin: 0 10px;
  display: inline-block;
}
.content {
  padding: 15px;
}
.author {
  display: block;
}
.author img {
  height: 60px;
  border-radius: 100%;
  display: inline;
  margin: 10px;
  vertical-align: middle;
}
.author .info {
  display: inline-block;
  margin: 10px;
  vertical-align: middle;
}
.titled {
  font-size: 12px;
  display: block;
  margin: 0;
}
.name {
  display: block;
  margin: 0;
}
</style>