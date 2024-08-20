<script setup>
const isThemeDark = useTheme();

const style = useCssModule();

const rootClassNames = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));

const scrollToTop = () => {
  window.scrollTo(0,0);
}
</script>

<template>
  <button
    :class="rootClassNames"
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
  color: var(--blue);
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;

  &_dark {
    color: var(--yellow);
  }
}
</style>