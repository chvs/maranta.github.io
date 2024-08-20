<script setup>
defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
});

const isThemeDark = useTheme();

const style = useCssModule();

const itemClassNames = computed(() => ({
  [style.item]: true,
  [style.item_dark]: isThemeDark.value,
}));
</script>

<template>
  <div
    v-for="item in posts"
    :key="item.id"
    :class="itemClassNames"
  >
    <Post :data="item" />
  </div>
</template>

<style lang="scss" module>
.item {
  & + & {
    border-top: 2px solid var(--mild);
  }

  &_dark {
    border-color: var(--medium);
  }
}
</style>