import Vue from 'vue'
import router from '@/router/router'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
