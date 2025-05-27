<script setup>
import TAGS from '~/constants/tags';


const isThemeDark = useTheme();

const style = useCssModule();

const rootClassNames = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));
</script>

<template>
  <div :class="rootClassNames">
    <h2 :class="$style.title">
      Мы&nbsp;делаем здесь amazing customer service (c)
    </h2>

    <ul :class="$style.list">
      <li>
        <NuxtLink to="/" exact :class="$style.link" :activeClass="$style.link_active">
          all
        </NuxtLink>
      </li>

      <!-- <li>
        <NuxtLink
          to="/cv"
          exact
          :class="$style.link"
          :activeClass="$style.link_active"
        >
          cv
        </NuxtLink>
      </li> -->

      <li v-for="item in TAGS" :key="item">
        <NuxtLink :to="`/${item}`" :class="$style.link" :activeClass="$style.link_active">
          {{ item }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.root {
  border-bottom: 2px solid var(--mild);
  padding: 15px 0;

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

.title {
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
}

.active {
  color: var(--blue);
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