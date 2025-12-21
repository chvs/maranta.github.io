<script setup>
import POSTS from '~/constants/posts';


const isThemeDark = useTheme();

const style = useCssModule();

const footerClassNames = computed(() => ({
  [style.footer]: true,
  [style.footer_dark]: isThemeDark.value,
}));
</script>

<template>
  <div :class="$style.root">
    <Profile />

    <Feed :posts="POSTS" />
  </div>

  <footer :class="footerClassNames">
    <ScrollTopButton />
  </footer>
</template>

<style lang="scss" module>
.root {
  flex: 1 0 auto;
}

.footer {
  display: flex;
  justify-content: end;
  padding: 15px 0;
  border-top: 2px solid var(--mild);

  &_dark {
    border-color: var(--medium);
  }
}
</style>