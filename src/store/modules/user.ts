import { Module } from 'vuex';

import { RootState, UserState } from '@/types/store-types'
import { visitorLogin } from "@/service/modules/user";

const userStore: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: '',
    cookie: '',
    userId: 0,
    showLogin: false,
    profile: {} as UserProfile
  },
  mutations: {
    setCookie(state, value) {
      state.cookie = value;
      let cookies = value.split(";;");
      console.log(cookies);
      for (let i = 0; i < cookies.length; i++) {
        document.cookie = cookies[i];
      }      
    },
    setUserInfo(state, payload) {
      state.userId = payload.userId;
    }
  },
  actions: {
    async fetchVisitorLogin({ commit }) {
      const res = await visitorLogin();
      commit("setCookie", res.cookie);
      commit("setUserInfo", res);
    }
  }
};

export default userStore;