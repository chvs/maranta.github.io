<script>
import TAGS from '~/constants/tags';

export default {
  data() {
    return {
      items: TAGS,
    };
  },

  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    rootClass() {
      return {
        [this.$style.root]: true,
        [this.$style.root_dark]: this.isDark,
      };
    },
  },
};
</script>

<template>
  <div :class="rootClass">
    <h2 :class="$style.title">
      Мы&nbsp;делаем здесь amazing customer service (c)
    </h2>

    <ul :class="$style.list">
      <li>
        <NuxtLink
          to="/"
          exact
          :class="$style.link"
          :activeClass="$style.link_active"
        >
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

      <li
        v-for="item in items"
        :key="item"
      >
        <NuxtLink
          :to="`/${item}`"
          :class="$style.link"
          :activeClass="$style.link_active"
        >
          {{ item }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.root {
  border-bottom: 2px solid $mild;
  padding: 15px 0;

  &_dark {
    border-color: $medium;

    .link {
      color: #fff!important;

      &_active,
      &:hover {
        color: $yellow!important;
      }
    }
  }
}

.title {
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}

.active {
  color: $blue;
}

.list {
  display: flex;
  flex-wrap: wrap;
}

.link {
  display: flex;
  margin-right: 4px;
  color: $dark!important;

  &:hover {
    text-decoration: none!important;
    color: $blue!important;
  }

  &_active {
    color: $blue!important;
  }

  &::before {
    content: '#';
  }
}
</style>