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

    titleClassNames() {
      return {
        [this.$style.title]: true,
        [this.$style.title_dark]: this.themeIsDark,
      };
    },
  },
}
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />
    <Nav v-if="false" :is-dark="themeIsDark" />

    <h1 :class="titleClassNames">
      Мы&nbsp;делаем здесь amazing customer service&nbsp;&copy;
    </h1>

    <Feed :is-dark="themeIsDark" :posts="posts" />
  </div>
</template>

<style lang="scss" module>
.title {
  border-bottom: 2px solid $mild;
  padding: 15px 0;
  margin: 0;

  &_dark {
    border-color: $medium;
  }
}
</style>
