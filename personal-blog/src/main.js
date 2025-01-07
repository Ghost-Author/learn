import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import BlogList from './components/BlogList.vue';
import BlogPost from './components/BlogPost.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/blog', component: BlogList },
  { path: '/post/:id', component: BlogPost }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');