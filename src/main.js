import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局怪异盒
import "./assets/style/reset.stylus"
// 新的rem
import "amfe-flexible/index.js";

Vue.config.productionTip = false
import {
  Tabbar, 
  TabbarItem,
  Swipe, 
  SwipeItem,
  Grid, 
  GridItem
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem )
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
