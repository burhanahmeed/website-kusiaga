<template>
  <Layout @mode="nightMode">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image v-if="!isNightMode" alt="Example image" src="~/assets/logo.png" width="135" />
    <g-image v-if="isNightMode" alt="Example image" src="~/assets/logo-w.png" width="135" />

    <h1>Hello, world!</h1>

    <p class="editor">
      <span style="color: rgb(190, 173, 236)">console.</span><span style="color: #0b6a35">log<span style="color: white">(</span></span><span style="color: rgb(179, 86, 18)">'Welcome to Kusiaga Digital Lab'</span><span style="color: white">)</span>
      <span v-if="!isInit" style="display: flex; justify-content: space-between;">
        <span style="color: rgb(179, 86, 18)">'Welcome to Kusiaga Digital Lab'</span>
        <span style="color: rgb(190, 173, 236); font-size: 13px">../App.js</span>
      </span>
      <span v-if="isInit" style="display: flex; justify-content: space-between;">
        <span>{{ welcomeTxt }}</span>
        <span style="color: rgb(190, 173, 236); font-size: 13px">../App.js</span>
      </span>
    </p>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Medium</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Kusiaga',
    meta: [
      { name: "description", content: 'Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.' },
        // twitter-card: https://cards-dev.twitter.com/validator
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: 'Kusiaga is a personal website owned by Burhanuddin Ahmad. Kusiaga make a digital product and write a blog about tech and product related but not limited to.' },
      { name: "twitter:title", content: 'Kusiaga - Digital Experiment Lab' },
      { name: "twitter:site", content: "@burhannahm" },
      { name: "twitter:image", content: 'https://erticonetwork.com/wp-content/uploads/2016/06/smart-city-monitoring-horisontal-view.jpg' },
      { name: "twitter:creator", content: "@burhannahm" }
    ],
  },
  data () {
    return {
      isNightMode: false,
      isInit: true,
      welcomeTxt: 'Please wait ...'
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
