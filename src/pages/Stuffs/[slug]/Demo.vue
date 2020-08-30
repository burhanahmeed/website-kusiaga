<template>
    <div>
        You will be redirected...
    </div>
</template>
<script>
import Stuffs from '@/staticApi/stuffs';
export default {
  metaInfo (){
    return {
      title: this.title,
      meta: [
        { name: "description", content: this.desc },
            // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.title} - Digital Experiment Lab` },
        { name: "twitter:description", content: this.desc },
        { name: "twitter:site", content: "@burhannahm" },
        { name: "twitter:image", content: this.image },
        { name: "twitter:creator", content: "@burhannahm" },

        { property: "og:description", content: this.desc },
        { property: "og:image", content: this.image },
      ]
    }
  },
  data () {
    return {
      stuffs: Stuffs,
      title: '',
      desc: '',
      image: ''
    }
  },
  mounted () {
    if (this.$route.params.slug) {
      let slug = this.$route.params.slug;      
      let obj = this.stuffs.find(el => el.slug == slug);
      if (obj) {
        this.title = obj.title;
        this.desc = obj.desc;
        this.image = obj.image;
        setTimeout(() => {
          window.location = obj.demo
        }, 1500);
      }
    }
  }
}
</script>