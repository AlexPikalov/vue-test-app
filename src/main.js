import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'

import SessionPlugin from './shared/session.plugin';
import routes from './routes'

Vue.use(VueMaterial)
Vue.use(SessionPlugin)
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  },
})

Vue.use(VueRouter)

new Vue({
  router: new VueRouter(routes)
}).$mount('#app')
