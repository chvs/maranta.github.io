<script>
import Post from './Post.vue';
import POSTS from '~/constants/posts';

export default {
  components: {
    Post,
  },

  data() {
    return {
      items: POSTS,
    }
  },

  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div :class="$style.root">
    <div
      v-for="item in items"
      :key="item.id"
      :class="$style.item"
    >
      <Post :data="item" />
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  padding-bottom: 60px;
}

.item {
  border-bottom: 1px solid $medium;

  &:last-child {
    border-bottom: 0;
  }
}
</style>