<template>
  <Layout @mode="nightMode">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image v-if="!isNightMode" alt="Example image" src="~/assets/logo.png" width="135" />
    <g-image v-if="isNightMode" alt="Example image" src="~/assets/logo-w.png" width="135" /> -->
    <section class="group-person">
      <g-image 
        @mouseover="toggleAvatar(false)"
        style="border-radius: 100%" 
        alt="Example image" 
        src="~/assets/photo.jpg" width="100"
        v-if="isAvaShowed"
      />
      <g-image 
        v-else
        @mouseout="toggleAvatar(true)"
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
    </section>

    <section>
      <div style="margin: 10px 0">
        <c-text fontSize="xl" style="font-weight: 700">Howdy!</c-text>
        <c-text fontSize="xl">I'm a Software Engineer who work with Javascript, Vue, Nuxt, and Nodejs but I can adjust based on requirement. 👨‍💻 I like creating digital product and solve problems on society. 🧑‍🚒 Sometimes I create OSS stuffs like a libary or just a web component. 🎓 I completed my bachelor degree in IS at ITS Surabaya, Indonesia.</c-text>
      </div>
      <div style="margin: 10px 0">
         <c-box d="flex" align-items="baseline">
           <c-link is-external href="https://t.me/burhannahm" p="5">
             <g-image 
              style="border-radius: 100%" 
              alt="Example image" 
              src="~/assets/social/telegram.svg" width="30"
            />
           </c-link>
           <c-link is-external href="https://twitter.com/burhannahm" p="5">
             <g-image 
              style="border-radius: 100%" 
              alt="Example image" 
              src="~/assets/social/twitter.svg" width="30"
            />
           </c-link>
           <c-link is-external href="mailto:brhn@kusiaga.com" p="5">
             <g-image 
              style="border-radius: 100%" 
              alt="Example image" 
              src="~/assets/social/mail.svg" width="30"
            />
           </c-link>
           <c-link is-external href="https://github.com/burhanahmeed" p="5">
             <g-image 
              style="border-radius: 100%" 
              alt="Example image" 
              src="~/assets/social/github.svg" width="30"
            />
           </c-link>
        </c-box>
      </div>
    </section>

    <section id="why-kusiaga">
      <c-box bg="#171717" w="100%" p="4" color="white">
        <c-box fontSize="xl" fontWeight="700">Why Kusiaga?</c-box>
        <c-box fontSize="xl">It is long story. 👓 Kusiaga was my very first product when I learn web development. It is a link shortener, you can <c-link color="cyan.500" is-external href="https://kusia.ga">access here</c-link>. I was looking for a proper domain name with [dot] .ga domain but I could not. So I ended up with that name. 🤣</c-box>
      </c-box>
    </section>
    
    <section>
      <c-box>
        <c-text fontSize="xl" style="font-weight: 700">Some of my work on Github</c-text>
        <github-wrapper :nightMode="isNightMode" />
        <c-box align-items="center" width="100%" style="padding: 15px; text-align: center">
          <c-link as="router-link" href="https://github.com/burhanahmeed" is-external>
            <c-button variant-color="green">View on Github</c-button>
          </c-link>
        </c-box>
      </c-box>
    </section>

    <section>
      <project-wrapper></project-wrapper>
    </section>

    <section>
      <c-text my="3" align="center" fontSize="2xl" fontWeight="bold">Sponsoring <c-icon name="star"></c-icon></c-text>
      <iframe style="margin: 0px; border: 0px none; height: 400px; width: 100%; border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px; background: rgb(255, 255, 255) url('https://marketplace.kony.com/static/dist/images/loader.svg') no-repeat scroll center center / 64px; transition: all 0.4s ease 0s;" src="https://www.buymeacoffee.com/widget/page/zOkT07A?description=Support%20me%20on%20Buy%20me%20a%20coffee!&amp;color=%23FF813F"></iframe>
    </section>

  </Layout>
</template>

<script>
import GithubWrapper from '../components/github/wrapper';
import ProjectWrapper from '../components/home/project/wrapper'
import { 
  CText, 
  CButton,
  CBox,
  CLink,
  CIcon
} from '@chakra-ui/vue';
export default {
  components: {
    GithubWrapper,
    ProjectWrapper,
    CText,
    CButton,
    CBox,
    CIcon,
    CLink
  },
  metaInfo (){
    return {
      title: 'Burhanuddin Ahmad',
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
        description: 'Berhan is a Software Engineer who code in Javascript, mostly he uses framework like Vue, Nuxt, NodeJS, Express, etc. He also write blog about tech, startup, and product related.',
        image: 'https://kusiaga.com/metaimg.jpg',
        site: '@burhannahm'
      },
      isAvaShowed: true
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
    },
    toggleAvatar (args) {
      this.isAvaShowed = args
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
section {
  margin: 20px 0;
}
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
