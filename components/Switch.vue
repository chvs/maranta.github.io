<script>
import { mapGetters, mapActions } from 'vuex';
import Icon from '~/static/svg/switch.svg';
import IconDark from '~/static/svg/switch_dark.svg';

export default {
  components: {
    Icon,
    IconDark,
  },

  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

    btnClass() {
      return {
        [this.$style.btn]: true,
        [this.$style.btn_dark]: this.themeIsDark,
      };
    },
  },

  methods: {
    ...mapActions({
      setThemeLight: 'theme/setThemeLight',
      setThemeDark: 'theme/setThemeDark',
    }),

    clickHandler() {
      if (this.themeIsDark) {
        this.setThemeLight();
      } else {
        this.setThemeDark();
      }
    }
  }
};
</script>

<template>
  <div :class="$style.root">
    <button
      :class="btnClass"
      aria-label="Переключить тему"
      @click="clickHandler"
    >
      <Icon v-if="!themeIsDark" />
      <IconDark v-else />
    </button>
  </div>
</template>

<style lang="scss" module>
.root {
  margin-left: auto;
}

.btn {
  outline: none;
  padding: 0;
  border: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  height: 50px;
  width: 38px;

  svg {
    width: 100%;
    height: 100%;
    fill: $medium;
  }

  &:hover {
    svg {
      fill: $dark;
    }
  }

  &_dark {
    &:hover {
      svg {
        fill: #ffffff;
      }
    }
  }
}
</style>