import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/news-all',
      component: () => import('@/views/All.vue')
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