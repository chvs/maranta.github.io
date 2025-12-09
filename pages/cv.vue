<script setup lang="ts">
import Arrow from '~/assets/images/arrow.svg?component';
import PinIcon from '~/assets/svg/pin.svg?component';
import TgIcon from '~/assets/svg/tg.svg?component';
import { useElementHover } from '@vueuse/core';
import { useTemplateRef } from 'vue';

useSeoMeta({
  title: 'cv',
});

const isThemeDark = useTheme();

const style = useCssModule();

const rootClassNames = computed(() => ({
  [style.root]: true,
  [style.root_dark]: isThemeDark.value,
}));

const footerClassNames = computed(() => ({
  [style.footer]: true,
  [style.footer_dark]: isThemeDark.value,
}));

const buttonClassNames = ((index: number) => ({
  [style.box__button]: true,
  [style.box__button_open]: newArr.value[index],
}))

const newArr = ref(Array(4).fill(false));

const isOpen = computed({
  get: () => newArr.value.every(item => item === true),
  set: (value: boolean) => {
    newArr.value = newArr.value.map(() => value);
  },
});

const toggleAll = () => {
  isOpen.value = !isOpen.value;
};

const toggleSection = (index: number) => {
  newArr.value[index] = !newArr.value[index];
};


const arrowClassNames = computed(() => ({
  [style.header__icon]: true,
  [style.header__icon_open]: isOpen.value,
}))

const myHoverableElement = useTemplateRef<HTMLImageElement>('myHoverableElement')
const isHovered = useElementHover(myHoverableElement)
</script>

<template>
  <div :class="rootClassNames">
    <Profile />
    <Nav />

    <ul :class="$style.list">
      <li :class="$style.list__item">
        jul 6, 2024
      </li>

      <li :class="$style.list__item">
        <NuxtLink to="/about" :class="[$style.list__link, $style.list__link_accent]">
          #about
        </NuxtLink>
      </li>

      <li :class="$style.list__item">
        <PinIcon />&nbsp;<b>Москва</b>&nbsp;(Офис/Удалёнка)
      </li>
    </ul>

    <div :class="$style.header">
      <div :class="$style.header__avatar">
        <img ref="myHoverableElement" :class="$style.header__img" src="/assets/images/avatar.png" alt="avatar">
      </div>

      <Transition name="fade">
        <div v-if="isHovered" :class="$style.header__hint">
          <div :class="$style.bubble">
            В&nbsp;IT&nbsp;с&nbsp;тех пор, когда продуктами называли еду, а&nbsp;не&nbsp;работу.
          </div>
        </div>
      </Transition>

      <div :class="$style.header__info">
        <p>
          <b>Наталья Маранта&nbsp;/ Дизаин-менеджер&nbsp;/ 15+&nbsp;лет опыта</b>
          <br>
          Product Design&nbsp;/ Brand&nbsp;/ People Management&nbsp;/ Process Design&nbsp;/ Data-driven design
          <br>
          <b>Стек:</b> Jira, Confluence, Figma, ЯМ, GA...
        </p>
      </div>
    </div>

    <ul :class="$style.actions">
      <li :class="$style.actions__item">
        <a :class="$style.actions__link" href="https://t.me/n_maranta" target="_blank" rel=”noopener”
          aria-label="Перейти в телеграм канал">
          <TgIcon :class="$style.header__tg" />
          <span :class="$style.actions__hide">
            @n_maranta
          </span>
        </a>
      </li>

      <li :class="$style.actions__item"><span :class="$style.actions__bull" /></li>

      <li :class="$style.actions__item">
        <a href="/CV_Design_Director_N_Maranta.pdf" download :class="$style.actions__link">
          Скачать CV
          <span :class="$style.actions__hide">
            в .pdf
          </span>
        </a>
      </li>

      <li :class="$style.actions__item"><span :class="$style.actions__bull" /></li>

      <li :class="$style.actions__item">
        <button :class="$style.actions__button" type="button" @click="toggleAll">
          <template v-if="isOpen">Скрыть</template>
          <template v-else>Раскрыть</template>
          UI
          <Arrow :class="arrowClassNames" />
        </button>
      </li>
    </ul>

    <div>
      <ul :class="$style.feed">
        <li>
          <div :class="$style.box__description">
            <div :class="$style.dates">
              <span>2024</span>
              <div :class="$style.dates__divider" />
              <span>2025</span>
            </div>
            <div :class="$style.box__title">
              <b>
                Mosqo&nbsp;&mdash; Дизайн-директор, соучредитель
              </b>
              <br>
              Сервис аренды&nbsp;/ CRM для психологов&nbsp;/ B2C
            </div>

            <button :class="buttonClassNames(0)" type="button" @click="toggleSection(0)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[0]" :class="[$style.box__content, $style.box__content_inner]">
              <p>
                Сервис аренды
              </p>

              <img :class="$style.box__image" src="/assets/cv/24-25_Mosqo_g.gif" height="408" width="580" alt="">
              <div :class="$style.divider" />
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__content">

            <ul :class="$style.box__list">
              <li>
                Собрана команда с нуля, заведены процессы
              </li>
              <li>
                Посчитана юнит-экономика, спроектирована продуктовая и
                <NuxtLink to="/post/strategy" target="_blank">дизайн-стратегия</NuxtLink>
              </li>
              <li>
                Введён процесс сквозного планирования / agile
              </li>
              <li>
                Рекламный бюджет снижен на 50% план-факт за счёт замещения ПО и внедрения AI-инструментов
              </li>
            </ul>

            <div :class="[$style.divider, $style.divider_space]" />

            <p>
              <b>Команда 30+ человек </b>
              (продукты / бренд / коммуникация / PM)
            </p>
          </div>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.dates">
              <span>2021</span>
              <div :class="$style.dates__divider" />
              <span>2023</span>
            </div>
            <div :class="$style.box__title">
              <b>
                Робофинанс&nbsp;&mdash; Руководитель дизайн-департамента
              </b>
              <br>
              Банкинг&nbsp;/ Кредитные продукты&nbsp;/ B2B, B2C
            </div>

            <button :class="buttonClassNames(1)" type="button" @click="toggleSection(1)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[1]" :class="[$style.box__content, $style.box__content_inner]">
              <p>Сайт компании</p>

              <img :class="$style.box__image" src="/assets/cv/21-23_robo_g.gif" height="430" width="580" alt="">
              <div :class="$style.divider" />
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__content">

            <ul :class="$style.box__list">
              <li>
                Введён
                <NuxtLink to="/post/product-design" target="_blank">продуктовый подход</NuxtLink>
                (дизайн на&nbsp;основе данных)
              </li>
              <li>
                <NuxtLink to="/post/interview" target="_blank">Донабор команды</NuxtLink>
                и&nbsp;распределение по&nbsp;направлениям (продуктовый, коммуникационный дизайн)
              </li>
              <li>
                Введена
                <NuxtLink to="/post/matrix" target="_blank">матрица компетенций</NuxtLink>
              </li>
              <li>
                Введён процесс обучения
              </li>
              <li>
                Достигнут рост MAU от&nbsp;квартала к&nbsp;кварталу до&nbsp;15%
              </li>
            </ul>

            <div :class="[$style.divider, $style.divider_space]" />

            <p :class="$style.box__text">
              <b>Команда 20+&nbsp;человек </b>
              (продукты&nbsp;/ бренд&nbsp;/ коммуникация)
            </p>

            <div :class="[$style.divider, $style.divider_space]" />

            <ul :class="[$style.box__list, $style.box__light]">
              <li>
                Продукты c&nbsp;Acquisition 20+&nbsp;млн. регистраций
              </li>
              <li>
                Партнёрство с&nbsp;крупнейшими банками и&nbsp;маркетплейсами РФ
              </li>
              <li>
                Запуск с&nbsp;нуля кредитного продукта &laquo;А-деньги&raquo; с&nbsp;выполненной целью выдач
                в&nbsp;1&nbsp;млрд. рублей меньше, чем за&nbsp;год после старта
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.dates">
              <span>2016</span>
              <div :class="$style.dates__divider" />
              <span>2020</span>
            </div>
            <div :class="$style.box__title">
              <b>
                Amviser&nbsp;&mdash; Head of&nbsp;Design
              </b>
              <br>
              LMS&nbsp;/ IP-телефония&nbsp;/ B2B, B2C
            </div>

            <button :class="buttonClassNames(2)" type="button" @click="toggleSection(2)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[2]" :class="[$style.box__content, $style.box__content_inner]">
              <p>Образовательная платформа (LMS)</p>
              <img :class="$style.box__image" src="/assets/cv/16-20_educat_g.gif" height="308" width="580" alt="">
              <div :class="$style.divider" />
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__content">

            <ul :class="$style.box__list">
              <li>
                Уход от&nbsp;аутсорса&nbsp;/
                <NuxtLink to="/post/interview" target="_blank">набор команды</NuxtLink>
              </li>
              <li>
                Запуск дизайн-процессов:
                <NuxtLink to="/post/planning" target="_blank">планирование</NuxtLink>,
                <NuxtLink to="/post/communication" target="_blank">коммуникация</NuxtLink>, обучение, дизайн-ревью
                и&nbsp;т.п.
              </li>
              <li>
                Автоматизация планирования и&nbsp;трекинг ресурсов привёл к&nbsp;снижению расходов на&nbsp;дизайн
                до&nbsp;30% план-факт
              </li>
              <li>
                Time to&nbsp;Market снижался от&nbsp;года к&nbsp;году на&nbsp;5-30%
              </li>
            </ul>

            <div :class="[$style.divider, $style.divider_space]" />

            <p>
              <b>Команда 30+&nbsp;человек </b>
              (продукты&nbsp;/ бренд&nbsp;/ коммуникация)
            </p>
          </div>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.dates">
              <span>2007</span>
              <div :class="$style.dates__divider" />
              <span>2015</span>
            </div>
            <div :class="$style.box__title">
              <b>
                MKS&nbsp;/ Vegas&nbsp;/ Unico&nbsp;/ Intelsib&nbsp;&mdash; Дизайнер
              </b>
            </div>

            <button :class="buttonClassNames(3)" type="button" @click="toggleSection(3)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[3]" :class="$style.box__content">
              <p><b>2013&nbsp;&mdash; 2015&nbsp;/ Intelsib</b></p>
              <p>Сайт компании</p>
              <img :class="$style.box__image" src="/assets/cv/13-15_int_g.gif" height="425" width="580" alt="">

              <div :class="[$style.divider, $style.divider_space]" />

              <p><b>2012&nbsp;&mdash; 2013&nbsp;/ Unico Design</b></p>
              <p>Сайт для федеральной грузовой компании с&nbsp;CRM</p>
              <img :class="$style.box__image" src="/assets/cv/12-13_RJD_g.gif" height="580" width="543" alt="">


              <p><b>2009&nbsp;&mdash; 2012&nbsp;/ Vegas</b></p>
              <p>Медицинская информационная система для клиник.</p>
              <img :class="$style.box__image" src="/assets/cv/9-12_MIS_w.webp" height="580" width="503" alt="">

              <p><b>2007&nbsp;&mdash; 2008&nbsp;/ MKS</b></p>
              <p>Информационный портал</p>
              <img :class="$style.box__image" src="/assets/cv/7-8_DV.png" height="580" width="505" alt="">

              <p><b>2005&nbsp;&mdash; 2006&nbsp;/ Личный блог</b></p>
              <img :class="$style.box__image" src="/assets/cv/5-6_BLOG_g.gif" height="580" width="400" alt="">
            </div>
          </Transition>
        </li>
      </ul>
    </div>
  </div>

  <footer :class="footerClassNames">
    <NuxtLink to="/">
      Go home
    </NuxtLink>

    <ScrollTopButton />
  </footer>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;

  &_dark {
    .bubble {
      background-color: var(--dark);
      border: 2px solid var(--blue);

      &::before {
        border-color: var(--blue) transparent transparent;
      }

      &::after {
        border-color: var(--dark) transparent transparent;
      }
    }
  }
}

.actions {
  padding: 20px 25px 20px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--mild);


  .root_dark & {
    border-color: var(--medium);
  }

  @media (max-width: 575px) {
    padding-left: 0px;
  }

  &__hide {
    @media (max-width: 705px) {
      display: none;
    }
  }

  &__link {
    font-weight: 500;
    white-space: nowrap;
  }

  &__bull {
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: var(--dark);

    .root_dark & {
      background-color: var(--light)
    }
  }

  &__button {
    background-color: transparent;
    padding: 0;
    border: none;
    font-family: inherit;
    color: var(--blue);
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    white-space: nowrap;

    .root_dark & {
      color: var(--yellow);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.dates {
  display: flex;
  flex-direction: column;
  font-weight: 500;

  &__divider {
    height: 2px;
    background-color: var(--dark);

    .root_dark & {
      background-color: var(--light);
    }
  }
}

.list {
  @include ui-bull-list;
  margin-top: 20px;

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    &:hover {
      text-decoration: none !important;
    }
  }

  &__link_accent {
    color: var(--blue) !important;
  }

  .root_dark & {
    &__link_accent {
      color: var(--yellow) !important;
    }
  }
}

.header {
  display: flex;
  align-items: start;
  position: relative;
  padding: 6px 0 22px 20px;

  @media (max-width: 575px) {
    padding-left: 0;
  }

  &__avatar {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 20px;

    @media (max-width: 575px) {
      height: 50px;
      width: 50px;
      margin-right: 10px;
    }
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__tg {
    fill: var(--blue);

    .root_dark & {
      fill: var(--yellow);
    }
  }

  &__icon {
    height: 10px;
    width: 16px;
    fill: var(--blue);
    margin-left: 27px;
    transition: .123s transform linear;
    transform: rotate(-90deg);

    &_open {
      transform: rotate(0deg);
    }

    .root_dark & {
      fill: var(--yellow);
    }
  }

  &__hint {
    position: absolute;
    top: -18px;
    left: 32px;
    pointer-events: none;

    @media (max-width: 640px) {
      top: -45px;
      left: 50px;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }
}

.feed {
  list-style-type: none;
}

.divider {
  border-top: 2px solid var(--mild);

  &_space {
    margin-bottom: 20px;
  }

  .root_dark & {
    border-color: var(--medium);
  }
}

.box {
  &__head {
    font-weight: 500;
    margin-bottom: 15px;
  }

  &__title {
    padding-left: 48px;
    margin-right: auto;

    @media (max-width: 575px) {
      padding-left: 20px;
    }
  }

  &__icon {
    fill: var(--dark);
    height: 100%;
    width: 100%;

    .root_dark & {
      fill: var(--light);
    }
  }

  &__text {
    margin-bottom: 20px;
  }

  &__list {
    margin-bottom: 20px;
    padding-left: 19px;

    >li {

      list-style: disc;
    }
  }

  &__light {
    color: var(--medium)
  }

  &__description {
    display: flex;
    align-items: center;
    position: relative;
    background-color: var(--mild);
    padding: 15px 0 15px 46px;
    padding-right: 25px;
    border-radius: 3px;

    .root_dark & {
      background-color: var(--semidark);
    }

    @media (max-width: 575px) {
      padding-left: 12px;
    }
  }

  &__button {
    background-color: transparent;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    height: 12px;
    width: 16px;
    font-weight: 500;
    margin-left: 8px;
    flex-shrink: 0;

    &:after {
      position: absolute;
      content: "";
      z-index: 1;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    >svg {
      transition: .123s transform linear;
      transform: rotate(-90deg);
    }

    &_open>svg {
      transform: rotate(0deg);
    }
  }

  &__image {
    margin: 20px 0 30px;
    display: block;
    width: 100%;
    height: auto;

    &_bordered {
      border: 1px solid var(--medium);

      .root_dark & {
        border: none;
      }
    }

    &_last {
      margin-bottom: 0;
    }
  }

  &__content {
    padding-top: 24px;
    padding-left: 140px;
    position: relative;
    padding-bottom: 28px;

    .root_dark & {
      border-color: var(--medium);
    }

    @media (max-width: 575px) {
      padding-left: 60px;
    }

    &::before {
      content: '';
      width: 4px;
      top: 28px;
      bottom: 28px;
      left: 66px;
      background-color: var(--medium);
      position: absolute;
      border-radius: 2px;

      @media (max-width: 575px) {
        left: 22px;
      }
    }

    &_inner {
      padding-bottom: 0;

      &::before {
        bottom: -56px;
      }
    }
  }

  &__subtitle {
    margin: 20px 0 0;
  }

  &__icons {
    display: block;
    margin-top: 20px;
    max-width: 574px;
    width: 100%;
    height: auto;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 2px solid var(--mild);
  margin-top: auto;

  &_dark {
    border-color: var(--medium);
  }
}

.bubble {
  position: relative;
  display: inline-block;
  padding: 8px 15px;
  border: 2px solid var(--yellow);
  border-radius: 4px;
  background-color: var(--light);
  text-align: left;
  font-size: 18px;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 16%;
    border-style: solid;
    border-width: 20px 20px 0 0;
    border-color: var(--yellow) transparent transparent;
    translate: -50% 100%;
    transform: skew(-13deg);
    transform-origin: top;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 16%;
    border-style: solid;
    border-width: 15px 15px 0 0;
    border-color: var(--light) transparent transparent;
    translate: calc(-50%) 100%;
    transform: skew(-13deg);
    transform-origin: top;
  }
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.123s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
