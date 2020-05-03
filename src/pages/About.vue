<template>
  <Layout>
    <h1>Burhanuddin Ahmad</h1>
    <p>A self-proclaimed product creator with passion in product management, javascript, and growth hack marketing.</p>
    <p>Currently work as a software developer with main stack is Javascript for Frontend and Backend, sometimes I use Laravel ;).</p>
    <h4>Now:</h4>
    <ul>
      <li>Reading a book about product management.</li>
      <li>Building a product (confidential)</li>
      <li>Volunteering at SBYJS</li>
    </ul>
    <h4>Contact:</h4>
    <ul>
      <li>Email <a href="mailto:halo@kusiaga.com">halo@kusiaga.com</a></li>
      <li>IG <a target="_blank" href="https://www.instagram.com/burhannahm/">burhannahm</a></li>
      <li>Linkedin <a target="_blank" href="https://www.linkedin.com/in/burhanahmeed/">burhannahm</a></li>
      <li>Telegram <a target="_blank" href="https://t.me/burhannahm">burhannahm</a></li>
    </ul>
    <h4>Technology stacks:</h4>
    <ul>
      <li>VueJS, NuxtJS, Javascript</li>
      <li>ExpressJS, Laravel</li>
      <li>MySQL, MongoDB</li>
      <li>Node-cache, Redis</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo (){
    return {
      title: 'About me',
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
        image: 'https://erticonetwork.com/wp-content/uploads/2016/06/smart-city-monitoring-horisontal-view.jpg',
        site: '@burhannahm'
      }
    }
  },
}
</script>
