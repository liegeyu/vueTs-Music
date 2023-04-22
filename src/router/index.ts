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
        meta: {
          menu: 'home',
          keepAlive: true,
        }
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('@/views/Music/index.vue'),
        meta: {
          menu: 'music',
        },
        children: []
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/Video/index.vue'),
        meta: {
          menu: 'video',
          title: '视频',
          keepAlive: true,
        } 
      },
      {
        path: '/mvdetail',
        name: 'mvdetail',
        component: () => import('@/views/MVDetail/index.vue'),
        meta: {
          menu: 'mvdetail',
        }
      },
      {
        path: '/dj',
        name: 'dj',
        component: () => import('@/views/Dj/index.vue'),
        meta: {
          menu: 'dj',
          title: '电台',
          keepAlive: true,
        }
      },
      {
        path: '/playlist',
        name: 'playlist',
        component: () => import('@/views/PlayList/index.vue'),
      },
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;