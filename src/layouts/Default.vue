<template>
  <div class="layout">
    <div style="min-height: 96vh">
      <header class="header">
        <div class="head-title">
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <img @click="toggle" v-if="!isNightMode" class="iconsvg" src="../assets/half-moon.svg" alt="moon">
          <img @click="toggle" v-if="isNightMode" class="iconsvg" src="../assets/sun.svg" alt="sun">
        </div>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/blog/">Blog</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </header>
      <slot/>
    </div>
    <footer class="footer">
      <span>Copyright © 2020 Kusiaga. All rights reserved. | Crafted by <a target="_blank" href="https://github.com/burhanahmeed">Burhanuddin Ahmed</a> around Southeast Asia.</span>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      isNightMode: false
    }
  },
  mounted () {
    let mode = localStorage.getItem('mode');
    this.isNightMode = JSON.parse(mode);
    this.$emit('mode', this.isNightMode)
    this.setClass()
  },
  methods: {
    toggle () {
      this.isNightMode = !this.isNightMode;
      localStorage.setItem('mode', this.isNightMode);
      this.$emit('mode', this.isNightMode)
      this.setClass()
    },
    setClass () {
      const el = document.body;
      if (this.isNightMode) {
        el.classList.add('dark')
      } else {
        el.classList.remove('dark')
      }
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.nav__link {
  margin-left: 20px;
}
.footer {
  text-align: center;
}
.footer span {
  font-size: 12px;
}
.dark {
  background-color: #171717;
  color: wheat;
}
.dark a {
  color: aqua;
}
.iconsvg {
  height: 25px;
  cursor: pointer;
  margin: 5px 15px;
  vertical-align: middle;
}
.head-title {
  padding: 10px;
}
</style>
