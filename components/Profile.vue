<script setup>
import Logo from '~/assets/images/logo.svg?component';
import LogoDark from '~/assets/images/logo_dark.svg?component';
import Logo404 from '~/assets/images/logo_404.svg?component';
import Logo404Dark from '~/assets/images/logo_404_dark.svg?component';


const props = defineProps({
  isErrorPage: {
    type: Boolean,
    default: false,
  },
});

const isThemeDark = useTheme();

const style = useCssModule();

const rootClassNames = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));
</script>

<template>
  <div :class="rootClassNames">
    <NuxtLink v-if="isErrorPage" :class="$style.logo" to="/" aria-label="Перейти на главную страницу">
      <Logo404Dark v-if="isThemeDark" />
      <Logo404 v-else />
    </NuxtLink>

    <NuxtLink v-else :class="$style.logo" to="/" aria-label="Перейти на главную страницу">
      <LogoDark v-if="isThemeDark" />
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

        <a v-else :class="$style.caption" href="https://t.me/hell_management" target="_blank" rel=”noopener”
          aria-label="Перейти в телеграм канал">
          @mrnt_org
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

    <Switch />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  border-bottom: 2px solid var(--mild);
  padding-bottom: 14px;

  &_dark {
    border-color: var(--medium);
  }

  .caption {
    color: var(--medium);
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
  line-height: 1.5;
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
    fill: var(--medium);
    display: block;
  }

  &:hover {
    svg path {
      fill: var(--dark);
    }
  }
}
</style>