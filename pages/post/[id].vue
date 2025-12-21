<script setup>
import POSTS from '~/constants/posts';
import declOfNum from '~/utils/declOfNum';


definePageMeta({
  validate: ({ params }) => {
    const posts = POSTS.filter(item => item.slug);
    const existingPost = posts.find((item) => item.slug === params.id);

    if (!existingPost) {
      return navigateTo('/404');
    }

    return true;
  }
});

const isThemeDark = useTheme();

const style = useCssModule();

const contentClassNames = computed(() => ({
  [style.content]: true,
  [style.content_dark]: isThemeDark.value,
}));

const footerClassNames = computed(() => ({
  [style.footer]: true,
  [style.footer_dark]: isThemeDark.value,
}));

const route = useRoute();

const data = computed(() => {
  const posts = POSTS.filter(item => item.slug);

  return posts.find((item) => item.slug === route.params.id);
});

useSeoMeta({
  title: data.value?.title?.replace(/&nbsp;|<br\s*\/?>/gi, ' '),
  description: data.value?.description,
  keywords: data.value?.keywords,
});

const readingTime = computed(() => {
  const time = data.value.time;

  return time ? `${time} ${declOfNum(time)}` : '';
});

const tagDisplayNames = {
  'work': 'статьи',
  'photo': 'фото',
  'about': 'эбаут'
};
</script>

<template>
  <div :class="$style.root">
    <Profile />

    <ul v-if="data.tags.length" :class="$style.list">
      <li v-if="data.date" :class="$style.list__item">
        {{ data.date }}
      </li>

      <li v-for="(item, index) in data.tags" :key="index" :class="$style.list__item">

        <NuxtLink :to="{ name: 'category', params: { category: item } }" :class="$style.list__link">
          #{{ tagDisplayNames[item] }}
        </NuxtLink>
      </li>

      <li v-if="readingTime" :class="$style.list__item">
        читать {{ readingTime }}
      </li>
    </ul>

    <h1 v-if="data.title" :class="$style.title" v-html="data.title" />

    <div ref="content" v-html="data.content" :class="contentClassNames" />
  </div>

  <footer :class="footerClassNames">
    <NuxtLink to="/">
      Домой
    </NuxtLink>

    <ScrollTopButton />
  </footer>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
}

.list {
  @include ui-bull-list;
  margin-top: 20px;
}

.title {
  margin: 0 0 15px;
}

.content {
  h2 {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    margin: 0 0 15px;
  }

  p {
    text-indent: 19px;
    margin-bottom: 15px;
  }

  img {
    display: block;
    max-width: 100%;
    margin-bottom: 15px;
  }

  ul,
  ul>li {
    list-style: disc;
  }

  ul {
    padding-left: 19px;
    margin-bottom: 15px;
  }

  ol {
    padding-left: 19px;
    margin-bottom: 15px;
  }

  figure {
    margin-bottom: 30px;
  }

  svg {
    width: 20px;
    height: 16px;
    fill: var(--medium);
    display: inline-block;
    vertical-align: top;
    margin: 4px 5px 0 0;
  }

  &_dark {

    :global(.quote) {
      background-color: var(--semidark);
      color: var(--light);
    }
  }
}

:global(p.single) {
  margin-bottom: 0;
}

:global(.quote) {
  background-color: var(--mild);
  border-radius: 3px;
  padding: 20px;
  font-weight: 500;
  color: var(--dark);
  text-indent: 0 !important;
  text-align: center;
}

:global(.bold) {
  font-weight: 500;
}

:global(.border-top) {
  border-top: 2px solid var(--mild);
  padding-top: 15px;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 2px solid var(--mild);
  margin-top: auto;

  &_dark {
    border-color: var(--medium);
  }
}
</style>