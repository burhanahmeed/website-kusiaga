<template>
  <Layout @mode="nightMode">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image v-if="!isNightMode" alt="Example image" src="~/assets/logo.png" width="135" />
    <g-image v-if="isNightMode" alt="Example image" src="~/assets/logo-w.png" width="135" /> -->
    <div class="group-person">
      <g-image 
        style="border-radius: 100%" 
        alt="Example image" 
        src="~/assets/avatar.png" width="100" 
      />
      <div class="person-desc">
        <c-text 
          fontSize="lg" 
          style="font-weight: 700;"
        >
          Burhanuddin Ahmad
        </c-text>
        <c-text 
          fontSize="sm"
        >
          a software engineer, startup enthusiast, entrepreneur
        </c-text>
      </div>
    </div>

    <div style="margin: 20px 0">
      <c-text fontSize="xl" style="font-weight: 700">Howdy!</c-text>
      <c-text fontSize="md">I am mainly work with JavaScript and all the thing related to web technology, but sometimes I also work with mobile development if needed.</c-text>
    </div>

    <div style="margin: 20px 0">
      <c-text fontSize="xl" style="font-weight: 700">My public works</c-text>
      <github-wrapper :nightMode="isNightMode" />
      <c-box align-items="center" width="100%" style="padding: 15px; text-align: center">
        <c-link as="router-link" href="https://github.com/burhanahmeed" is-external>
          <c-button variant-color="green">View on Github</c-button>
        </c-link>
      </c-box>
    </div>

    <!-- <p class="editor">
      <span style="color: rgb(190, 173, 236)">console.</span><span style="color: #0b6a35">log<span style="color: white">(</span></span><span style="color: rgb(179, 86, 18)">'Welcome to Kusiaga Digital Lab'</span><span style="color: white">)</span>
      <span v-if="!isInit" style="display: flex; justify-content: space-between;">
        <span style="color: rgb(179, 86, 18)">'Welcome to Kusiaga Digital Lab'</span>
        <span style="color: rgb(190, 173, 236); font-size: 13px">../App.js</span>
      </span>
      <span v-if="isInit" style="display: flex; justify-content: space-between;">
        <span>{{ welcomeTxt }}</span>
        <span style="color: rgb(190, 173, 236); font-size: 13px">../App.js</span>
      </span>
    </p> -->

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Medium</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
import GithubWrapper from '../components/github/wrapper';
import { 
  CText, 
  CButton,
  CBox,
  CLink
} from '@chakra-ui/vue';
export default {
  components: {
    GithubWrapper,
    CText,
    CButton,
    CBox,
    CLink
  },
  metaInfo (){
    return {
      title: 'Kusiaga',
      meta: [
        { name: "description", content: this.meta.description },
            // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'Kusiaga - Digital Experiment Lab' },
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
      isNightMode: false,
      isInit: true,
      welcomeTxt: 'Please wait ...',
      meta: {
        description: 'Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.',
        image: 'https://kusiaga.com/metaimg.jpg',
        site: '@burhannahm'
      }
    }
  },
  mounted () {
    const vm = this;
    setTimeout(() => {
      vm.welcomeTxt = 'Processing ...'
      setTimeout(() => {
        vm.welcomeTxt = 'Building ...'
        setTimeout(() => {
          vm.isInit = false
        }, 2000);
      }, 2000);
    }, 2000);
  },
  methods: {
    nightMode (val) {
      this.isNightMode = val;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
.home-links a {
  margin-right: 1rem;
}
.editor {
  background-color: black;
  display: block;
  padding: 10px;
  font-family: 'Roboto Mono', monospace;
  color: white;
}
.dark .editor {
  background-color: transparent;
}
</style>

<style scoped>
h4 {
  margin-bottom: 5px;
}
.creation {
  margin-top: 5px;
  padding-left: 0;
}
.creation li {
  list-style: none;
  display: inline-block;
  margin: 5px;
  font-size: 12px;
}
.wrapper-bg {
  background: olive;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: wheat;
}
.my-creation {
  min-height: 100px;
  margin-bottom: 20px;
}

.group-person {
  display: block ruby;
}
.person-desc {
  padding: 15px;
  vertical-align: middle;
}

@media screen and (max-width: 400px) {
  .person-desc {
    padding: 15px 0;
  }
  .group-person {
    display: block;
  }
}
</style>
