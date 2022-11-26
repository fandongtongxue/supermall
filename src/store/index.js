import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:{
      type: Array,
      default: []
    }
  },
  getters: {
  },
  mutations: {
    addCart() {
      this.cartList.push()
    },
    addCartGoodCount(){

    }
  },
  actions: {
  },
  modules: {
  }
})
