<script>
import { mapGetters } from 'vuex';
import PageLayout from '~/components/PageLayout.vue';

export default {
  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

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

    <div :class="$style.footer">
      Использовать материалы сайта можно только со&nbsp;ссылкой на&nbsp;источник. Спасибо&nbsp;🙂
    </div>
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

ul, ul > li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ol {
  list-style-type: decimal;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }
}

p,
figure {
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

b {
  font-weight: 500;
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
  display: flex;
  flex-direction: column;

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

.footer {
  color: $medium;
  text-align: center;
  padding: 0 20px 30px;
  margin-top: auto;
}
</style>
