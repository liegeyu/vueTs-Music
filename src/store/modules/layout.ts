import { markRaw } from 'vue'
import { Module } from 'vuex'

import { RootState, LayoutState } from '@/types/store-types';
import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  DownloadThree,
  PlayTwo,
} from "@icon-park/vue-next";


const layoutStore: Module<LayoutState, RootState> = {
  namespaced: true,
  state: {
    scrollBar: {} as HTMLElement,
    menus: [
      {
        name: "在线音乐",
        menus: [
          {
            name: "推荐",
            key: "home",
            icon: markRaw(Planet),
            theme: "outline",
          },
          {
            name: "音乐馆",
            key: "music",
            icon: markRaw(Music),
            theme: "outline",
          },
          {
            name: "视频",
            key: "video",
            icon: markRaw(VideoOne),
            theme: "outline",
          },
          {
            name: "电台",
            key: "dj",
            icon: markRaw(Fm),
            theme: "outline",
          },
        ],
      },
      {
        name: "我的音乐",
        menus: [
          {
            name: "我喜欢",
            key: "love",
            icon: markRaw(Like),
            theme: "outline",
          },
          {
            name: "本地歌曲",
            key: "local",
            icon: markRaw(Computer),
            theme: "outline",
          },
          {
            name: "下载歌曲",
            key: "download",
            icon: markRaw(DownloadThree),
            theme: "outline",
          },
          {
            name: "最近播放",
            key: "recently",
            icon: markRaw(PlayTwo),
            theme: "outline",
          },
        ],
      },
    ]
  },
  mutations: {
    setScrollBar(state, value) {
      state.scrollBar = value;
    }
  }
}

export default layoutStore;