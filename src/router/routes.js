
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name:'home', component: () => import('pages/IndexPage.vue') },
      {
        path:'/create-workout',
        name:'create-workout',
        component: () => import('pages/WorkoutCreate.vue')
      },
      {
        path:'/navigate-home',
        name:'navigate-home',
        component: () => import('pages/Navigate.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
