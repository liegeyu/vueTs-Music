import { Module } from 'vuex';

import { UserProfile, RootState, UserState } from '@/types/store-types'

const userStore: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: '',
    cookie: '',
    showLogin: false,
    profile: {} as UserProfile
  }
};

export default userStore;