import IS_DARK_THEME_ENABLED from '~/constants/cookies';

export default ({ app, store }) => {
  const isThemeDark = app.$cookies.get(IS_DARK_THEME_ENABLED);

  if (isThemeDark) {
    store.dispatch('theme/setThemeDark');
  }
};
