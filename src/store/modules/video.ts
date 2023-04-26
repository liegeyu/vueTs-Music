import { Module } from 'vuex';

import { RootState, VideoState } from '@/types/store-types';

const VideoStore: Module<VideoState, RootState> = {
  namespaced: true,
  state: {
    selectArea: "内地",
    selectKind: "全部",
    selectOrder: "最新",
    areas: ["全部", "内地", "港台", "欧美", "韩国", "日本"],
    kinds: ["全部", "官方版", "原声", "现场版", "网易出品"],
    orders: ["上升最快", "最热", "最新"],
  },
  mutations: {
    setSelectArea(state, value) {
      state.selectArea = value;
    },
    setSelectKind(state, value) {
      state.selectKind = value;
    },
    setSelectOrder(state, value) {
      state.selectOrder = value;
    },
  },
  actions: {

  }
}

export default VideoStore;


