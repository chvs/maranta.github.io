<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import Feed from '~/components/Feed.vue';
import ScrollTopButton from '~/components/ScrollTopButton.vue';
import POSTS from '~/constants/posts';
import ArrowIcon from '~/assets/images/arrow.svg';

export default {
  validate({ params, redirect }) {
    if (!params.id) {
      return redirect({ name: 'index' });
    }

    const posts = POSTS.filter(item => item.slug);
    const existingPost = posts.find((item) => item.slug === params.id);

    if (!existingPost) {
      return redirect({ name: 'index' });
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
    };
  },

  components: {
    Profile,
    Nav,
    Feed,
    ScrollTopButton,
    ArrowIcon,
  },

  computed: {
    ...mapGetters(['themeIsDark']),

    data() {
      const posts = this.items.filter(item => item.slug);
      const post = posts.find(
        (item) => item.slug === this.$route.params.id,
      );

      return post;
    },

    iconClassNames() {
      return {
        [this.$style.icon]: true,
        [this.$style.icon_dark]: this.themeIsDark,
      }
    },
  },
};
</script>

<template>
  <div>
    <Profile :is-dark="themeIsDark" />

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

    <h1 :class="$style.title">{{ data.title }}</h1>

    <div v-html="data.content" :class="$style.content" />

    <footer :class="$style.footer">
      <NuxtLink to="/">
        <ArrowIcon :class="iconClassNames" />
        Go home
      </NuxtLink>

      <ScrollTopButton :isDark="themeIsDark" />
    </footer>
  </div>
</template>

<style lang="scss" module>
.list {
  color: $medium;
  display: flex;
  padding: 20px 0;
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
  margin: 0 0 20px;
}

.content {
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin: 0 0 20px;
  }

  p {
    text-indent: 37px;
    margin-bottom: 20px;
  }

  img {
    display: block;
    max-width: 100%;
    margin-bottom: 20px;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid $medium;
}

.icon {
  fill: $blue;
  margin: -2px 6px 0 0;
  display: inline-block;
  vertical-align: middle;

  &_dark {
    fill: $yellow;
  }
}
</style>