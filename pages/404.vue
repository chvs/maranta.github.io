<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';

export default {
  head() {
    return {
      title: '404',
    };
  },

  components: {
    Profile,
    Nav,
  },

  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

    linkClassNames() {
      return {
        [this.$style.link]: true,
        [this.$style.link_dark]: this.themeIsDark,
      }
    },
  },
};
</script>

<template>
  <div>
    <Profile
      :is-error-page="true"
      :is-dark="themeIsDark"
    />

    <Nav :is-dark="themeIsDark" />

    <div :class="$style.text">
      # 404
    </div>

    <div :class="$style.content">
      <img :class="$style.image" src="/img/404.gif" alt="">

      <NuxtLink
        to="/"
        :class="linkClassNames"
      >
        Go home
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" module>
html,
body {
  min-height: 100%;
  height: 100%;
  min-width: 320px;
}

.text {
  padding-top: 20px;
  color: $medium;
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
  color: $blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &_dark {
    color: $yellow;
  }
}
</style>
