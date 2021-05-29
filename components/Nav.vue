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
    #demoreel #illustration #2d #3d #animation #music #ui/ux #gif #photo #video #text
    <span :class="$style.active">#all</span>
  </div>
</template>

<style lang="stylus" module>
.root {
  border-bottom: 1px solid #E4E4E4;
  padding-top: 14px;
  padding-bottom: 18px;

  &_dark {
    border-bottom-color: #7C7C7C;
  }
}

.active {
  color: #FF6F6F;
}
</style>