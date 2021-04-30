import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  methods: {
    getRandomNumber: () => {
      return Math.floor(Math.random() * 5);
    },
  }
}).$mount('#app')