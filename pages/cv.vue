<script setup lang="ts">
import Arrow from '~/assets/images/arrow.svg?component';
import { useElementHover } from '@vueuse/core';
import { useTemplateRef } from 'vue';

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

const isAllOpen = ref(true);

// const toggleAll = () => {
//   isAllOpen.value = !isAllOpen.value;

//   const allOpen = newArr.value.every(item => item === true);
//   newArr.value = newArr.value.map(() => !allOpen);
// }

const myHoverableElement = useTemplateRef<HTMLImageElement>('myHoverableElement')
const isHovered = useElementHover(myHoverableElement)

useSeoMeta({
  title: 'cv',
});

const newArr = ref(Array(9).fill(false));

const toggleSection = (index: number) => {
  newArr.value[index] = !newArr.value[index];
}
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
        читать 1 минуту
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
          <b>Наталья Маранта. Дизайн-менеджер.</b>
          <br>
          Здесь собран и&nbsp;описан опыт работы с&nbsp;минимумом картинок, чтобы не&nbsp;переполнить
          и&nbsp;окончательно не&nbsp;сломать интернет 😎.
        </p>

        <div :class="$style.header__actions">
          <a :class="$style.header__link" href="https://t.me/n_maranta" target="_blank" rel=”noopener”
            aria-label="Перейти в телеграм канал">
            Написать в tg
          </a>

          <!-- <button :class="$style.header__button" type="button" @click="toggleAll">
            <template v-if="isAllOpen">
              Свернуть всё
            </template>

<template v-else>
              Развернуть всё
            </template>

<Arrow :class="$style.header__icon" />
</button> -->
        </div>
      </div>
    </div>

    <div :class="$style.about">
      <div :class="$style.about__header">
        <a href="/CV_Design_Director_N_Maranta.pdf" download :class="$style.link">Скачать CV в .pdf</a>

        <b :class="$style.about__title">Опыт кратко:</b>
      </div>

      <ul :class="$style.about__list">
        <li :class="$style.about__item">
          <div>
            <div :class="$style.about__block">
              <b>Процессы:</b> найм/увольнение (онбординг/сопровождение), внутренняя коммуникация, мотивация, обучение,
              проектирование матриц компетенций с&nbsp;учетом специфики бизнеса, оптимизация процессов, повышение уровня
              продуктовой культуры и&nbsp;квалификации сотрудников.
            </div>
          </div>
        </li>

        <li :class="$style.about__item">
          <div>
            <div :class="$style.about__block">
              <b>Команды всех направлений&nbsp;&mdash;</b> продукты, бренд, коммуникация.<b>&nbsp;30+&nbsp;человек</b>
              (инхаус,
              аутстафф, аутсорс).
            </div>
          </div>
        </li>

        <li :class="$style.about__item">
          <div>


            <div :class="$style.about__block">
              <b>FinTech:</b> инвестиционные и&nbsp;кредитные продукты, платежные сервисы, виртуальные карты, CRM<br>
              <b>EdTech:</b> Образовательные платформы (LMS)<br>
              <b>Telecom:</b> IP-телефония<br>
              <b>MedTech:</b> Медицинские/лабораторные информационные системы (МИС/ЛИС)
            </div>
          </div>
        </li>

        <li :class="$style.about__item">
          <div>
            <div :class="$style.about__block">
              <b>Продуктовые кейсы c&nbsp;Acquisition 20+&nbsp;млн. регистраций</b>, партнёрство с&nbsp;крупнейшими
              банками
              и&nbsp;маркетплейсами&nbsp;РФ
            </div>
          </div>
        </li>
      </ul>

      <div :class="[$style.about__header, $style.about__divider]">
        <b :class="$style.about__title">
          Последние несколько лет руководила дизайном в&nbsp;компаниях Робофинанс (FinTech),
          Моско (EdTech и&nbsp;сервис аренды) и&nbsp;т.д.
        </b>
      </div>

      <ul :class="$style.about__list">
        <li :class="$style.about__item">
          <div>
            <div :class="$style.about__block">
              <b>Робофинанс 2021-2023: банкинг/кредитные продукты.</b><br>
              &mdash;&nbsp;Ввела продуктовый подход (дизайн на&nbsp;основе данных)<br>
              &mdash;&nbsp;Донабрала и&nbsp;разделила команды по&nbsp;направлениям (продуктовый, коммуникационный
              дизайн)<br>
              &mdash;&nbsp;Построила матрицу компетенций с&nbsp;учетом специфики бизнеса<br>
              &mdash;&nbsp;Ввела процесс обучения в&nbsp;связке с&nbsp;индивидуальными планами развития, матрицей
              компетенций
              и&nbsp;целями по&nbsp;ОКР<br>
              &mdash;&nbsp;Построила процесс коммуникации со&nbsp;смежными командами<br>
              &mdash;&nbsp;Спроектировали несколько продуктов с&nbsp;нуля до&nbsp;релиза<br>
              &mdash;&nbsp;Каждый квартал 21-23 годов по&nbsp;всем метрикам показывал рост. Мы&nbsp;справились
              🙂.
            </div>
          </div>
        </li>

        <li :class="$style.about__item">
          <div>
            <div :class="$style.about__block">
              <b>Моско 2024-2025: CRM для психологов, сервис аренды.</b><br>
              &mdash;&nbsp;Набрала команду с&nbsp;нуля<br>
              &mdash;&nbsp;Посчитали юнит-экономику и&nbsp;полностью спроектировали продуктовую стратегию, бренд
              и&nbsp;дизайн-стратегию
              на&nbsp;срок разработки.<br>
              &mdash;&nbsp;Ввела процесс сквозного планирования<br>
              &mdash;&nbsp;Сэкономили половину бюджета за&nbsp;счёт замещения&nbsp;ПО и&nbsp;внедрения AI-инструментов
            </div>
          </div>
        </li>

        <li :class="$style.about__item">
          <div>
            <div :class="$style.about__block">
              <b>До&nbsp;этого руководила дизайном в&nbsp;заказной продуктовой разработке (EdTech и&nbsp;Telecom).</b>
            </div>
          </div>
        </li>
      </ul>

      <p id="portfolio" :class="$style.about__warn">
        * Более подробно с картинками и статьями:
      </p>
    </div>

    <div>
      <ul :class="$style.feed">
        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2024&nbsp;&mdash; 2025&nbsp;/ Mosqo</div>

            <button :class="buttonClassNames(0)" type="button" @click="toggleSection(0)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[0]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Jira, Confluence, Figma, Blender
              </div>

              <p :class="$style.box__text">
                CRM, образовательные продукты, сервис аренды
              </p>

              <p :class="$style.box__text">
                <b>Менеджмент: </b>
                <NuxtLink to="/post/strategy" target="_blank">построение процессов с нуля</NuxtLink>
                с активной
                <NuxtLink to="/post/arenda" target="_blank">ролью в бизнесе</NuxtLink>.
              </p>

              <div>
                <p :class="$style.box__text">
                  &mdash;&nbsp;Собрала команду<br>
                  &mdash;&nbsp;Завела все процессы с&nbsp;аджайлом и&nbsp;планированием<br>
                  &mdash;&nbsp;Спроектировали 2&nbsp;продукта (CRM для психологических консультаций и&nbsp;сервис аренды
                  без посредников)
                  в&nbsp;минимальные сроки<br>
                  &mdash;&nbsp;Сэкономили бюджет за&nbsp;счёт замещения&nbsp;ПО и&nbsp;внедрения
                  AI-инструментов.
                </p>

                <b>
                  Сервис аренды
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/24-25_Mosqo_g.gif" height="408" width="580" alt="">
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2021&nbsp;&mdash; 2023&nbsp;/ Robofinance</div>

            <button :class="buttonClassNames(1)" type="button" @click="toggleSection(1)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[1]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Jira, Confluence, Figma, Blender
              </div>

              <p :class="$style.box__text">
                Финтех: банкинг, кредитные продукты всех возможных разновидностей, CRM.
              </p>

              <p :class="$style.box__text">
                <b>Менеджмент: </b>
                <NuxtLink to="/post/interview" target="_blank">донабор команды</NuxtLink>, построение
                <NuxtLink to="/post/communication" target="_blank">коммуникации</NuxtLink>,
                введение
                <NuxtLink to="/post/product-design" target="_blank">продуктового подхода</NuxtLink>,
                <NuxtLink to="/post/matrix" target="_blank">развитие компетенций</NuxtLink>
                и т.п.
              </p>

              <p :class="$style.box__text">
                &mdash;&nbsp;Продуктовые кейсы c&nbsp;Acquisition 20+&nbsp;млн. регистраций (Займер)<br>
                &mdash;&nbsp;Партнёрство с&nbsp;крупнейшими банками и&nbsp;маркетплейсами&nbsp;РФ<br>
                &mdash;&nbsp;Запуск кредитного продукта &laquo;А-деньги&raquo; с&nbsp;выполненной целью выдач
                в&nbsp;1&nbsp;млрд. рублей меньше, чем за&nbsp;год после старта.
              </p>

              <div>
                <b>
                  Сайт компании
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/21-23_robo_g.gif" height="408" width="580" alt="">
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2020&nbsp;&mdash; 2021&nbsp;/ ФОМ</div>

            <button :class="buttonClassNames(2)" type="button" @click="toggleSection(2)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[2]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Jira, Confluence, Figma, Blender
              </div>

              <p :class="$style.box__text">
                СМИ, социологические исследования, аналитика, научные коммуникации.
              </p>

              <p :class="$style.box__text">
                <b>Менеджмент: </b>
                <NuxtLink to="/post/strategy" target="_blank">оптимизация процессов</NuxtLink>
                с&nbsp;учетом специфики компании и&nbsp;перехода на&nbsp;удаленку.
              </p>

              <div>
                <b>
                  Тематический портал
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/20-21_SMB_g.gif" height="408" width="580" alt="">

              <!-- <div :class="$style.box__duo">
                <div>
                  <img :class="$style.box__image" src="/assets/cv/20-21_FOM_g.gif" height="192" width="288" alt="">
                </div>

                <div>
                  <img :class="$style.box__image" src="/assets/cv/20-21_FOM-human_g.gif" height="192" width="288"
                    alt="">
                </div>
              </div> -->
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2016&nbsp;&mdash; 2020&nbsp;/ Amviser</div>

            <button :class="buttonClassNames(3)" type="button" @click="toggleSection(3)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[3]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Jira, Confluence, Sketch, Figma, Zeplin, Adobe
              </div>

              <p :class="$style.box__text">
                Разработка программных и&nbsp;веб-решений.
              </p>

              <p :class="$style.box__text">
                <b>Менеджмент: </b>
                <NuxtLink to="/post/interview" target="_blank">набор команды</NuxtLink>,
                запуск процессов с&nbsp;
                <NuxtLink to="/post/planning" target="_blank">планированием</NuxtLink>,
                <NuxtLink to="/post/communication" target="_blank">коммуникацией</NuxtLink>, обучением,
                дизайн-ревью и&nbsp;прочим.
              </p>

              <p :class="$style.box__text">
                Проектирование LMS и&nbsp;интерфейса IP-телефонии с&nbsp;нуля.
              </p>

              <div>
                <b>
                  Интерфейс образовательной платформы.
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/16-20_educat_g.gif" height="308" width="580" alt="">
              <!--
              <div :class="$style.box__subtitle">
                <b>Инфопартнёрство отраслевых мероприятий и&nbsp;прочего:</b>
              </div>

              <div :class="$style.box__duo">
                <div>
                  <img :class="[$style.box__image, $style.box__image_bordered]" src="/assets/cv/16-20 confa_g.gif"
                    height="192" width="288" alt="">
                </div>

                <div>
                  <img :class="[$style.box__image, $style.box__image_bordered]" src="/assets/cv/16-20_WC_w.webp"
                    height="192" width="288" alt="">
                </div>
              </div> -->
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2013&nbsp;&mdash; 2015&nbsp;/ Intelsib</div>

            <button :class="buttonClassNames(4)" type="button" @click="toggleSection(4)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[4]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Adobe, Softimage XSI, Jira, Confluence
              </div>

              <p :class="$style.box__text">
                Корпоративные сайты, интернет-магазины, CRM, много аналитики и&nbsp;поисковой оптимизации.
              </p>

              <p :class="$style.box__text">
                <b>И немного менеджмента:</b>
                реорганизация сервисной команды в&nbsp;проектные, настройка процессов,
                <NuxtLink to="/post/logics" target="_blank">всем аджайл</NuxtLink>.
              </p>

              <div>
                <b>
                  Сайт компании
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/13-15_int_g.gif" height="425" width="580" alt="">
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2012&nbsp;&mdash; 2013&nbsp;/ Unico Design</div>

            <button :class="buttonClassNames(5)" type="button" @click="toggleSection(5)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[5]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Adobe, Softimage XSI, Redmine
              </div>

              <p :class="$style.box__text">
                Веб-разработка
              </p>

              <div>
                <b>
                  Сайт для федеральной грузовой компании с&nbsp;CRM для публикации новостей и&nbsp;обработки клиентских
                  заявок.
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/12-13_RJD_g.gif" height="543" width="580" alt="">
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2009&nbsp;&mdash; 2012&nbsp;/ Vegas</div>

            <button :class="buttonClassNames(6)" type="button" @click="toggleSection(6)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[6]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Adobe
              </div>

              <p :class="$style.box__text">
                Сайты, CRM, SEO
              </p>


              <p :class="$style.box__text">
                Проектировали МИС с&nbsp;нуля до&nbsp;готового программного решения. Продукт обеспечивал полное
                информационное сопровождение деятельности частных клиник.
              </p>

              <div>
                <b>
                  Медицинская информационная система для клиник.
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/9-12_MIS_w.webp" height="503" width="580" alt="">

              <!-- <div :class="$style.box__subtitle">
                <b>
                  Технический дизайн/иллюстрация
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/9-12_Ill.png" height="318" width="580" alt=""> -->
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2007&nbsp;&mdash; 2008&nbsp;/ MTS Group&nbsp;&mdash; МультиКабельные Сети
            </div>

            <button :class="buttonClassNames(7)" type="button" @click="toggleSection(7)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[7]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Adobe
              </div>

              <p :class="$style.box__text">
                Дальневосточный телеком, выкупленный МТС-ом.
              </p>

              <div>
                <b>
                  Информационный портал для пользователей дальневосточного региона с&nbsp;локальными новостями, форумом,
                  афишей и&nbsp;прочим.
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/7-8_DV.png" height="505" width="580" alt="">

              <!-- <div :class="$style.box__subtitle">
                <b>
                  Иллюстрация
                </b>
              </div>

              <img :class="$style.box__image" src="/assets/cv/7-8_Ill.png" height="288" width="580" alt=""> -->
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2005&nbsp;&mdash; 2006&nbsp;/ Личный блог
            </div>

            <button :class="buttonClassNames(8)" type="button" @click="toggleSection(8)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[8]" :class="$style.box__content">
              <div :class="$style.box__caption">
                <b>Стек:</b>
                Adobe, Macromedia Flash, Actionscript
              </div>

              <div>
                <b>
                  Блог.
                </b>
                Тогда я&nbsp;думала, что анимэйшн и&nbsp;программинг&nbsp;&mdash; это&nbsp;то, чем занимается дизайнер.
                Итс олл информэйшн эбаут ми&nbsp;2006&nbsp;года.
              </div>

              <img :class="$style.box__image" src="/assets/cv/5-6_BLOG_g.gif" height="400" width="580" alt="">

              <div :class="$style.box__subtitle">
                <b>
                  Набор иконок 🥲
                </b>
              </div>

              <img :class="$style.box__icons" src="/assets/cv/5-6_icons.png" height="158" width="574" alt="">
            </div>
          </Transition>
        </li>

        <li>
          <div :class="$style.box__description">
            <div :class="$style.box__title">2001&nbsp;&mdash; 2022&nbsp;/ Училась&nbsp;/ Учила</div>

            <button :class="buttonClassNames(9)" type="button" @click="toggleSection(9)">
              <Arrow :class="$style.box__icon" height="10" width="16" />
            </button>
          </div>

          <Transition name="fade">
            <div v-if="newArr[9]" :class="$style.box__content">
              <div>
                <b>
                  Учила:
                </b>
                <br>
                2022&nbsp;&mdash; Приглашенный преподаватель ВШЭ. Дизайн цифровых продуктов.
                <br>
                2006&nbsp;&mdash; 2007&nbsp;&mdash; Приглашенный преподаватель ИрГУПС. Менеджмент.

                <br>
                <br>
                <b>
                  Училась:
                </b>
                <br>
                2006&nbsp;&mdash; 2010&nbsp;&mdash; Универ. Психология.
                <br>
                2006&nbsp;&mdash; 2009&nbsp;&mdash; Аспирантура. Менеджмент.
                <br>
                2001&nbsp;&mdash; 2006&nbsp;&mdash; Универ. Менеджмент и&nbsp;экономика.
              </div>

              <img :class="$style.box__image" src="/assets/cv/diploms.png" height="204" width="580" alt="">
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

.about {
  border-top: 2px solid var(--mild);
  padding: 25px 0 28px;

  &__header {
    padding-left: 140px;

    @media (max-width: 575px) {
      padding-left: 60px;
    }
  }

  &__divider {
    border-top: 2px solid var(--mild);
    padding-top: 28px;
    margin-top: 13px;

    .root_dark & {
      border-color: var(--medium);
    }
  }

  &__title {
    display: block;
    margin-bottom: 15px;
  }

  &__list {
    padding-left: 66px;

    @media (max-width: 575px) {
      padding-left: 20px;
    }
  }

  &__item {
    display: flex;
    align-items: start;

    &::before {
      content: '';
      height: 8px;
      width: 8px;
      background-color: var(--dark);
      border-radius: 50%;
      margin-right: 66px;
      flex-shrink: 0;
      margin-top: 10px;

      .root_dark & {
        background-color: var(--light);
      }

      @media (max-width: 575px) {
        margin-right: 32px;
      }
    }
  }

  &__block {
    margin-bottom: 15px;
  }

  &__warn {
    color: var(--blue);
    font-weight: 500;
    padding-left: 140px;
    padding-top: 10px;

    .root_dark & {
      color: var(--yellow);
    }

    @media (max-width: 575px) {
      padding-left: 60px;
    }
  }
}

.list {
  @include ui-bull-list;
  margin-top: 20px;

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

  &__link {
    font-weight: 500;
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
  }

  &__icon {
    height: 10px;
    width: 16px;
    fill: var(--blue);
    margin-left: 27px;
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

  &__actions {
    display: flex;
    justify-content: space-between;
    padding-right: 25px;
  }
}

.link {
  font-weight: 500;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 15px;
}

.feed {
  list-style-type: none;
}

.box {
  &__title {
    display: flex;
    align-items: center;
    padding-left: 66px;
    font-weight: 500;

    &::before {
      content: '';
      height: 8px;
      width: 8px;
      background-color: var(--dark);
      border-radius: 50%;
      margin-right: 66px;
      flex-shrink: 0;

      .root_dark & {
        background-color: var(--light);
      }

      @media (max-width: 575px) {
        margin-right: 32px;
      }
    }

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
    margin-bottom: 15px;
  }

  &__description {
    display: flex;
    align-items: center;
    position: relative;
    border-top: 2px solid var(--mild);
    padding: 29px 0 28px;
    padding-right: 25px;
    justify-content: space-between;

    .root_dark & {
      border-color: var(--medium);
    }
  }

  &__caption {
    margin-bottom: 14px;
    color: var(--medium)
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
    margin-top: 20px;
    display: block;
    width: 100%;
    height: auto;

    &_bordered {
      border: 1px solid var(--medium);

      .root_dark & {
        border: none;
      }
    }
  }

  &__content {
    border-top: 2px solid var(--mild);
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

    &:before {
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
  }

  &__duo {
    display: flex;
    gap: 4px;

    >div {
      width: calc(50% - 2px);
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
