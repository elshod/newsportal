import Vue from 'vue'
import Vuex from 'vuex'
import category from './parts/category'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    category
  }
})
