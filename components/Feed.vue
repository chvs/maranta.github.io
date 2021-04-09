<script>
import Post from './Post.vue';
import createPosts from '~/constants/posts';

export default {
  components: {
    Post,
  },

  data() {
    return {
      items: createPosts,
    }
  },

  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    rootClass() {
      return {
        [this.$style.root]: true,
        [this.$style.root_dark]: this.isDark,
      };
    },
  },
}
</script>

<template>
  <div :class="rootClass">
    <div
      v-for="item in items"
      :key="item.id"
      :class="$style.item"
    >
      <Post
        :data="item"
      />
    </div>
  </div>
</template>

<style lang="stylus" module>
.root {
  padding-bottom: 60px;

  &_dark {
    .item {
      border-bottom-color: #7C7C7C;
    }
  }
}

.item {
  border-bottom: 1px solid #E4E4E4;

  &:last-child {
    border-bottom: 0;
  }
}
</style>