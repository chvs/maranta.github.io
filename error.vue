<script setup>
import IconTop from '~/assets/images/404_1.svg?component';
import IconBottom from '~/assets/images/404_2.svg?component';


useSeoMeta({
  title: 'Егор пейдж',
});

const isThemeDark = useTheme();

const style = useCssModule();

const rootClass = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));
</script>

<template>
  <div :class="rootClass">
    <div :class="$style.wrapper">
      <Profile is-error-page />

      <Nav />

      <div :class="$style.text">
        Error
      </div>

      <div :class="$style.content">
        <div :class="$style.icons">
          <IconTop :class="$style.top"/>
          <IconBottom :class="$style.bottom"/>
        </div>

        <NuxtLink to="/">
          Go home
        </NuxtLink>
      </div>

      <div :class="$style.footer">
        Использовать материалы сайта можно только со&nbsp;ссылкой на&nbsp;источник. Спасибо&nbsp;🙂
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

.icons {
  position: relative;
  width: 100%;
  margin: 20px auto;
  max-width: 280px;
}

.bottom,
.top {
  width: 100%;
  height: auto;
}

.bottom {
  position: absolute;
  left: 0;
  top: 0;
  animation-name: fade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: .1s;
  animation-direction: alternate;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.text {
  padding-top: 20px;
  color: var(--medium);
}

.content {
  text-align: center;
}

.wrapper {
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

.footer {
  color: var(--medium);
  text-align: center;
  padding-bottom: 30px;
  margin-top: auto;
  letter-spacing: -0.1px;
}
</style>
