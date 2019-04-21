<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  },
  mounted () {
    this.getAddress()
  },
  methods: {
    ...mapActions(['getAddress'])
  }
}
</script>
<style lang="stylus">
  #app
    width: 100%
    height: 100%
    background-color: #f5f5f5
</style>
