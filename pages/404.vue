<script>
import { mapGetters } from 'vuex';
import Profile from '~/components/Profile.vue';
import Nav from '~/components/Nav.vue';
import IconTop from '~/assets/images/404_1.svg';
import IconBottom from '~/assets/images/404_2.svg';

export default {
  head() {
    return {
      title: '404',
    };
  },

  components: {
    Profile,
    Nav,
    IconTop,
    IconBottom
  },

  computed: {
    ...mapGetters({
      themeIsDark: 'theme/themeIsDark',
    }),

    linkClassNames() {
      return {
        [this.$style.link]: true,
        [this.$style.link_dark]: this.themeIsDark,
      }
    },
  },
};
</script>

<template>
  <div>
    <Profile
      :is-error-page="true"
      :is-dark="themeIsDark"
    />

    <Nav :is-dark="themeIsDark" />

    <div :class="$style.text">
      # 404
    </div>

    <div :class="$style.content">
      <div :class="$style.icons">
        <IconTop :class="$style.top"/>
        <IconBottom :class="$style.bottom"/>
      </div>

      <NuxtLink
        to="/"
        :class="linkClassNames"
      >
        Go home
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" module>
html,
body {
  min-height: 100%;
  height: 100%;
  min-width: 320px;
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
  animation-duration: .08s;
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
  color: $medium;
}

.content {
  text-align: center;
}

.link {
  color: $blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &_dark {
    color: $yellow;
  }
}
</style>
