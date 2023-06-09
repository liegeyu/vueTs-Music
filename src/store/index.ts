import { createStore, Store } from 'vuex';

import getters from './getters';
import { RootState } from '@/types/store-types';
import user from './modules/user';
import layout from './modules/layout';
import search from './modules/search';
import player from './modules/player';
import playlist from './modules/playlist';
import videodetail from './modules/videodetail';
import video from './modules/video';
import music from './modules/music';

const store: Store<RootState> = createStore ({
  modules: {
    user,
    layout,
    search,
    player,
    playlist,
    music,
    video,
    videodetail,
  },
  getters
})

export default store;