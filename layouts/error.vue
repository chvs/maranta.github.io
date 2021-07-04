<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';

export default {
  head() {
    return {
      title: '404',
    };
  },

  components: {
    Profile,
  },

  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
    };
  },

  computed: {
    ...mapGetters([
      'themeIsDark',
    ]),
  },

  methods: {
    navigateHome() {
      this.$router.push({
        name: 'index',
      });
    },
  },
};
</script>

<template>
  <div>
    <Profile subtitle="where I am?" />

    <div :class="$style.nav">
      # 404
    </div>
    <div :class="$style.content">
      <img v-if="!themeIsDark" :class="$style.image" src="/img/404.gif" alt="">
      <img v-else :class="$style.image" src="/img/404_dark.gif" alt="">

      <nuxt-link
        to="/"
        :class="$style.link"
      >
        Go home
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="stylus" module>
html,
body {
  min-height: 100%;
  height: 100%;
  min-width: 320px;
}

.nav {
  padding: 29px 0;
}

.content {
  text-align: center;
}

.image {
  display: block;
  width: 100%;
  margin: 0 auto;
}

.link {
  color: #00B3FF;
  font-style: 18px;
  line-height: 22px;

  &:hover {
    text-decoration: none;
  }
}
</style>
