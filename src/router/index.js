import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Post from '../views/Post.vue'

import Admin from '../views/Admin.vue'
import AdminCategory from '../components/admin/Category.vue'
import AdminPosts from '../components/admin/Posts.vue'

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
        component: AdminCategory
      },
      {
        path: '/admin/posts',
        component: AdminPosts
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
