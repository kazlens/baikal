<template>
  <div class="mobile-page" aria-label="Мобильная версия страницы">
    <section class="mobile-hero" aria-labelledby="mobile-hero-title">
      <div class="mobile-hero__title">
        <h1 id="mobile-hero-title" class="mobile-hero__heading">
          <span>КРУИЗЫ<br /></span>
          <span class="mobile-hero__heading-small">ПО БАЙКАЛУ</span>
        </h1>
        <p class="mobile-hero__heading mobile-hero__heading--shadow" aria-hidden="true">
          <span>КРУИЗЫ<br /></span>
          <span class="mobile-hero__heading-small">ПО БАЙКАЛУ</span>
        </p>
      </div>

      <div class="mobile-hero__bottom">
        <a class="mobile-hero__button" href="#mobile-routes">В путь!</a>
        <p class="mobile-hero__description">
          Байкал, который невозможно увидеть за одну поездку на машине
        </p>
      </div>
    </section>

    <div class="mobile-content">
    <section class="mobile-benefits" aria-labelledby="mobile-benefits-title">
      <h2 id="mobile-benefits-title" class="mobile-benefits__title">
        <span>Почему это </span><span class="mobile-benefits__title-accent">удобно</span><span>?</span>
      </h2>
      <p class="mobile-benefits__subtitle">Всё главное - в одном путешествии</p>

      <div class="mobile-benefits__list">
        <article v-for="item in benefits" :key="item.title" class="mobile-benefit-card">
          <h3 class="mobile-benefit-card__title">{{ item.title }}</h3>
          <p class="mobile-benefit-card__text">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="mobile-routes" class="mobile-routes" aria-labelledby="mobile-routes-title">
      <svg
        class="mobile-routes__wave"
        width="440"
        height="61"
        viewBox="0 0 440 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 30.6781C59.2613 7.27051 112.506 11.9593 142.31 20.2403C203.537 34.3452 369.102 83.8608 309.261 42.1098C249.42 0.358803 400.438 -1.94061 439 6.32334"
          stroke="white"
          stroke-width="5"
        />
      </svg>
      <h2 id="mobile-routes-title" class="mobile-routes__title">
        Выбери Байкал <br />под свой ритм:
      </h2>

      <div class="mobile-routes__list" aria-roledescription="carousel">
        <button class="mobile-routes__nav mobile-routes__nav--prev" type="button" aria-label="Предыдущий маршрут" @click="showPrevRoute">
          ‹
        </button>

        <div class="mobile-routes__viewport">
          <div class="mobile-routes__track" :style="{ transform: `translateX(-${activeMobileSlideIndex * 100}%)` }">
            <article
              v-for="route in mobileRoutes"
              :key="route.tab"
              class="mobile-route-slide"
              :aria-hidden="route.index !== activeMobileRoute?.index"
            >
              <div
                class="mobile-route-item"
                :class="{ 'mobile-route-item--active': route.index === selectedRouteIndex }"
              >
                <div class="mobile-route-details">
                  <p v-if="getRouteDetails(route.index)?.intro" class="mobile-route-details__intro">
                    {{ getRouteDetails(route.index)?.intro }}
                  </p>

                  <article
                    v-for="item in getRouteDetails(route.index)?.items"
                    :key="item.title"
                    class="mobile-route-detail"
                  >
                    <h3 v-if="item.title" class="mobile-route-detail__title" v-html="item.title" />
                    <img
                      v-if="item.image"
                      class="mobile-route-detail__image"
                      :src="item.image"
                      :alt="item.imageAlt"
                    />
                    <p class="mobile-route-detail__text">{{ item.text }}</p>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </div>

        <button class="mobile-routes__nav mobile-routes__nav--next" type="button" aria-label="Следующий маршрут" @click="showNextRoute">
          ›
        </button>

        <div class="mobile-routes__dots" aria-label="Выбор маршрута">
          <button
            v-for="(route, slideIndex) in mobileRoutes"
            :key="route.tab"
            class="mobile-routes__dot"
            :class="{ 'mobile-routes__dot--active': slideIndex === activeMobileSlideIndex }"
            type="button"
            :aria-label="`Показать ${route.tab}`"
            :aria-current="slideIndex === activeMobileSlideIndex"
            @click="showRouteSlide(slideIndex)"
          />
        </div>
      </div>
    </section>

    <div class="mobile-request-wave" aria-hidden="true">
      <svg width="446" height="102" viewBox="0 0 446 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.97448 82.3126C95.2576 -37.8007 423.746 102.822 250.283 98.82C76.8212 94.8181 374.691 -54.7494 350.922 26.7875C327.153 108.324 443.975 45.7961 443.975 45.7961"
          stroke="#FFFF92"
          stroke-width="5"
        />
      </svg>
    </div>

    <section class="mobile-request" aria-labelledby="mobile-request-title">
      <h2 id="mobile-request-title" class="mobile-request__title">
        Пора увидеть Байкал иначе:
      </h2>
      <form class="mobile-request__form" action="#" method="post">
        <label class="mobile-request__field" for="mobile-name">
          <input id="mobile-name" name="name" type="text" autocomplete="name" placeholder="Имя" aria-label="Имя" />
        </label>
        <label class="mobile-request__field" for="mobile-phone">
          <input
            id="mobile-phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            inputmode="tel"
            placeholder="Телефон"
            aria-label="Телефон"
          />
        </label>
        <button class="mobile-request__submit" type="submit">Оставить заявку</button>
      </form>
    </section>

    <section class="mobile-contacts" aria-labelledby="mobile-contacts-title">
      <h2 id="mobile-contacts-title" class="mobile-contacts__title">Наши контакты:</h2>
      <div class="mobile-contacts__links">
        <a class="mobile-contacts__link" href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
        <a class="mobile-contacts__link" href="tel:+70000000000">Позвонить</a>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import argadaRiverImage from '~/assets/img/argada-river.jpg'
import baikalValleyImage from '~/assets/img/baikal-valley.jpg'
import sergePillarsImage from '~/assets/img/serge-pillars.png'

type Benefit = {
  title: string
  text: string
  icon: string
}

type RouteItem = {
  tab: string
  title: string
  tags: string[]
  intro: string
  image: string
  imageAlt: string
  text: string
}

const props = defineProps<{
  benefits: Benefit[]
  routes: RouteItem[]
  selectedRouteIndex: number
}>()

type MobileRouteDetail = {
  intro?: string
  items: Array<{
    title: string
    text: string
    image?: string
    imageAlt?: string
  }>
}

const emit = defineEmits<{
  selectRoute: [index: number]
}>()

const activeMobileSlideIndex = ref(1)

const mobileRouteDetails: Record<number, MobileRouteDetail> = {
  0: {
    items: [
      {
        title: 'Круиз «Байкальские Дюны»',
        text: '5 дней — для тех, кто хочет увидеть Байкал ярко, но без длинного отпуска. Подходит для первого путешествия.',
      },
      {
        title: '',
        image: props.routes[0]?.image,
        imageAlt: 'Круиз «Байкальские Дюны»',
        text: 'Бухта Песчаная и соседняя бухта Академическая - одни из самых красивых мест на Байкале. С двух сторон бухты огибают живописные скалы – Большая и Малая Колокольня.',
      },
    ],
  },
  1: {
    intro: '8 дней — маршрут для тех, кто хочет пройти Байкал шире: от южных точек до северных природных жемчужин.',
    items: [
      {
        title: 'Круиз<br>«Вокруг Байкала<br>за 8 дней»',
        image: props.routes[1]?.image,
        imageAlt: 'Круиз «Вокруг Байкала за 8 дней»',
        text: 'За 8 дней вы пройдете по Байкалу почти 1200 км. и увидите не только все основные достопримечательности, но и самые заповедные места – Байкальский музей, остров Ольхон, Скалу Шаманка, остров Огой с буддийской Ступой Просветления, Ушканьи острова, Чивыркуйский залив, Хакусы, уединенную бухту Заворотная и живописную бухту Академическая.',
      },
    ],
  },
  2: {
    intro: '6–7 дней — много локаций, экскурсии, отдых на борту и достаточно времени, чтобы прочувствовать Байкал.',
    items: [
      {
        title: 'Этно-круиз<br>«По следам кочевников»',
        image: argadaRiverImage,
        imageAlt: 'Этно-круиз «По следам кочевников»',
        text: 'Во время путешествия вы познаете Байкал во всей его многогранности, познакомитесь с коренными народностями, которые проживают как на Западной стороне Байкала, так и на Восточной. Необычная атмосфера, в которую вы будете погружаться на протяжении всего времени точно не оставит никого равнодушным. Полное слияние с природой, культурой и уникальностью Прибайкалья позволит вам прочувствовать всю аутентичность священного озера Байкал.',
      },
      {
        title: 'Круиз<br>«Байкальская Одиссея»',
        image: sergePillarsImage,
        imageAlt: 'Круиз «Байкальская Одиссея»',
        text: 'Всего за 6 дней вы пройдете 860 км. по Байкалу и увидите главные достопримечательности озера – Байкальский музей, остров Ольхон, Скалу Шаманка, остров Огой с буддийской Ступой Просветления, Ушканьи острова, Чивыркуйский залив и живописную бухту Академическая.',
      },
      {
        title: 'Круиз<br>«Осенняя симфония Байкала»',
        image: baikalValleyImage,
        imageAlt: 'Круиз «Осенняя симфония Байкала»',
        text: '7-дневная круиз-экспедиция – проходит в самый разгар яркой байкальской осени. Маршрут в 870 км. включает самые знаковые места Байкала – остров Ольхон, остров Огой, Ушканьи острова, Чивыркуйский залив и бухту Академическая.',
      },
    ],
  },
  3: {
    items: [
      {
        title: '',
        text: 'Если вы не нашли подходящий круиз, мы поможем составить круиз из мест, которые вы хотите посетить.',
      },
    ],
  },
}

const getRouteDetails = (index: number) => mobileRouteDetails[index]

const mobileRoutes = computed(() => {
  const order = [2, 0, 1]

  return order
    .map((index) => {
      const route = props.routes[index]
      return route ? { ...route, index } : null
    })
    .filter((route): route is RouteItem & { index: number } => route !== null)
})

const activeMobileRoute = computed(() => mobileRoutes.value[activeMobileSlideIndex.value])

const showRouteSlide = (slideIndex: number) => {
  if (!mobileRoutes.value.length) {
    return
  }

  const maxIndex = mobileRoutes.value.length - 1
  activeMobileSlideIndex.value = Math.min(Math.max(slideIndex, 0), maxIndex)

  const route = activeMobileRoute.value
  if (route) {
    emit('selectRoute', route.index)
  }
}

const showPrevRoute = () => {
  if (!mobileRoutes.value.length) {
    return
  }

  showRouteSlide((activeMobileSlideIndex.value - 1 + mobileRoutes.value.length) % mobileRoutes.value.length)
}

const showNextRoute = () => {
  if (!mobileRoutes.value.length) {
    return
  }

  showRouteSlide((activeMobileSlideIndex.value + 1) % mobileRoutes.value.length)
}

watch(
  () => props.selectedRouteIndex,
  (index) => {
    const slideIndex = mobileRoutes.value.findIndex((route) => route.index === index)
    if (slideIndex >= 0) {
      activeMobileSlideIndex.value = slideIndex
    }
  },
)
</script>

<style scoped>
.mobile-page {
  display: none;
}

@media (max-width: 539px) {
  .mobile-page {
    display: block;
    width: 100%;
    min-width: 320px;
    overflow: hidden;
    color: #ffffff;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.06) 0%, rgba(4, 26, 38, 0.56) 58%, rgba(4, 26, 38, 0.84) 100%),
      url('~/assets/img/waves.jpg') center 930px / auto 82% no-repeat,
      #041a26;
    font-family: 'Jost', Arial, sans-serif;
  }

  .mobile-hero {
    display: flex;
    min-height: 936px;
    flex-direction: column;
    justify-content: space-between;
    padding: 74px 18px 28px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(3, 24, 38, 0.04) 58%, rgba(3, 24, 38, 0.34) 100%),
      url('~/assets/img/hero.jpg');
    background-size: auto 100%;
    background-position: 50% top;
  }

  .mobile-hero__title {
    position: relative;
    height: 205px;
  }

  .mobile-hero__heading {
    position: absolute;
    inset: 0;
    margin: 0;
    color: #ffffff;
    font-size: clamp(70px, 20vw, 88px);
    font-weight: 700;
    line-height: 0.94;
    text-align: center;
    letter-spacing: 0;
    text-shadow: 8px 0 5px rgba(20, 57, 89, 0.34);
    mix-blend-mode: overlay;
  }

  .mobile-hero__heading--shadow {
    opacity: 0.68;
    mix-blend-mode: normal;
    text-shadow: 8px 0 5px rgba(20, 57, 89, 0.46);
  }

  .mobile-hero__heading-small {
    font-size: clamp(44px, 13vw, 57px);
    line-height: 1.28;
  }

  .mobile-hero__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 29px;
  }

  .mobile-hero__button {
    display: inline-flex;
    min-width: 258px;
    min-height: 64px;
    align-items: center;
    justify-content: center;
    padding: 7px 28px;
    border: 1px solid #284662;
    border-radius: 17px;
    color: #284662;
    background: #ffffff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
    font-size: 34px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
  }

  .mobile-hero__description {
    width: min(390px, 100%);
    margin: 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.52;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.78);
  }

  .mobile-content {
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.04) 0%, rgba(4, 26, 38, 0.24) 45%, rgba(4, 26, 38, 0.64) 100%),
      url('~/assets/img/waves.jpg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center top;
  }

  .mobile-benefits {
    padding: 31px 14px 14px;
    background:
      linear-gradient(180deg, rgba(8, 47, 70, 0.16) 0%, rgba(4, 28, 42, 0.24) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center top;
  }

  .mobile-benefits__title {
    margin: 0;
    color: #ffffff;
    font-size: 37px;
    font-weight: 700;
    line-height: 1.12;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .mobile-benefits__title-accent {
    color: #ffff00;
  }

  .mobile-benefits__subtitle {
    margin: 28px 0 21px;
    color: #ffffff;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .mobile-benefits__list {
    display: grid;
    gap: 31px;
    justify-items: center;
  }

  .mobile-benefit-card {
    width: min(344px, calc(100vw - 48px));
    min-height: 100px;
    padding: 15px 18px 13px;
    border-radius: 8px;
    color: #284662;
    background: #ffffff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.32);
    text-align: center;
  }

  .mobile-benefit-card__title {
    margin: 0;
    color: #284662;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.18;
  }

  .mobile-benefit-card__text {
    margin: 8px 0 0;
    color: #000000;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.38;
  }

  .mobile-routes {
    position: relative;
    padding: 70px 20px 25px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.24) 0%, rgba(4, 26, 38, 0.58) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .mobile-routes__wave {
    position: absolute;
    top: 19px;
    left: 50%;
    width: min(440px, 122vw);
    height: auto;
    transform: translateX(-50%);
    opacity: 0.96;
  }

  .mobile-routes__title {
    position: relative;
    margin: 0;
    color: #ffffff;
    font-size: 35px;
    font-weight: 500;
    line-height: 1.35;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .mobile-routes__list {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "viewport"
      "dots";
    align-items: start;
    gap: 27px;
    margin-top: 7px;
  }

  .mobile-routes__viewport {
    grid-area: viewport;
    height: 455px;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: none;
  }

  .mobile-routes__track {
    display: flex;
    align-items: flex-start;
    transition: transform 320ms ease;
    will-change: transform;
  }

  .mobile-route-slide {
    display: flex;
    min-width: 100%;
    justify-content: center;
  }

  .mobile-route-item {
    display: grid;
    gap: 0;
    width: min(360px, 100%);
    border-radius: 7px;
    overflow: hidden;
    transform: translateX(-22px);
  }

  .mobile-route-item--active {
    outline: 0;
  }

  .mobile-routes__nav {
    position: absolute;
    z-index: 2;
    top: 338px;
    display: flex;
    width: 54px;
    height: 96px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0;
    color: #ffff66;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    cursor: pointer;
    font-size: 78px;
    font-weight: 300;
    line-height: 1;
    transform: translateY(-50%);
  }

  .mobile-routes__nav--prev {
    left: -24px;
  }

  .mobile-routes__nav--next {
    right: 6px;
  }

  .mobile-routes__dots {
    display: flex;
    grid-area: dots;
    justify-content: center;
    gap: 18px;
    margin-top: 0;
  }

  .mobile-routes__dot {
    width: 9px;
    height: 9px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: #ffff66;
    cursor: pointer;
    transition: width 180ms ease, background 180ms ease;
  }

  .mobile-routes__dot--active {
    width: 16px;
    height: 16px;
    background: #ffff66;
  }

  .mobile-routes__button {
    display: inline-flex;
    width: 100%;
    min-height: auto;
    align-items: center;
    justify-self: stretch;
    gap: 8px;
    padding: 18px 20px 10px;
    border: 0;
    border-radius: 13px 13px 0 0;
    color: #ffffff;
    background: #214150;
    box-shadow: none;
    cursor: pointer;
  }

  .mobile-routes__button--active {
    outline: 0;
  }

  .mobile-routes__button-icon {
    width: 0;
    height: 0;
    flex: 0 0 auto;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid #ffffff;
  }

  .mobile-routes__button-text {
    color: #ffffff;
    overflow-wrap: anywhere;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.15;
    text-transform: lowercase;
  }

  .mobile-route-details {
    display: grid;
    gap: 12px;
    overflow: visible;
    padding: 19px 16px 21px;
    border-radius: 7px;
    color: #ffff92;
    background: #214150;
  }

  .mobile-route-details__intro {
    margin: 0;
    color: #ffff92;
    font-size: 15.5px;
    font-weight: 300;
    line-height: 1.44;
  }

  .mobile-route-detail {
    display: grid;
    gap: 10px;
  }

  .mobile-route-detail__title {
    margin: 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
  }

  .mobile-route-detail__text {
    margin: 0;
    color: #ffff92;
    font-size: 15.5px;
    font-weight: 300;
    line-height: 1.43;
  }

  .mobile-route-detail__image {
    width: 184px;
    justify-self: center;
    aspect-ratio: 1 / 1;
    border-radius: 11px;
    object-fit: cover;
  }

  .mobile-request {
    padding: 31px 23px 35px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.54) 0%, rgba(4, 26, 38, 0.72) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .mobile-request-wave {
    display: flex;
    justify-content: center;
    padding: 13px 0 0;
    overflow: hidden;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.58) 0%, rgba(4, 26, 38, 0.54) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .mobile-request-wave svg {
    width: min(446px, 122vw);
    height: auto;
    flex: 0 0 auto;
  }

  .mobile-request__title,
  .mobile-contacts__title {
    margin: 0;
    color: #ffffff;
    font-size: 34px;
    font-weight: 500;
    line-height: 1.31;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.74);
  }

  .mobile-request__form {
    display: grid;
    gap: 28px;
    width: min(368px, 100%);
    margin: 31px auto 0;
  }

  .mobile-request__field {
    display: flex;
    min-height: 67px;
    align-items: center;
    padding: 0 25px;
    border-radius: 17px;
    background: #ffffff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  .mobile-request__field input {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    color: #000000;
    background: transparent;
    font-size: 29px;
    font-weight: 300;
    line-height: 1.2;
  }

  .mobile-request__field input::placeholder {
    color: rgba(0, 0, 0, 0.72);
    opacity: 1;
  }

  .mobile-request__submit {
    min-height: 67px;
    border: 0;
    border-radius: 17px;
    color: #000000;
    background: #ffff00;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
    font-size: 29px;
    font-weight: 400;
    line-height: 1.2;
    cursor: pointer;
  }

  .mobile-contacts {
    padding: 26px 23px 55px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.72) 0%, rgba(4, 26, 38, 0.86) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center bottom;
  }

  .mobile-contacts__links {
    display: grid;
    gap: 15px;
    width: min(300px, 100%);
    margin: 29px auto 0;
  }

  .mobile-contacts__link {
    display: flex;
    min-height: 58px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.86);
    border-radius: 999px;
    color: #ffffff;
    background: rgba(40, 70, 98, 0.92);
    font-size: 30px;
    font-weight: 300;
    line-height: 1.2;
    text-decoration: none;
  }

  .mobile-benefits,
  .mobile-routes,
  .mobile-request-wave,
  .mobile-request,
  .mobile-contacts {
    background: transparent;
  }
}
</style>
