import { Module } from 'vuex';

import { RootState, VideoState } from '@/types/store-types';
import { getMvAll } from "@/service/modules/video";
import { MvAll } from "@/types/video-types";

const VideoStore: Module<VideoState, RootState> = {
  namespaced: true,
  state: {
    videoTab: "videoBox",
    selectArea: "内地",
    selectKind: "全部",
    selectOrder: "最新",
    areas: ["全部", "内地", "港台", "欧美", "韩国", "日本"],
    kinds: ["全部", "官方版", "原声", "现场版", "网易出品"],
    orders: ["上升最快", "最热", "最新"],
    mvPageNum: 1,
    mvTotal: 0,
    mvData: [] as MvAll[],
  },
  mutations: {
    setVideoTab(state, value) {
      state.videoTab = value;
    },
    setSelectArea(state, value) {
      state.selectArea = value;
    },
    setSelectKind(state, value) {
      state.selectKind = value;
    },
    setSelectOrder(state, value) {
      state.selectOrder = value;
    },
    setMvPageNum(state, value) {
      state.mvPageNum = value;
    },
    setMvTotal(state, value) {
      state.mvTotal = value;
    },
    setMvData(state, value) {
      state.mvData = value;
    },
  },
  actions: {
    async fetchMvAll({ commit }, params) {
      const res = await getMvAll(params);
      if (res.count !== undefined) {
        commit("setMvTotal", res.count);
      }
      commit("setMvData", res.data);
    }
  }
}

export default VideoStore;


