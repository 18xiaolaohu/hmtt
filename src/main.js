import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
// import '@/styles/icon.less'
// import '@/styles/reset.less'
import '@/styles/index.less'
import Myicon from '@/components/Myicon.vue'

// import * as obj from '@/filters'
// Object.keys(obj).forEach(key => {
//   Vue.filter(key.obj[key])
// })

Vue.config.productionTip = false
Vue.component('Myicon', Myicon)

Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
