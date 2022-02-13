<script>
import { mapGetters } from 'vuex';
import Logo from '~/static/svg/logo.svg';
import Logo404 from '~/static/svg/logo_404.svg';
import LogoDark from '~/static/svg/logo_dark.svg';
import Icon from '~/static/svg/switch.svg';
import TelegramIcon from '~/assets/images/telegram.svg';
import TwitterIcon from '~/assets/images/twitter.svg';
import SwitchBtn from './Switch.vue';

export default {
  components: {
    Logo,
    Logo404,
    LogoDark,
    Icon,
    TelegramIcon,
    TwitterIcon,
    SwitchBtn,
  },

  props: {
    isDark: {
      type: Boolean,
      default: false,
    },

    isErrorPage: {
      type: Boolean,
      default: false,
    },

    subtitle: {
      type: String,
      default: 'ui/ux (since 2007)',
    },
  },

  computed: {
    rootClass() {
      return {
        [this.$style.root]: true,
        [this.$style.root_dark]: this.isDark,
      };
    },

    socialsClass() {
      return {
        [this.$style.socials]: true,
        [this.$style.socials_dark]: this.isDark,
      };
    },
  },
};
</script>

<template>
  <div :class="rootClass">
    <NuxtLink
      v-if="isErrorPage"
      to="/"
      :class="$style.logo"
    >
      <Logo404 />
    </NuxtLink>

    <NuxtLink
      v-else
      to="/"
      :class="$style.logo"
    >
      <Logo v-if="!isDark" />
      <LogoDark v-else />
    </NuxtLink>

    <div>
      <div :class="$style.heading">
        <b :class="$style.title">MARANTA</b>

        <ul :class="socialsClass">
          <li>
            <a
              :class="$style.link"
              href="https://t.me/n_maranta"
              target="_blank"
              rel=”noopener”
            >
              <TelegramIcon />
            </a>
          </li>

          <li>
            <a
              :class="$style.link"
              href="https://twitter.com/n_maranta"
              target="_blank"
              rel=”noopener”
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>

      <h2 :class="$style.subtitle">{{ subtitle }}</h2>
    </div>
    <SwitchBtn />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  border-bottom: 1px solid $medium;
  padding-bottom: 14px;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  flex-shrink: 0;
}

.title {
  margin: -2px 15px 6px 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}

.heading {
  display: flex;
  align-items: flex-start;
}

.subtitle {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.socials {
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;

  &_dark {
    .link {
      &:hover {
        svg {
          fill: #fff;
        }
      }
    }
  }

  li {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.link {
  display: block;

  svg {
    fill: $medium;
    display: block;
  }

  &:hover {
    svg {
      fill: $dark;
    }
  }
}
</style>