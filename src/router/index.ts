import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;