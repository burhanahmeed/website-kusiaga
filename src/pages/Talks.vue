<template>
  <Layout>
    <h4>My Talks</h4>
    <ul>
        <li>
            <div class="card">
                <h4>SurabayaJS Online Meetup</h4>
                <p>
                    Topic: <a href="https://speakerdeck.com/burhanahmeed/javascript-and-seo-so" target="_blank">Javascript and SEO</a>
                </p>
                <span>Date: 16 May 2020</span>
            </div>
        </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo (){
    return {
      title: 'My Talks',
      meta: [
        { name: "description", content: this.meta.description },
            // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'About Me - Digital Experiment Lab' },
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
        description: 'Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.',
        image: 'https://kusiaga.com/metaimg.jpg',
        site: '@burhannahm'
      }
    }
  },
}
</script>

<style scoped>
.card p{
    margin: 5px 0;
}
.card h4 {
    margin-bottom: 5px;
}
.card span {
    font-size: 13px;
}
</style>