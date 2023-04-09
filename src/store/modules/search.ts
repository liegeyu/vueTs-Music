import { Module } from 'vuex'

import { RootState, SearchState } from '@/types/store-types';
const searchStore: Module<SearchState, RootState> = {
  namespaced: true,
  state: {
  },
  mutations: {

  },
  actions: {

  }
}

export default searchStore;