import { createStore, Store } from 'vuex';

import getters from './getters';
import { RootState } from '@/types/store-types';
import user from './modules/user';
import layout from './modules/layout';
import search from './modules/search';
import player from './modules/player';

const store: Store<RootState> = createStore ({
  modules: {
    user,
    layout,
    search,
    player,
  },
  getters
})

export default store;