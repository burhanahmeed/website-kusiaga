<template>
  <Layout>
    <c-box w="100%">
      <c-box py="4">
        <c-text fontSize="xl" fontWeight="700">Talks</c-text>
        <c-text fontSize="xl">👏🏼 Sometimes I give a talk about Tech / Startup.</c-text>
      </c-box>
      <c-box w="100%" bg="#a6a6a614" p="1">
        <template></template>

        <c-box borderBottom="thin #00000017 solid" p="5" v-for="i in talks" :key="i">
          <c-link :href="i.deck_url" is-external>
            <c-text fontSize="xl" fontWeight="700"><c-icon name="arrow-forward"></c-icon> {{ i.title }}</c-text> 
          </c-link>
          <c-text fontSize="xl">{{ i.event }}</c-text>
          <c-box d="flex">
            <c-box mr="5">
              <c-text>
                {{ i.date }}
              </c-text>
            </c-box>
            <c-box mr="5">
              <c-text>
                {{ i.location }}
              </c-text>
            </c-box>
          </c-box>
        </c-box>

      </c-box>
    </c-box>
  </Layout>
</template>

<script>
import { 
    CText, 
    CButton,
    CBox,
    CLink,
    CIcon,
    CImage,
    CFlex
} from "@chakra-ui/vue";
import Talks from "../staticApi/talks";
export default {
  components: {
    CBox,
    CLink,
    CIcon,
    CText
  },
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
      },
      talks: Talks
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
