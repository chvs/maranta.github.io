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
    ...mapGetters([
      'themeIsDark',
    ]),
  },

  methods: {
    ...mapActions([
      'setTheme',
    ]),

    clickHandler() {
      this.setTheme();
    }
  }
};
</script>

<template>
  <div :class="$style.root">
    <button
      :class="$style.btn"
      @click="clickHandler()"
    >
      <Icon v-if="!themeIsDark" />
      <IconDark v-else />
    </button>
  </div>
</template>

<style lang="stylus" module>
.root {
  margin-left: auto;
  padding-top: 4px;

  @media (max-width: 414px) {
    padding-top: 18px;
  }
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
    fill: #E4E4E4;
  }

  &:hover {
    svg {
      opacity: 0.5;
    }
  }
}
</style>