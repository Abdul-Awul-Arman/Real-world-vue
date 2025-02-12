import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Details from '../views/event/Details.vue'
import Edit from '../views/event/Edit.vue'
import Layout from '../views/event/Layout.vue'
import Register from '../views/event/Register.vue'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: Layout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: Details,
        },
        {
          path: 'register',
          name: 'event-register',
          component: Register,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: Edit,
        },
      ],
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent }
      },
    },

    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
      // alias: '/about',
    },
    // {
    //   path: '/about',
    //   redirect: { name: 'about' },
    // },
  ],
})

export default router
