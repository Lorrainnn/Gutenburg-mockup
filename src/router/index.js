import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BookDetail from '@/views/BookDetail.vue'

//assume its unique then book-id is enough
const routes = [
  { path: '/', component: Home },
  { path: '/book/:id', component: BookDetail, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

