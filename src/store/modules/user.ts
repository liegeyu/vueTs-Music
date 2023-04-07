import { Module } from 'vuex';

import { UserProfile, RootState } from '@/types/storeInterface'

export interface UserState {
  token: string;
  cookie: string;
  showLogin: boolean;
  profile: UserProfile;
}

const userStore: Module<UserState, RootState> = {
  state: {
    token: '',
    cookie: '',
    showLogin: false,
    profile: {} as UserProfile
  }
};

export default userStore;