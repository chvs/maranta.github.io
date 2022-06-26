<script>
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
      <li v-if="data.date" :class="$style.date">
        {{ data.date }}
      </li>

      <li v-for="(item, index) in data.tags" :key="index" :class="$style.tag">
        {{ item }}
      </li>
    </ul>

    <h1 v-if="data.title" :class="$style.title">
      {{ data.title }}
    </h1>

    <div v-if="data.image">
      <img :src="data.image" :class="$style.image" alt="" />
    </div>

    <div v-else-if="data.video">
      <div :class="$style.videoWrap">
        <iframe
          :src="data.video"
          :class="$style.video"
          frameborder="0"
        >
        </iframe>
      </div>
    </div>

    <div v-else-if="data.music">
      <div :class="$style.videoWrap">
        <iframe
          :src="data.music"
          :class="$style.video"
          scrolling="no"
          frameborder="no"
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
  padding: 15px 0;
}

.title {
  margin-bottom: 15px;
}

.list {
  margin-bottom: 15px;
  color: $medium;
  display: flex;
}

.tag {
  display: flex;
  margin-right: 6px;

  &:before {
    content: "#";
  }
}

.date {
  display: flex;
  align-items: center;

  &::after {
    content: "";
    height: 4px;
    width: 4px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: $medium;
  }
}

.image {
  width: 100%;
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
  text-indent: 37px;
}

.link {
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
}
</style>