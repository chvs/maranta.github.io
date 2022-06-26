<script>
import { mapGetters } from 'vuex';
import PageLayout from '~/components/PageLayout.vue';
import IS_DARK_THEME_ENABLED from '~/constants/cookies';

export default {
  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

    rootClass() {
      return {
        [this.$style.root]: true,
        [this.$style.root_dark]: this.themeIsDark || this.$cookies.get(IS_DARK_THEME_ENABLED),
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

<style lang="scss" module>
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
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  line-height: 24px;
  min-width: 320px;
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

.root {
  background-color: #fff;
  color: $dark;
  min-height: 100%;

  a {
    color: $blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &_dark {
    background-color: $dark;
    color: #fff;

    a {
      color: $yellow;
    }
  }
}
</style>
