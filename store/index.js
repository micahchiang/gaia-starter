import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cities: {}
    },
    actions,
    mutations
  });
};

export default createStore;
