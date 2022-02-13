<script>
export default {
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
};
</script>

<template>
  <div :class="rootClass">
    <span :class="$style.active">#all</span>
    #ui/ux #photo #music #2d #3d #animation
  </div>
</template>

<style lang="scss" module>
.root {
  border-bottom: 1px solid $medium;
  padding: 20px 0;

  &_dark {
    .active {
      color: $yellow;
    }
  }
}

.active {
  color: $blue;
}
</style>