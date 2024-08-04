<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import ScrollTopButton from '~/components/ScrollTopButton.vue';
import POSTS from '~/constants/posts';
import declOfNum from '~/utils/declOfNum';

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
      title: this.data.title?.replace(/&nbsp;|<br\s*\/?>/gi,' '),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.data.keywords,
        },
      ],
    };
  },

  data() {
    return {
      items: POSTS,
      isButtonVisible: false,
      removeListeners: null,
      links: []
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

    readingTime() {
      const time = this.data.time;

      return time ? `${time} ${declOfNum(time)}` : '';
    }
  },

  methods: {
    initListeners() {
      const visibilityHandler = this.visibilityHandler.bind(this);

      visibilityHandler();

      window.addEventListener('scroll', visibilityHandler);
      window.addEventListener('resize', visibilityHandler);

      this.links = this.$refs.content.getElementsByTagName('a');

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].addEventListener('click', this.navigate, false);
      }

      this.removeListeners = () => {
        window.removeEventListener('scroll', visibilityHandler);
        window.removeEventListener('resize', visibilityHandler);

        for (let i = 0; i < this.links.length; i++) {
          this.links[i].removeEventListener('click', this.navigate, false);
        }

        this.links = [];
      };
    },

    visibilityHandler() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      this.isButtonVisible = scrollTop > (window.innerHeight / 2);
    },


     navigate(event) {
      const href = event.target.getAttribute('href');
      const target = event.target.getAttribute('target');

      if (href && href[0] === '/' && target !== '_blank') {
        event.preventDefault();
        this.$router && this.$router.push(href);
      }
    },
  },
};
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />
    <Nav :is-dark="themeIsDark" />

    <ul v-if="data.tags.length" :class="$style.list">
      <li v-if="data.date" :class="$style.list__item">
        {{ data.date }}
      </li>

      <li
        v-for="(item, index) in data.tags"
        :key="index"
        :class="$style.list__item"
      >

       <NuxtLink
         :to="{ name: 'category', params: { category: item } }"
         :class="$style.list__link"
        >
          #{{ item }}
        </NuxtLink>
      </li>

      <li v-if="readingTime" :class="$style.list__item">
        читать {{ readingTime }}
      </li>
    </ul>

    <h1 v-if="data.title" :class="$style.title" v-html="data.title" />

    <div ref="content" v-html="data.content" :class="contentClassNames" />

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
  @include ui-bull-list;
  margin-top: 20px;
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
    text-indent: 19px;
    margin-bottom: 15px;
  }

  img {
    display: block;
    max-width: 100%;
    margin-bottom: 15px;
  }

  ul, ul > li {
    list-style: disc;
  }

  ul {
    padding-left: 19px;
    margin-bottom: 15px;
  }

  ol {
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

:global(p.single) {
  margin-bottom: 0;
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
  padding: 15px 0 30px;
  border-top: 2px solid $mild;

  &_dark {
    border-color: $medium;
  }
}
</style>