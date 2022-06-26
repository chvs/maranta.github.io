<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import POSTS from '~/constants/posts';
import IS_DARK_THEME_ENABLED from '~/constants/cookies';

export default {
  data() {
    return {
      posts: POSTS,
    };
  },

  components: {
    Profile,
    Nav,
    Feed,
  },

  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

    isDark() {
      return this.themeIsDark || this.$cookies.get(IS_DARK_THEME_ENABLED);
    },
  },
}
</script>

<template>
  <div>
    <Profile :is-dark="isDark" />
    <Nav :is-dark="isDark" />
    <Feed :is-dark="isDark" :posts="posts" />
  </div>
</template>

<style lang="scss" module>
</style>