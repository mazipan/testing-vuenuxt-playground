/* eslint-env jest */
import initStore from '../helpers/init-store'
import initRouter from '../helpers/init-router'

import Component from '../../pages/index.vue'

const localVue = createLocalVue();
const store = initStore.initStore(localVue, {
  state: {
    isAuthenticated: true,
    tags: []
  },
  mutations: {},
  actions: {
    fetchTags: () =>  new Promise((resolve) => {
      resolve()
    }),
  },
  getters: {
    isAuthenticated(state){
      return state.isAuthenticated
    },
    tags(state) {
      return state.tags
    }
  }
})
const router = initRouter.initRouter(localVue)

describe('page /', () => {
  test('success mounting components', () => {
    const wrapper = shallowMount(Component, {
      store,
      router,
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
