import Vuex from 'vuex'

export default {
  initStore: (localVue, { state, mutations, actions, getters }) => {
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      mutations,
      actions,
      getters
    });

    return store;
  },
};
