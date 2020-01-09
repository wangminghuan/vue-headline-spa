import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/patent/:id',
      component: () => import('@/views/Patent.vue')
    },
    {
      path: '/subject/:id',
      component: () => import('@/views/Subject.vue')
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/Detail.vue')
    },
    {
      path: '/error',
      component: () => import('@/views/Error.vue'),
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
});

export default router;