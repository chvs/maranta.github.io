<script setup>
import declOfNum from '~/utils/declOfNum';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const style = useCssModule();

const textClassNames = ((isIndented) => ({
  [style.indented]: isIndented,
}));

const readingTime = computed(() => {
  const time = props.data.time;

  return time ? `${time} ${declOfNum(time)}` : '';
});

const isAnimated = props.data.image && props.data.image.includes('webp');

const postLink = props.data.slug ? `post/${props.data.slug}` : `/${props.data.url}`;

const tagDisplayNames = {
  'work': 'статьи',
  'photo': 'фото',
  'about': 'эбаут'
};
</script>

<template>
  <div :class="$style.root">
    <ul v-if="data.tags.length" :class="$style.list">
      <li v-if="data.date" :class="$style.list__item">
        {{ data.date }}
      </li>

      <li v-for="(item, index) in data.tags" :key="index" :class="$style.list__item">
        <NuxtLink :to="item" :class="$style.list__link">
          #{{ tagDisplayNames[item] }}
        </NuxtLink>
      </li>

      <li v-if="readingTime" :class="$style.list__item">
        читать {{ readingTime }}
      </li>
    </ul>

    <h1 v-if="data.title" :class="$style.title" v-html="data.title" />

    <NuxtImg v-if="isAnimated" :src="data.image" :class="$style.image" loading="lazy" height="320" width="720"
      :modifiers="{ animated: true }" />

    <NuxtImg v-else-if="data.image" :src="data.image" :class="$style.image" loading="lazy" height="720" width="720" />

    <div v-else-if="data.video">
      <div :class="$style.videoWrap">
        <iframe :src="data.video" :class="$style.video" title="">
        </iframe>
      </div>
    </div>

    <div v-else-if="data.music">
      <div :class="$style.videoWrap">
        <iframe :src="data.music" :class="$style.video" title="">
        </iframe>
      </div>
    </div>

    <p v-if="data.text && data.readMore" v-html="data.text" :class="textClassNames(data.redStroke)" />

    <div v-else :class="$style.content" v-html="data.text" />

    <div v-if="data.readMore" :class="$style.link">
      <NuxtLink :to="postLink">read more...</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  padding: 20px 0;
}

.title {
  margin-bottom: 15px;
}

.list {
  @include ui-bull-list;
}

.image {
  width: 100%;
  height: auto;
  display: block;
  margin: 11px 0 15px;
}

.videoWrap {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.indented {
  text-indent: 19px;
}

.link {
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
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
</style>