import { createRouter, createWebHistory } from 'vue-router'
import ClubPoster from '../components/ClubPoster.vue'
import LedCompetitionView from '../views/LedCompetitionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClubPoster
    },
    {
      path: '/led-competition',
      name: 'led-competition',
      component: LedCompetitionView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
