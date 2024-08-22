<script setup>
const isThemeDark = useTheme();

const style = useCssModule();

const rootClass = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));
</script>

<template>
  <div :class="rootClass">
    <div :class="$style.content">
      <div :class="$style.wrapper">
        <slot />
      </div>

      <div :class="$style.footer">
        Использовать материалы сайта можно со&nbsp;ссылкой на&nbsp;источник. Спасибо&nbsp;🙂.
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  background-color: #fff;
  color: var(--dark);
  min-height: 100%;
  display: flex;

  a {
    color: var(--blue);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &_dark {
    background-color: var(--dark);
    color: #fff;

    a {
      color: var(--yellow);
    }
  }
}

.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 20px 20px 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.footer {
  color: var(--medium);
  text-align: center;
  padding-bottom: 30px;
  margin-top: auto;
  letter-spacing: -0.1px;
}
</style>
