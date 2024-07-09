<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import POSTS from '~/constants/posts';

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
  },
}
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />
    <Nav :is-dark="themeIsDark" />

    <Feed :is-dark="themeIsDark" :posts="posts" />
  </div>
</template>

