<script setup>
import POSTS from '~/constants/posts';


const isThemeDark = useTheme();

const style = useCssModule();

const footerClassNames = computed(() => ({
  [style.footer]: true,
  [style.footer_dark]: isThemeDark.value,
}));

const isButtonVisible = ref(true);
</script>

<template>
  <div>
    <Profile />
    <Nav />

    <Feed :posts="POSTS" />

    <footer :class="footerClassNames">
      <ScrollTopButton v-show="isButtonVisible" />
    </footer>
  </div>
</template>

<style lang="scss" module>
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