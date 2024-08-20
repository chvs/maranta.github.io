<script setup>
import Icon from '~/assets/images/switch.svg?component';
import IconDark from '~/assets/images/switch_dark.svg?component';


const isThemeDark = useTheme();

const style = useCssModule();

const btnClassNames = computed(() => ({
  [style.btn]: true,
  [style.btn_dark]: isThemeDark.value,
}));

const clickHandler = () => {
  isThemeDark.value = !isThemeDark.value;
};
</script>

<template>
  <div :class="$style.root">
    <button
      :class="btnClassNames"
      aria-label="Переключить тему"
      @click="clickHandler"
    >
      <IconDark v-if="isThemeDark" />
      <Icon v-else />
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
    fill: var(--medium);
  }

  &:hover {
    svg {
      fill: var(--dark);
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