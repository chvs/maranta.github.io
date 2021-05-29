<script>
import { mapGetters } from 'vuex';
import Icon from '~/static/svg/switch.svg';
import Logo from '~/static/svg/logo_404.svg';
import SwitchBtn from '~/components/Switch.vue';

export default {
  head() {
    return {
      title: '404',
    };
  },

  components: {
    Icon,
    Logo,
    SwitchBtn,
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
    <div :class="$style.header">
      <div :class="$style.logo">
        <Logo />
      </div>
      <div :class="$style.descr">
        <div :class="$style.heading">
          <h1 :class="$style.title">maranta</h1>
          <div :class="$style.where">
            where I am?
          </div>
        </div>
      </div>
      <SwitchBtn />
    </div>

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

.header {
  display: flex;
  border-bottom: 1px solid #E4E4E4;
  padding-bottom: 14px;

  &_dark {
    background-color: red;
  }
}

.title {
  margin: 0 20px 8px 0;
  font-size: 24px;
}

.nav {
  padding: 29px 0;
}

.logo {
  width: 50px;
  height: 50px;
  margin: 4px 19px 0 0;
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
