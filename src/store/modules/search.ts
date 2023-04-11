import { Module } from 'vuex'

import { RootState, SearchState } from '@/types/store-types';
import { getSearchHotSuggest } from "@/service/modules/search";
const searchStore: Module<SearchState, RootState> = {
  namespaced: true,
  state: {
    searchValue: '',
    suggestData: {},
  },
  mutations: {
    setSearchValue(state, value: string) {
      state.searchValue = value;
    },
    setSuggestData(state, data) {
      state.suggestData = data;
    }
  },
  actions: {
    async fetchSearchHotSuggest({ commit }, value) {
      const res = await getSearchHotSuggest({ keywords: value })
      commit("setSuggestData", res.result);
    }
  }
}

export default searchStore;