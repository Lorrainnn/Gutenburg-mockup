import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BookDetail from '@/views/BookDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/book/:id', component: BookDetail, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

