import Vue from 'vue'
import Vuex from 'vuex'
import category from './parts/category'
import post from './parts/post'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    category, post
  }
})
