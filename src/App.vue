<template>
  <div id="app">
    <Header/>
    <Navs/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/parts/Header'
import Navs from './components/parts/Navs'
import Footer from './components/parts/Footer'

export default {
  components:{
    Header, Navs, Footer
  },
  created(){
    this.$store.dispatch('allCategory')
    this.$store.dispatch('allPosts')
    this.$store.dispatch('getAuthors')
  }
}
</script>
<style lang="scss">
@import 'assets/css/style.css';
</style>
