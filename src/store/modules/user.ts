import { Module } from 'vuex';

import { RootState, UserState } from '@/types/store-types'
import { UserProfile, Account } from "@/types/user-types";
import { 
  visitorLogin, 
  getQRCodeLoginKey, 
  getQRCreateByKey, 
  getQRCodeState,
  getLoginStatus,
  getUserAccount,
  getLogOut
} from "@/service/modules/user";

const userStore: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: '',
    cookie: '',
    userId: 0,
    qrKey: '',
    qrUrl: '',
    qrImg: '',
    qrState: 0,
    showLogin: false,
    profile: {} as UserProfile,
    account: {} as Account,
  },
  mutations: {
    setCookie(state, value) {
      state.cookie = value;
      sessionStorage.setItem("cookie", value);
    },
    setQRKey(state, value) {
      state.qrKey = value;
    },
    setQRData(state, payload) {
      if (payload.qrurl && payload.qrimg) {
        state.qrImg = payload.qrimg;
        state.qrUrl = payload.qrurl;
      }
    },
    setQRstate(state, value) {
      state.qrState = value;
    },
    setUserId(state, payload) {
      state.userId = payload.userId;
    },
    setUserAccount(state, payload) {
      state.account = payload;
    },
    setUserProfile(state, payload) {
      state.profile = payload;
    },
    setShowLogin(state, value) {
      state.showLogin = value;
    }
  },
  actions: {
    async fetchVisitorLogin({ commit }) {
      const res = await visitorLogin();
      commit("setCookie", res.cookie);
      commit("setUserId", res);
    },
    // 二维码登录
    async fetchQRCodeLogin({ commit }) {
      const timestamp = new Date().getTime();
      // 二维码 key
      const qrKey = await getQRCodeLoginKey({ timestamp });
      const unikey = qrKey.data.unikey;
      commit("setQRKey", unikey);
      // 二维码url与img
      const qrData = await getQRCreateByKey({ key: unikey, qrimg: true })
      commit("setQRData", qrData.data);
      // 检查 qrcode 状态
      let check = setInterval(async () => {
        const timestampTwo = new Date().getTime();
        const qrState = await getQRCodeState({ key: unikey, timestamp: timestampTwo});
        switch(qrState.code) {
          case 800:
            clearInterval(check);
            commit("setQRstate", qrState.code);
            break;
          case 801:
            commit("setQRstate", qrState.code);
            break;
          case 802:
            commit("setQRstate", qrState.code);
            break;
          case 803:
            clearInterval(check);
            commit("setQRstate", qrState.code);
            commit("setCookie", qrState.cookie);
            break;
          default:
            clearInterval(check);
            console.log("----error----");
            break;
        }
      }, 3000);
    },
    // 退出登录
    async fetchLogOut({ commit }) {
      const res = await getLogOut({ cookie: sessionStorage.getItem("cookie") });
      if (res.code === 200) {
        commit("setCookie", "");
        commit("setUserId", 0);
        commit("setUserAccount", {});
        commit("setUserProfile", {});
        commit("setQRKey", "");
        commit("setQRData", {});
        commit("setQRstate", 0);
        commit("setShowLogin", false);
      }
    },
    // 登录状态
    async fetchLoginStatus({ dispatch }, params) {
      if (sessionStorage.getItem("cookie")) {
        const res = await getLoginStatus({ cookie: sessionStorage.getItem("cookie") });
        dispatch("fetchUserAccount")
      }
    },
    // 账号信息
    async fetchUserAccount({ commit }, params) {
      const res = await getUserAccount({ cookie: sessionStorage.getItem("cookie") });
      commit("setShowLogin", true);
      commit("setUserAccount", res.account);
      commit("setUserProfile", res.profile);
    }
  }
};

export default userStore;