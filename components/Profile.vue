<script>
import Logo from '~/assets/images/logo.svg';
import LogoDark from '~/assets/images/logo_dark.svg';
import Logo404 from '~/assets/images/logo_404.svg';
import Logo404Dark from '~/assets/images/logo_404_dark.svg';
import Icon from '~/static/svg/switch.svg';
import TelegramIcon from '~/assets/images/telegram.svg';
import MastodonIcon from '~/assets/images/mastodon.svg';
import SubsocialIcon from '~/assets/images/subsocial.svg';
import LinkedinIcon from '~/assets/images/linkedin.svg';
import OdyseeIcon from '~/assets/images/odysee.svg';
import GithubIcon from '~/assets/images/github.svg';
import SwitchBtn from './Switch.vue';

export default {
  components: {
    Logo,
    LogoDark,
    Logo404,
    Logo404Dark,
    Icon,
    TelegramIcon,
    MastodonIcon,
    SubsocialIcon,
    LinkedinIcon,
    OdyseeIcon,
    GithubIcon,
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
      <Logo404Dark v-if="isDark" />
      <Logo404 v-else />
    </NuxtLink>

    <NuxtLink
      v-else
      to="/"
      :class="$style.logo"
    >
      <LogoDark v-if="isDark" />
      <Logo v-else />
    </NuxtLink>

    <div>
      <div>
        <h1 :class="$style.title">
          MARANTA
        </h1>

        <p v-if="isErrorPage">
          where am I?
        </p>

        <a v-else
          :class="$style.caption"
          href="https://t.me/hell_management"
          target="_blank"
          rel=”noopener”
        >
          @менеджментваду
        </a>

        <!-- <ul v-else :class="socialsClass">
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
              href="https://www.linkedin.com/in/nmaranta"
              target="_blank"
              rel=”noopener”
            >
              <LinkedinIcon />
            </a>
          </li>

          <li v-if="false">
            <a
              :class="$style.link"
              href="hhttps://github.com/nmaranta"
              target="_blank"
              rel=”noopener”
            >
              <GithubIcon />
            </a>
          </li>

          <li v-if="false">
            <a
              :class="$style.link"
              href="https://mastodon.online/web/@maranta"
              target="_blank"
              rel=”noopener”
            >
              <MastodonIcon />
            </a>
          </li>

          <li v-if="false">
            <a
              :class="$style.link"
              href="https://odysee.com/@maranta:0"
              target="_blank"
              rel=”noopener”
            >
              <OdyseeIcon />
            </a>
          </li>

          <li v-if="false">
            <a
              :class="$style.link"
              href="https://app.subsocial.network/accounts/3sLnig8qvRdUSFnhYCVoeNTWpuc6Vs9EiUmyZ6pFrkvjwyrz"
              target="_blank"
              rel=”noopener”
            >
              <SubsocialIcon />
            </a>
          </li>
        </ul> -->
      </div>

    </div>
    <SwitchBtn />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  border-bottom: 2px solid $mild;
  padding-bottom: 14px;

  &_dark {
    border-color: $medium;
  }

  .caption {
    color: $medium;
  }
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  flex-shrink: 0;
}

.title {
  margin: 3px 10px -3px 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}

.socials {
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  margin-top: 13px;

  &_dark {
    .link {
      &:hover {
        svg path {
          fill: #fff;
        }
      }
    }
  }

  li {
    margin-right: 19px;

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
    svg path {
      fill: $dark;
    }
  }
}
</style>