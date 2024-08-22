<script setup>
import POSTS from '~/constants/posts';
import TAGS from '~/constants/tags';


const route = useRoute();

const currentTag = route.params.category;

const filteredPosts = computed(() => {
  return POSTS.filter(item => item.tags.includes(currentTag));
});

const isThemeDark = useTheme();

const style = useCssModule();

const linkClassNames = computed(() => ({
  [style.link]: true,
  [style.link_dark]: isThemeDark.value,
}));

const footerClassNames = computed(() => ({
  [style.footer]: true,
  [style.footer_dark]: isThemeDark.value,
}));

const isButtonVisible = ref(true);

definePageMeta({
  validate: ({ params }) => {
    const existingCategory = TAGS.find((link) => link === params.category);

    if (!existingCategory) {
      return navigateTo('/404');
    }

    return true;
  }
});
</script>

<template>
  <div :class="$style.root">
    <Profile />
    <Nav />
    <Feed
      v-if="filteredPosts.length"
      :posts="filteredPosts"
    />

    <div v-else >
      <p :class="$style.text">
        Coming soon
      </p>

      <NuxtLink
        to="/"
        :class="linkClassNames"
      >
        Go home
      </NuxtLink>
    </div>
  </div>

  <footer v-if="filteredPosts.length" :class="footerClassNames">
    <NuxtLink to="/">
      Go home
    </NuxtLink>

    <ScrollTopButton v-show="isButtonVisible" />
  </footer>
</template>

<style lang="scss" module>
.root {
  flex: 1 0 auto;
}

.text {
  padding: 15px 0;
}

.link {
  color: var(--blue);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &_dark {
    color: var(--yellow);
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 2px solid var(--mild);

  &_dark {
    border-color: var(--medium);
  }
}
</style>