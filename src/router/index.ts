import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
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
        redirect: { name: 'rankinglist' },
        meta: {
          menu: 'music',
        },
        children: [
          {
            path: 'rankinglist',
            name: 'rankinglist',
            component: () => import('@/views/Music/components/RankingList.vue'),
            meta: {
              name: 'rankinglist',
              keepAlive: true,
            },
          },
          {
            path: 'customize',
            name: 'customize',
            component: () => import('@/views/Music/components/Customize.vue'),
            meta: {
              name: 'customize',
              keepAlive: true,
            },
          },
          {
            path: 'songlist',
            name: 'songlist',
            component: () => import('@/views/Music/components/SongList.vue'),
            meta: {
              name: 'songlist',
              keepAlive: true,
            },
          },
          {
            path: 'singerlist',
            name: 'singerlist',
            component: () => import('@/views/Music/components/SingerList.vue'),
            meta: {
              name: 'singerlist',
              keepAlive: true,
            },
          },
        ]
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/Video/index.vue'),
        meta: {
          menu: 'video',
          title: '视频',
          // keepAlive: true,
        } 
      },
      {
        path: '/videodetail',
        name: 'videodetail',
        component: () => import('@/views/VideoDetail/index.vue'),
        meta: {
          name: 'videodetail',
        }
      },
      {
        path: '/artistDetail',
        name: 'artistDetail',
        component: () => import('@/views/ArtistDetail/index.vue'),
        meta: {
          name: 'artistDetail',
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