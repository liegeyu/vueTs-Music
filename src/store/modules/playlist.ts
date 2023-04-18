// 歌单 store
import { Module } from "vuex";

import { Song } from "@/types/player-types"
import { RootState, PlaylistStore } from "@/types/store-types";

const playlistStore: Module<PlaylistStore, RootState> = {
  namespaced: true,
  state: {
    songListId: 0,    // 歌单 id
    songlist: [] as Song[], // 歌单歌曲列表
  },
  mutations: {
    setSongListId(state, value: number) {
      state.songListId = value;
    },
    setSongList(state, value: Song[]) {
      state.songlist = value;
    }
  },
  actions: {
    
  }
}

export default playlistStore;