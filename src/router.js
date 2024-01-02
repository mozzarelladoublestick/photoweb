// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/Header.vue'
import About from './components/About.vue'
import People from './components/People.vue'
import Outdoor from './components/Outdoor.vue'
import Insights from './components/Insights.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Header
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/outdoor',
    name: 'Outdoor',
    component: Outdoor
  },
  {
    path: '/insights',
    name: 'Insights',
    component: Insights
  }
]

// Rest of the router.js file...

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
