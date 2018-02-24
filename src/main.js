import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './routes'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == '/reg' || to.path == '/findpwd'){
    next();
  }else{
    if (to.path == '/login') {
      sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

