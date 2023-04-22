import { Module } from "vuex";

import { RootState, VideoDetailState } from "@/types/store-types";
import { MvUrl, MvDetail, VideoDetail, VideoUrl, RelatedAllVideo } from "@/types/video-types";
import { getMvDetail, getMvUrl, getVideoDetail, getVideoUrl, getRelatedAllVideo } from "@/service/modules/video";


const VideoDetailStore: Module<VideoDetailState, RootState> = {
  namespaced: true,
  state: {
    mvDetail: {} as MvDetail,
    mvUrl: {} as MvUrl,
    videoDetail: {} as VideoDetail,
    videoUrl: [] as VideoUrl[],
    relatedAllVideo: [] as RelatedAllVideo[],
  },
  mutations: {
    setMvDetail(state, payload) {
      state.mvDetail = payload;
    },
    setMvUrl(state, payload) {
      state.mvUrl = payload;
    },
    setVideoDetail(state, payload) {
      state.videoDetail = payload;
    },
    setVideoUrl(state, payload) {
      state.videoUrl = payload;
    },
    setRelatedAllVideo(state, payload) {
      state.relatedAllVideo = payload;
    },
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
    async fetchVideoDetail({ commit }, params) {
      const res = await getVideoDetail(params);
      commit("setVideoDetail", res.data);
    },
    async fetchVideoUrl({ commit }, params) {
      const res = await getVideoUrl(params);
      commit("setVideoUrl", res.urls[0]);
    },
    async fetchRelatedAllVideo({ commit }, params) {
      const res = await getRelatedAllVideo(params);
      commit("setRelatedAllVideo", res.data);
    }
  }
}

export default VideoDetailStore;