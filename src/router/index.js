import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Post from '../views/Post.vue'

import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/admin/category',
        component: () => import('../components/admin/Category.vue')
      },
      {
        path: '/admin/posts',
        component: () => import('../components/admin/Posts.vue')
      },
      {
        path: '/admin/authors',
        component: () => import('../components/admin/Authors.vue')
      },
    ]
  },
  {
    path: '/category/:link',
    component: Category,
  },
  {
    path: '/category/:cat/:id',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
