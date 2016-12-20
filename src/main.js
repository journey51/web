import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.config.debug = true;
import router from './config/router.config.js'

Vue.use(VueRouter);
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
