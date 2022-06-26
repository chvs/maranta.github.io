
import getCookiesLifetime from '../utils/getCookiesLifetime';
export const DARK_THEME_ENABLE = 'DARK_THEME_ENABLE';
export const DARK_THEME_DISABLE = 'DARK_THEME_DISABLE';

const cookieLifeTime = getCookiesLifetime(1, 'months');

const initialState = () => ({
  isDark: false,
});

export const state = initialState;

export const getters = {
  themeIsDark: state => state.isDark,
};

export const actions = {
  setThemeDark({ commit }) {
    commit(DARK_THEME_ENABLE);
  },

  setThemeLight({ commit }) {
    commit(DARK_THEME_DISABLE);
  },
};

export const mutations = {
  [DARK_THEME_DISABLE](state) {
    state.isDark = false;
  },

  [DARK_THEME_ENABLE](state) {
    state.isDark = true;
  },
}
