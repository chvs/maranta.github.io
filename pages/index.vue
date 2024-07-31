<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import POSTS from '~/constants/posts';
import ScrollTopButton from '~/components/ScrollTopButton.vue';

export default {
  data() {
    return {
      posts: POSTS,
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

    footerClassNames() {
      return {
        [this.$style.footer]: true,
        [this.$style.footer_dark]: this.themeIsDark,
      };
    },
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

    <Feed :is-dark="themeIsDark" :posts="posts" />

    <footer :class="footerClassNames">
      <ScrollTopButton v-show="isButtonVisible" :isDark="themeIsDark" />
    </footer>
  </div>
</template>

<style lang="scss" module>
.footer {
  display: flex;
  justify-content: end;
  padding: 15px 0 30px;
  border-top: 2px solid $mild;

  &_dark {
    border-color: $medium;
  }
}
</style>