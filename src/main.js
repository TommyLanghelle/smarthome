import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import lights from './components/lights'
import temperature from './components/temperature'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: lights },
  { path: '/lights', component: lights },
  { path: '/temperature', component: temperature}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
