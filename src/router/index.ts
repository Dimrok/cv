import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/cv',
      redirect: '/resume',
    },
    {
      path: '/',
      redirect: '/resume',
    },
  ],
})

export default router
