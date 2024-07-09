<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import ScrollTopButton from '~/components/ScrollTopButton.vue';
import POSTS from '~/constants/posts';

export default {
  validate({ params, redirect }) {
    if (!params.id) {
      return redirect({ name: '404' });
    }

    const posts = POSTS.filter(item => item.slug);
    const existingPost = posts.find((item) => item.slug === params.id);

    if (!existingPost) {
      return redirect({ name: '404' });
    }

    return true;
  },

  head() {
    return {
      title: this.data.title,
    };
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

  mounted() {
    this.initListeners();
  },

  beforeDestroy() {
    if (this.removeListeners) {
      this.removeListeners();
    }
  },

  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

    contentClassNames() {
      return {
        [this.$style.content]: true,
        [this.$style.content_dark]: this.themeIsDark,
      };
    },

    footerClassNames() {
      return {
        [this.$style.footer]: true,
        [this.$style.footer_dark]: this.themeIsDark,
      };
    },

    data() {
      const posts = this.items.filter(item => item.slug);
      return posts.find((item) => item.slug === this.$route.params.id);
    },
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
};
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />
    <Nav :is-dark="themeIsDark" />

    <ul v-if="data.tags.length" :class="$style.list">
      <li v-if="data.date" :class="$style.date">
        {{ data.date }}
      </li>

      <li
        v-for="(item, index) in data.tags"
        :key="index"
        :class="$style.tag"
      >
        {{ item }}
      </li>
    </ul>

    <h1 v-if="data.title" :class="$style.title" v-html="data.title" />

    <div v-html="data.content" :class="contentClassNames" />

    <footer :class="footerClassNames">
      <NuxtLink to="/">
        Go home
      </NuxtLink>

      <ScrollTopButton v-show="isButtonVisible" :isDark="themeIsDark" />
    </footer>
  </div>
</template>

<style lang="scss" module>
.list {
  color: $medium;
  display: flex;
  padding: 15px 0;
}

.tag {
  display: flex;
  margin-right: 6px;

  &:before {
    content: "#";
  }
}

.date {
  display: flex;
  align-items: center;

  &::after {
    content: "";
    height: 4px;
    width: 4px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: $medium;
  }
}

.title {
  margin: 0 0 15px;
}

.content {
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin: 0 0 15px;
  }

  p {
    text-indent: 37px;
    margin-bottom: 15px;
  }

  img {
    display: block;
    max-width: 100%;
    margin-bottom: 15px;
  }

  ul, li {
    list-style: circle;
  }

  ul {
    padding-left: 19px;
    margin-bottom: 15px;
  }

  figure {
    margin-bottom: 30px;
  }

  svg {
    width: 20px;
    height: 16px;
    fill: $medium;
    display: inline-block;
    vertical-align: top;
    margin: 4px 5px 0 0;
  }

  &_dark {

    :global(.quote) {
      background-color: $semidark;
      color: $light;
    }
  }
}

:global(.quote) {
  background-color: $mild;
  border-radius: 3px;
  padding: 20px;
  font-weight: 500;
  color: $dark;
  text-indent: 0!important;
  text-align: center;
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