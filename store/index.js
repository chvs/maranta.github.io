import Cookies from 'universal-cookie';
import Vuex from 'vuex';
import modules from './modules';
import * as types from './mutation-types';
import IS_DARK_THEME_ENABLED from '~/constants/cookies';

const createStore = () => {
  const config = {
    modules,
    actions: {
      nuxtServerInit({ commit }, { req }) {
        const cookies = new Cookies(req.headers.cookie);

        if (cookies.get(IS_DARK_THEME_ENABLED)) {
          commit(types.DARK_THEME_ENABLE);
        } else {
          commit(types.DARK_THEME_DISABLE);
        }
      }
    }
  }

  return new Vuex.Store(config);
}

export default createStore;