import { Module } from "vuex";

import { RootState, PlayerState } from "@/types/store-types"
import { Music } from "@/types/player-types"

const playerStore: Module<PlayerState, RootState> = {
  namespaced: true,
  state: {
    music: {} as Music,
    playerList: [] as Music[],
  },
  mutations: {

  },
  actions: {
    
  }
}

export default playerStore;