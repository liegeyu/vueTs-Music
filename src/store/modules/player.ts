import { Module } from "vuex";

import { RootState, PlayerState } from "@/types/store-types"
import { getSongUrl, getSongDetail } from "@/service/modules/player"
import { Song, SongUrl } from "@/types/player-types"

const playerStore: Module<PlayerState, RootState> = {
  namespaced: true,
  state: {
    audio: new Audio(), // Audio 对象
    music: {} as Song, // 歌曲详情
    musicUrl: {} as SongUrl, // 音频url
    playerList: [] as Song[],  // 播放列表
    playerListId: 0,  // 播放列表id
    musicId: 0, // 歌曲id
    volume: 45, // 音频音量
    currentTime: 0, // 当前播放位置
    duration: 0,  // 音频长度
    isMuted: false,  // 是否静音
    isPause: false,  // 是否暂停
    isEnded: false, // 是否播放结束
    loopType: 0,  // 循环设置 0: 列表循环 1: 随机循环 2: 单曲循环
  },
  mutations: {
    setAudioSrc(state, value: string) {
      state.audio.src = value;
    },
    setPlayerList(state, value: Song[]) {
      state.playerList = value;
    },
    setPlayerListId(state, value: number) {
      state.playerListId = value;
    },
    setMusic(state, value: Song) {
      state.music = value;
      state.musicId = value.id;
    },
    setMusicUrl(state, value: SongUrl) {
      state.musicUrl = value;
    },
    setLoopType(state, value: number) {
      state.loopType = value;
    },
    setPause(state) {
      state.isPause = !state.isPause;
    },
  },
  actions: {
    // 获取歌曲详情
    async fetchMusicDetail({ commit }, params: any) {
      const res = await getSongDetail(params);
      commit("setMusic", res?.songs[0]);
    },
    // 播放歌曲
    async playMusic({ commit, dispatch,state }, params: any) {
      const res = await getSongUrl(params);
      commit("setAudioSrc", res.data[0]?.url);
      try {
        await state.audio.play();
        if (!state.isPause) {
          commit("setPause");
        }
        commit("setMusicUrl", res.data[0]?.url);
        dispatch("fetchMusicDetail", { ids: params.id });
      } catch(err) {
        console.log('error in audio play', err);
      }
    },
    // 切换 pause, 播放状态
    async togglePauseMusic({ commit, state }) {
      if (state.isPause) {
        await state.audio.pause();
        commit("setPause");
      } else {
        await state.audio.play();
        commit("setPause");
      }
    },
    // 切换 looptype, 循环状态
    toggleLoopType({ commit, state }) {
      if (state.loopType === 2) {
        commit("setLoopType", 0)
      } else {
        commit("setLoopType", ++state.loopType)
      }
    },
    // 下一首歌曲
    nextSong({ dispatch, state, rootGetters }) {
      let index = rootGetters.currentMusicIndex;
      if (index === state.playerList.length - 1) {
        dispatch("playMusic", { id: state.playerList[0].id })
      } else {
        dispatch("playMusic", { id: state.playerList[++index].id })
      }
    },
    // 上一首歌曲
    prevSong({ dispatch, state, rootGetters }) {
      let index = rootGetters.currentMusicIndex;
      if (index === 0) {
        dispatch("playMusic", { id: state.playerList[rootGetters.playerListLen - 1].id })
      } else {
        dispatch("playMusic", { id: state.playerList[--index].id })
      }
    },
  }
}

export default playerStore;