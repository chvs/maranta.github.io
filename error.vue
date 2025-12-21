<script setup>
import IconTop from '~/assets/images/404_1.svg?component';
import IconBottom from '~/assets/images/404_2.svg?component';


useSeoMeta({
  title: 'Егор пейдж',
});
</script>

<template>
  <NuxtLayout>
    <Profile is-error-page />

    <div :class="$style.text">
      Error
    </div>

    <div :class="$style.content">
      <div :class="$style.icons">
        <IconTop :class="$style.top" />
        <IconBottom :class="$style.bottom" />
      </div>

      <NuxtLink to="/">
        Домой
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" module>
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

.footer {
  color: var(--medium);
  text-align: center;
  padding-bottom: 30px;
  margin-top: auto;
  letter-spacing: -0.1px;
}
</style>
