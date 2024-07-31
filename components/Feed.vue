<script>
import Post from './Post.vue';

export default {
  components: {
    Post,
  },

  props: {
    isDark: {
      type: Boolean,
      default: false,
    },

    posts: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    itemClassNames() {
      return {
        [this.$style.item]: true,
        [this.$style.item_dark]: this.isDark,
      };
    },
  }
}
</script>

<template>
  <div>
    <div
      v-for="item in posts"
      :key="item.id"
      :class="itemClassNames"
    >
      <Post :data="item" />
    </div>
  </div>
</template>

<style lang="scss" module>
.item {
  border-bottom: 2px solid $mild;

  &:last-child {
    border-bottom: 0;
  }

  &_dark {
    border-color: $medium;
  }
}
</style>