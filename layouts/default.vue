<script>
import { mapGetters } from 'vuex';
import PageLayout from '~/components/PageLayout.vue';

export default {
  computed: {
    ...mapGetters([
      'themeIsDark',
    ]),

    rootClass() {
      return {
        [this.$style.root]: true,
        [this.$style.root_dark]: this.themeIsDark,
      };
    },
  },

  components: {
    PageLayout,
  },
};
</script>

<template>
  <div :class="rootClass">
    <PageLayout>
      <nuxt slot="content" />
    </PageLayout>
  </div>
</template>

<style lang="stylus" module>
* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  height: 100%;
  min-width: 320px;
}

:global(#__nuxt),
:global(#__layout) {
  min-height: 100%;
  height: 100%;
  min-width: 320px;
}

body {
  background-color: #fff;
  overflow-anchor: none;
}

html {
  -webkit-font-smoothing: antialiased;
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

a,
button,
input,
select {
  -webkit-appearance: none;
}

input,
select {
  outline: none;
}

img {
  page-break-after: auto;
  page-break-before: auto;
  page-break-inside: avoid;
}

iframe {
  border: none;
}

@media print {
  body {
    padding-left: 1cm;
    padding-right: 1cm;
  }
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.root {
  background-color: #fff;
  color: #000;
  min-height: 100%;

  &_dark {
    background-color: #545151;
    color: #fff;
  }
}
</style>
