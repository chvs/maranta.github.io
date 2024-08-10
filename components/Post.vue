<script>
import declOfNum from '~/utils/declOfNum';

export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    postLink() {
      return this.data.slug ? `post/${this.data.slug}` : `post/${this.data.id}`;
    },

    readingTime() {
      const time = this.data.time;

      return time ? `${time} ${declOfNum(time)}` : '';
    },

    imageHeight() {
      return this.data.image.includes('gif') ? 320 : 720;
    },
  },

  methods: {
    textClassNames(isIndented) {
      return {
        [this.$style.indented]: isIndented,
      };
    },
  },
};
</script>

<template>
  <div :class="$style.root">
    <ul v-if="data.tags.length" :class="$style.list">
      <li v-if="data.date" :class="$style.list__item">
        {{ data.date }}
      </li>

      <li
        v-for="(item, index) in data.tags"
        :key="index"
        :class="$style.list__item"
      >
        <template v-if="item === 'about'">
          #{{ item }}
        </template>

        <NuxtLink v-else :to="item" :class="$style.list__link">
          #{{ item }}
        </NuxtLink>
      </li>

      <li v-if="readingTime" :class="$style.list__item">
        читать {{ readingTime }}
      </li>
    </ul>

    <h1 v-if="data.title" :class="$style.title" v-html="data.title" />

    <img
      v-if="data.image"
      :src="data.image"
      :class="$style.image"
      :height="imageHeight"
      width="720"
      alt=""
    />

    <div v-else-if="data.video">
      <div :class="$style.videoWrap">
        <iframe
          :src="data.video"
          :class="$style.video"
          title=""
        >
        </iframe>
      </div>
    </div>

    <div v-else-if="data.music">
      <div :class="$style.videoWrap">
        <iframe
          :src="data.music"
          :class="$style.video"
          title=""
        >
        </iframe>
      </div>
    </div>

    <p
      v-if="data.text"
      v-html="data.text"
      :class="textClassNames(data.redStroke)"
    />

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
</style>