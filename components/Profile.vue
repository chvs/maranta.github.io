<script setup>
import Logo from '~/assets/images/logo.svg?component';
import LogoDark from '~/assets/images/logo_dark.svg?component';
import Logo404 from '~/assets/images/logo_404.svg?component';
import Logo404Dark from '~/assets/images/logo_404_dark.svg?component';
import TAGS from '~/constants/tags';


const props = defineProps({
  isErrorPage: {
    type: Boolean,
    default: false,
  },
});

const isThemeDark = useTheme();

const style = useCssModule();

const rootClassNames = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));

const route = useRoute();

const linkClassNames = ((item) => ({
  [style.link]: true,
  [style.link_active]: item === 'about' && route.name === 'cv',
}));

const tagDisplayNames = {
  'work': 'статьи',
  'photo': 'фото',
  'about': 'эбаут'
};
</script>

<template>
  <div :class="rootClassNames">
    <NuxtLink v-if="isErrorPage" :class="$style.logo" to="/" aria-label="Перейти на главную страницу">
      <Logo404Dark v-if="isThemeDark" />
      <Logo404 v-else />
    </NuxtLink>

    <NuxtLink v-else :class="$style.logo" to="/" aria-label="Перейти на главную страницу">
      <LogoDark v-if="isThemeDark" />
      <Logo v-else />
    </NuxtLink>

    <div>
      <div>
        <h1 :class="$style.title">
          MARANTA
        </h1>

        <ul :class="$style.list">
          <li>
            <NuxtLink to="/" exact :class="$style.link" :activeClass="$style.link_active">
              всё
            </NuxtLink>
          </li>

          <li v-for="item in TAGS" :key="item">
            <NuxtLink :to="`/${item}`" :class="linkClassNames(item)" :activeClass="$style.link_active">
              {{ tagDisplayNames[item] }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <Switch />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  border-bottom: 2px solid var(--mild);
  padding-bottom: 14px;

  &_dark {
    border-color: var(--medium);

    .link {
      color: #fff !important;

      &_active,
      &:hover {
        color: var(--yellow) !important;
      }
    }
  }
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  flex-shrink: 0;
}

.title {
  margin: 3px 10px -3px 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
}

.list {
  display: flex;
  flex-wrap: wrap;
}


.link {
  display: flex;
  margin-right: 4px;
  color: var(--dark) !important;

  &:hover {
    text-decoration: none !important;
    color: var(--blue) !important;
  }

  &_active {
    color: var(--blue) !important;
  }

  &::before {
    content: '#';
  }
}
</style>