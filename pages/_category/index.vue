<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import POSTS from '~/constants/posts';
import TAGS from '~/constants/tags';
import ScrollTopButton from '~/components/ScrollTopButton.vue';

export default {
  validate({ params, redirect }) {
   // проверка наличия и корректности категории и id
    const existingCategory = TAGS.find((link) => link === params.category);

    if (existingCategory) {
      return true;
    }

    return redirect({ name: '404' });
  },

  data() {
    return {
      items: POSTS,
      isButtonVisible: false,
      removeListeners: null,
    };
  },

  components: {
    Profile,
    Nav,
    Feed,
    ScrollTopButton,
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

    footerClassNames() {
      return {
        [this.$style.footer]: true,
        [this.$style.footer_dark]: this.themeIsDark,
      };
    },

    posts() {
      const currentTag = this.$route.params.category;

      return POSTS.filter(item => item.tags.includes(currentTag));
    }
  },

  mounted() {
    this.initListeners();
  },

  beforeDestroy() {
    if (this.removeListeners) {
      this.removeListeners();
    }
  },

  methods: {
    initListeners() {
      const visibilityHandler = this.visibilityHandler.bind(this);

      visibilityHandler();

      window.addEventListener('scroll', visibilityHandler);
      window.addEventListener('resize', visibilityHandler);

      this.removeListeners = () => {
        window.removeEventListener('scroll', visibilityHandler);
        window.removeEventListener('resize', visibilityHandler);
      };
    },

    visibilityHandler() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      this.isButtonVisible = scrollTop > (window.innerHeight / 2);
    },
  },
}
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />
    <Nav :is-dark="themeIsDark" />
    <Feed
      v-if="posts.length"
      :posts="posts"
      :is-dark="themeIsDark"
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

    <footer :class="footerClassNames">
      <NuxtLink to="/">
        Go home
      </NuxtLink>

      <ScrollTopButton v-show="isButtonVisible" :isDark="themeIsDark" />
    </footer>
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

.footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 2px solid $mild;

  &_dark {
    border-color: $medium;
  }
}
</style>