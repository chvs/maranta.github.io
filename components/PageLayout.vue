<script>
export default {
};
</script>

<template>
  <div :class="$style.root">
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" module>
.root {
  max-width: 760px;
  margin: 0 auto;
  padding: 20px 20px 0;

  @media (max-width: 375px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>