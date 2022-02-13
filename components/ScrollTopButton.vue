<script>
import ArrowIcon from '~/assets/images/arrow.svg';

export default {
  components: {
    ArrowIcon,
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
    <ArrowIcon :class="$style.icon" />
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

    .icon {
      fill: $yellow;
    }
  }
}

.icon {
  fill: $blue;
  margin: -1px -2px 0 5px;
  display: inline-block;
  vertical-align: middle;
  transform: rotate(90deg);
}
</style>