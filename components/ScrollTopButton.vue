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

  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
};
</script>

<template>
  <button
    :class="rootClass"
    aria-label="Вверх"
    @click="scrollToTop"
  >
    Up
  </button>
</template>

<style lang="scss" module>
.root {
  border: none;
  padding: 0;
  background-color: transparent;
  color: $blue;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;

  &_dark {
    color: $yellow;
  }
}
</style>