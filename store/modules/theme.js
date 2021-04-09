
import Cookies from 'universal-cookie';
import * as types from '../mutation-types';
import getCookiesLifetime from '../../utils/getCookiesLifetime';
import IS_DARK_THEME_ENABLED from '~/constants/cookies';

const cookieLifeTime = getCookiesLifetime(1, 'months');

const INITIAL_STATE = () => ({
  isDark: false,
});

const getters = {
  themeIsDark: state => state.isDark,
};

const actions = {
  setTheme({ commit, state }) {
    const cookies = new Cookies();

    if (state.isDark) {
      cookies.remove(IS_DARK_THEME_ENABLED);
      commit(types.DARK_THEME_DISABLE);
    } else {
        cookies.set(IS_DARK_THEME_ENABLED, true, {
        maxAge: cookieLifeTime,
      });
      commit(types.DARK_THEME_ENABLE);
    }
  },
};

const mutations = {
  [types.DARK_THEME_DISABLE](state) {
    state.isDark = false;
  },

  [types.DARK_THEME_ENABLE](state) {
    state.isDark = true;
  },
}


export default {
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};