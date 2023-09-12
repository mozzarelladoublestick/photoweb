// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/Header.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

// Rest of the router.js file...

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
