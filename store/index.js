import Vuex from 'vuex'

import home from './home.module'
import auth from './auth.module'
import article from './article.module'
import profile from './profile.module'

const createStore = () =>
  new Vuex.Store({
    modules: {
      home,
      auth,
      article,
      profile
    }
  })

export default createStore
