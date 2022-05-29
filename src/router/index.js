import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import AddArticle from '@/components/AddArticle.vue'
import ShowArticle from '@/components/ShowArticle.vue'
import SingleArticle from '@/components/SingleArticle.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShowArticle',
      component: ShowArticle
    },
    {
      path: '/add',
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path: '/blog/:id',
      name: 'SingleArticle',
      component: SingleArticle
    }
  ]
})
