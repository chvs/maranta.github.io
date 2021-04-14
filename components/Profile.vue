<script>
import { mapGetters } from 'vuex';
import Logo from '~/static/svg/logo.svg';
import LogoDark from '~/static/svg/logo_dark.svg';
import Icon from '~/static/svg/switch.svg';
import Inst from '~/static/svg/inst.svg';
import Tg from '~/static/svg/tg.svg';
import Mail from '~/static/svg/mail.svg';
import SwitchBtn from './Switch.vue';

export default {
  components: {
    Logo,
    LogoDark,
    Icon,
    Inst,
    Tg,
    Mail,
    SwitchBtn,
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
    <div :class="$style.logo">
      <Logo v-if="!isDark" />
      <LogoDark v-else />
    </div>
    <div :class="$style.descr">
      <div :class="$style.heading">
        <h1 :class="$style.title">maranta</h1>
        <ul :class="socialsClass">
          <li>
            <a
              :class="$style.link"
              href="tg://resolve?domain=nm_name"
              target="_blank"
              rel=”noopener”
            >
              <Tg />
            </a>
          </li>
          <li>
            <a
              :class="$style.link"
              href="https://www.instagram.com/ave_maranta/"
              target="_blank"
              rel=”noopener”
            >
              <Inst />
            </a>
          </li>
          <li>
            <a
              :class="$style.link"
              href="mailto:name.maranta@gmail.com"
              target="_blank"
              rel=”noopener”
            >
              <Mail />
            </a>
          </li>
        </ul>
      </div>
      <h2 :class="$style.subtitle">ui/ux designer (since 2007)</h2>
    </div>
    <SwitchBtn />
  </div>
</template>

<style lang="stylus" module>
.root {
  display: flex;
  border-bottom: 1px solid #E4E4E4;
  padding-bottom: 14px;

  &_dark {
    border-bottom-color: #7C7C7C;
  }

  @media (max-width: 414px) {
    flex-wrap: wrap;
  }
}

.logo {
  width: 50px;
  height: 50px;
  margin: 4px 19px 0 0;
  flex-shrink: 0;

  @media (max-width: 414px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.title {
  margin: 0 20px 8px 0;
  font-size: 24px;
}

.heading {
  display: flex;
  align-items: flex-start;
}

.subtitle {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-top 0
}

.descr {
  @media (max-width: 414px) {
    width: calc(100% - 38px);
    margin: 15px 0 0 0;
  }
}

.socials {
  list-style-type: none;
  padding: 3px 0 0;
  margin: 0;
  display: flex;
  align-items: center;

  &_dark {
    .link {
      svg {
        fill: #7C7C7C;
      }
      &:hover {
        svg {
          fill: #E4E4E4;
        }
      }
    }
  }

  li {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.link {
  height: 16px;
  width: 16px;
  display: block;

  svg {
    fill: #E4E4E4;
    width: 100%;
    height: 100%;
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    svg {
      fill: #7C7C7C;
    }
  }
}
</style>