import { Module } from "vuex";

import { RootState, MvDetailState } from "@/types/store-types";
import { MvUrl, MvDetail, RelatedAllVideo } from "@/types/mv-types";
import { getMvDetail, getMvUrl, getRelatedAllVideo } from "@/service/modules/video";


const MvDetailStore: Module<MvDetailState, RootState> = {
  namespaced: true,
  state: {
    mvDetail: {} as MvDetail,
    mvUrl: {} as MvUrl,
    relatedAllVideo: [] as RelatedAllVideo[],
  },
  mutations: {
    setMvDetail(state, payload) {
      state.mvDetail = payload;
    },
    setMvUrl(state, payload) {
      state.mvUrl = payload;
    },
    setRelatedAllVideo(state, payload) {
      state.relatedAllVideo = payload;
    }
  },
  actions: {
    async fetchMvdetail({ commit }, params) {
      const res = await getMvDetail(params);
      commit("setMvDetail", res.data);
    },
    async fetchMvUrl({ commit }, params) {
      const res = await getMvUrl(params);
      commit("setMvUrl", res.data);
    },
    async fetchRelatedAllVideo({ commit }, params) {
      const res = await getRelatedAllVideo(params);
      commit("setRelatedAllVideo", res.data);
    }
  }
}

export default MvDetailStore;