<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import POSTS from '~/constants/posts';
import TAGS from '~/constants/tags';
import IS_DARK_THEME_ENABLED from '~/constants/cookies';

export default {
  validate({ params, redirect }) {
  // проверка наличия и корректности категории и id
  const existingCategory = TAGS.find((link) => link === params.category);

  if (existingCategory) {
    return true;
  }

  return redirect({ name: '404' });
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

    linkClassNames() {
      return {
        [this.$style.link]: true,
        [this.$style.link_dark]: this.themeIsDark || this.$cookies.get(IS_DARK_THEME_ENABLED),
      }
    },

    posts() {
      const currentTag = this.$route.params.category;

      return POSTS.filter(item => item.tags.includes(currentTag));
    }
  }
}
</script>

<template>
  <div>
    <Profile :is-dark="isDark" />
    <Nav :is-dark="isDark" />
    <Feed
      v-if="posts.length"
      :posts="posts"
      :is-dark="isDark"
    />

    <div v-else>
      <p :class="$style.text">
        Coming soon
      </p>

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
.text {
  padding: 15px 0;
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