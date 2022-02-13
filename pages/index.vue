<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';

  export default {
    components: {
      Profile,
      Nav,
      Feed,
    },

    computed: {
      ...mapGetters([
        'themeIsDark',
      ]),
    }
  }
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />
    <Nav :is-dark="themeIsDark" />
    <Feed :is-dark="themeIsDark" />
  </div>
</template>

<style lang="scss" module>
</style>