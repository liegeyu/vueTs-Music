import { createStore, Store } from 'vuex';

import { RootState } from '@/types/storeInterface'
import user from './modules/user'

const store: Store<RootState> = createStore ({
  modules: {
    user
  }
})

export default store;