import Vue from 'vue'
import Vuex from 'vuex'
import category from './parts/category'
import post from './parts/post'
import authors from './parts/authors'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category, post, authors
  }
})
