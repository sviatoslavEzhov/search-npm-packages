import Vue from 'vue'
import router from '@/router'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import store from './store'

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
