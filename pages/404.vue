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

  computed: {
    ...mapGetters([
      'themeIsDark',
    ]),
  },
};
</script>

<template>
  <div>
    <Profile
      :is-error-page="true"
      subtitle="where am I?"
    />

    <div :class="$style.nav">
      # 404
    </div>
    <div :class="$style.content">
      <img v-if="!themeIsDark" :class="$style.image" src="/img/404.gif" alt="">
      <img v-else :class="$style.image" src="/img/404_dark.gif" alt="">

      <NuxtLink
        to="/"
        :class="$style.link"
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

.nav {
  padding: 20px 0;
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
  font-size: 18px;
  line-height: 22px;

  &:hover {
    text-decoration: none;
  }
}
</style>
