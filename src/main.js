import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Paginate from 'vuejs-paginate'

Vue.use(BootstrapVue)
Vue.component('paginate', Paginate)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
