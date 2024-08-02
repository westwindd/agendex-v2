import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthPage from '../views/AuthPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
