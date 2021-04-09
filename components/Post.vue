<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    }
  }
};
</script>

<template>
  <div :class="$style.root">
    <ul :class="$style.list">
      <li
        v-for="(item, index) in data.tags"
        :key="index"
        :class="$style.tag"
      >{{item}}</li>
    </ul>
    <div v-if="data.image">
      <img
        :src="data.image"
        :class="$style.image"
        alt=""
      >
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

    <div v-if="data.text" :class="$style.text">
      {{ data.text }}
    </div>
  </div>
</template>

<style lang="stylus" module>
.root {
  padding-top: 15px;
  padding-bottom: 20px;
}
.list {
  margin-bottom: 15px;
}

.tag {
  display: inline-block;
  vertical-align: top;
  margin-right: 6px;

  &:before {
    content: '#';
    display: inline-block;
    vertical-align: top;
  }
}

.image {
  width: 100%;
  display: block;
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

.text {
  margin: 25px 0 0;
}
</style>