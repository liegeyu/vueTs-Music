import { Module } from "vuex";

import { shuffle } from "@/utils/shuffle";
import { RootState, PlayerState } from "@/types/store-types"
import { getSongUrl, getSongDetail } from "@/service/modules/player"
import { Song, SongUrl } from "@/types/player-types"

const KEYS = {
  volume: "PLAYER-VOLUME"
}

const playerStore: Module<PlayerState, RootState> = {
  namespaced: true,
  state: {
    audio: new Audio(), // Audio 对象
    music: {} as Song, // 歌曲详情
    musicUrl: {} as SongUrl, // 音频url
    playerList: [] as Song[],  // 播放列表
    playerListId: 0,  // 播放列表id
    musicId: 0, // 歌曲id
    beforeVolume: 45,  // 上一次音量值
    volume: Number(localStorage.getItem(KEYS.volume)) || 45, // 音频音量
    currentTime: 0, // 当前播放位置
    duration: 0,  // 音频长度
    isMuted: false,  // 是否静音
    isPause: false,  // 是否暂停
    isEnded: false, // 是否播放结束
    loopType: 0,  // 循环设置 0: 列表循环 1: 随机循环 2: 单曲循环
    randomSongIndexArr: [] as number[], // 随机播放索引
    showPlayerList: false,  // 显示歌曲列表
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
    setEnded(state, value: boolean) {
      state.isEnded = value;
    },
    setMusicTime(state, payload) {
      if (Number.isNaN(payload.curTime) || Number.isNaN(payload.duration)) {
        state.currentTime = 0;
        state.duration = 0;
      } else {
        state.currentTime = payload.curTime;
        state.duration = payload.duration;
      }
    },
    toggleShowPlayerList(state) {
      state.showPlayerList = !state.showPlayerList;
    },
    // 切换静音
    toggleMuted(state) {
      if (state.isMuted) {
        state.audio.muted = false;
        state.volume = state.beforeVolume;
        state.isMuted = false;
      } else {
        state.audio.muted = true;
        state.volume = 0;
        state.isMuted = true;
      }
    },
    // 修改音乐音量
    modifyMusicVolume(state, volumeVal) {
      const val = Number((volumeVal / 100).toFixed(2));
      state.audio.volume = val;
      state.volume = volumeVal;
      state.beforeVolume = state.volume;
      localStorage.setItem(KEYS.volume, volumeVal);
    },
    // 清空所有 state
    initState(state) {
      state.audio.src = "";
      state.audio.pause();
      state.music = {} as Song;
      state.musicUrl = {} as SongUrl;
      state.playerList = [] as Song[];
      state.playerListId = 0;
      state.musicId = 0;
      state.currentTime = 0;
      state.duration = 0;
      state.randomSongIndexArr = [] as number[];
      state.isPause = false;
    }
  },
  actions: {
    // 获取歌曲详情
    async fetchMusicDetail({ commit, dispatch }, params: any) {
      const res = await getSongDetail(params);
      commit("setMusic", res?.songs[0]);
    },
    // 播放歌曲
    async playMusic({ commit, dispatch, state }, params: any) {
      const res = await getSongUrl(params);
      commit("setAudioSrc", res.data[0]?.url);
      try {
        await state.audio.play();
        // 播放成功，初始化歌曲
        if (!state.isPause) {
          commit("setPause");
        }
        commit("setMusicUrl", res.data[0]?.url);
        commit("setMusicTime", { curTime: 0, duration: state.audio.duration });
        dispatch("fetchMusicDetail", { ids: params.id });
        dispatch("monitorSong");  // 监控歌曲
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
      if (state.loopType === 0 || state.loopType === 2) {
        if (index === state.playerList.length - 1) {
          dispatch("playMusic", { id: state.playerList[0].id })
        } else {
          dispatch("playMusic", { id: state.playerList[++index].id })
        }
      } else if (state.loopType === 1) {
        let randomIndex = state.randomSongIndexArr.findIndex(i => i === index);
        if (randomIndex === state.randomSongIndexArr.length - 1) {
          dispatch("playMusic", { id: state.playerList[state.randomSongIndexArr[0]].id});
        } else {
          dispatch("playMusic", { id: state.playerList[state.randomSongIndexArr[++randomIndex]].id});
        }
      }
    },
    // 上一首歌曲
    prevSong({ dispatch, state, rootGetters }) {
      let index = rootGetters.currentMusicIndex;
      if (state.loopType === 0 || state.loopType === 2) {
        if (index === 0) {
          dispatch("playMusic", { id: state.playerList[rootGetters.playerListLen - 1].id })
        } else {
          dispatch("playMusic", { id: state.playerList[--index].id })
        }
      } else if (state.loopType === 1) {
        let randomIndex = state.randomSongIndexArr.findIndex(i => i === index);
        if (randomIndex === 0) {
          dispatch("playMusic", { id: state.playerList[state.randomSongIndexArr[state.randomSongIndexArr.length - 1]].id});
        } else {
          dispatch("playMusic", { id: state.playerList[state.randomSongIndexArr[--randomIndex]].id});
        }
      }
    },
    // 重新播放歌曲
    rePlaySong({ dispatch, state, rootGetters }) {
      let index = rootGetters.currentMusicIndex;
      dispatch("playMusic", { id: state.playerList[index].id});
    },
    // 随机播放歌曲
    randomPlaySong({ dispatch, state, rootGetters }) {
      dispatch("nextSong");
    },
    // 监控歌曲
    monitorSong({ commit, dispatch, state }) {
      // 时间改变
      state.audio.ontimeupdate = () => {
        commit("setMusicTime", { curTime: state.audio.currentTime, duration: state.audio.duration });
      };
      // 音频结束
      state.audio.onended = () => {
        commit("setEnded", state.audio.ended);
        dispatch("endPlayHandler");
      };
    },
    // 修改歌曲进度
    modifySongTime({ commit, state }, timeVal) {
      state.audio.currentTime = timeVal;
      state.currentTime = timeVal;
    },
    // 音频播放完毕
    endPlayHandler({ state, dispatch }) {
      switch (state.loopType) {
        case 0:
          dispatch("nextSong");
          break;
        case 1:
          dispatch("randomPlaySong");
          break;
        case 2:
          dispatch("rePlaySong");
          break;
        default:
          dispatch("nextSong");
          break;
      }
    },
    // 初始化随机播放索引
    initRandomSongIndexArr({ state, rootGetters }) {
      for (let i = 0; i < rootGetters.playerListLen; i++) {
        state.randomSongIndexArr[i] = i;
      }
      for (let i = rootGetters.playerListLen - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.randomSongIndexArr[i], state.randomSongIndexArr[j]] 
          = [state.randomSongIndexArr[j], state.randomSongIndexArr[i]];
      }
    }
  }
}

export default playerStore;