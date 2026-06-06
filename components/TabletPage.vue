<template>
  <div class="tablet-page" aria-label="Планшетная версия страницы">
    <section class="tablet-hero" aria-labelledby="tablet-hero-title">
      <header class="tablet-hero__title">
        <h1 id="tablet-hero-title" class="tablet-hero__heading">
          <span>КРУИЗЫ<br /></span>
          <span class="tablet-hero__heading-small">ПО БАЙКАЛУ</span>
        </h1>
        <p class="tablet-hero__heading tablet-hero__heading--shadow" aria-hidden="true">
          <span>КРУИЗЫ<br /></span>
          <span class="tablet-hero__heading-small">ПО БАЙКАЛУ</span>
        </p>
      </header>

      <div class="tablet-hero__content">
        <a class="tablet-hero__button" href="#tablet-routes">Смотреть маршруты</a>
        <p class="tablet-hero__description">
          Байкал, который невозможно увидеть <br />за одну поездку на машине
        </p>
      </div>
    </section>

    <section class="tablet-benefits" aria-labelledby="tablet-benefits-title">
      <div class="tablet-benefits__inner">
        <h2 id="tablet-benefits-title" class="tablet-benefits__title">
          <span>Почему это </span><span class="tablet-benefits__title-accent">удобно</span><span>?</span>
        </h2>
        <p class="tablet-benefits__subtitle">Всё главное — в одном путешествии</p>

        <div class="tablet-benefits__grid">
          <article v-for="(item, index) in benefits" :key="item.title" class="tablet-benefit-card">
            <div class="tablet-benefit-card__icon" aria-hidden="true" v-html="tabletBenefitIcons[index]" />
            <h3 class="tablet-benefit-card__title">{{ item.title }}</h3>
            <p class="tablet-benefit-card__text">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="tablet-routes" class="tablet-routes" aria-labelledby="tablet-routes-title">
      <div class="tablet-routes__overlay" aria-hidden="true" />

      <h2 id="tablet-routes-title" class="tablet-routes__title">
        <span>Выбери Байкал под </span><span class="tablet-routes__title-accent">свой ритм</span><span>:</span>
      </h2>

      <div class="tablet-routes__carousel" aria-roledescription="carousel">
        <button class="tablet-routes__nav tablet-routes__nav--prev" type="button" aria-label="Предыдущий маршрут" @click="showPrevRoute">
          ‹
        </button>

        <Swiper
          class="tablet-routes__swiper"
          :initial-slide="activeTabletSlideIndex"
          :slides-per-view="1"
          :speed="520"
          :allow-touch-move="true"
          :auto-height="false"
          :grab-cursor="true"
          :observer="true"
          :observe-parents="true"
          @swiper="onTabletSwiper"
          @slide-change="onTabletSlideChange"
        >
          <SwiperSlide v-for="route in tabletRoutes" :key="route.tab" class="tablet-route-slide">
            <article class="tablet-route-card">
              <h3 class="tablet-route-card__title">{{ route.title }}</h3>

              <div class="tablet-route-card__tags" aria-label="Характеристики маршрута">
                <span
                  v-for="(tag, index) in route.tags"
                  :key="tag"
                  class="tablet-route-card__tag"
                  :class="{ 'tablet-route-card__tag--primary': index === 0 }"
                >
                  {{ tag }}
                </span>
              </div>

              <p class="tablet-route-card__intro">{{ route.intro }}</p>
              <img class="tablet-route-card__image" :src="route.image" :alt="route.imageAlt" />
              <p class="tablet-route-card__text">{{ route.text }}</p>

              <footer class="tablet-route-card__footer">
                <a class="tablet-route-card__button" href="#tablet-contact">Узнать подробнее</a>
              </footer>
            </article>
          </SwiperSlide>
        </Swiper>

        <button class="tablet-routes__nav tablet-routes__nav--next" type="button" aria-label="Следующий маршрут" @click="showNextRoute">
          ›
        </button>

        <div class="tablet-routes__dots" aria-label="Выбор маршрута">
          <button
            v-for="(route, slideIndex) in tabletRoutes"
            :key="route.tab"
            class="tablet-routes__dot"
            :class="{ 'tablet-routes__dot--active': slideIndex === activeTabletSlideIndex }"
            type="button"
            :aria-label="`Показать ${route.tab}`"
            :aria-current="slideIndex === activeTabletSlideIndex"
            @click="showRouteSlide(slideIndex)"
          />
        </div>
      </div>
    </section>

    <section id="tablet-contact" class="tablet-contact" aria-labelledby="tablet-contact-title">
      <h2 id="tablet-contact-title" class="tablet-contact__title">Пора увидеть Байкал иначе:</h2>

      <form class="tablet-contact__form" action="#" method="post">
        <label class="tablet-contact__field" for="tablet-name">
          <input id="tablet-name" name="name" type="text" autocomplete="name" placeholder="Имя" aria-label="Имя" />
        </label>
        <label class="tablet-contact__field" for="tablet-phone">
          <input
            id="tablet-phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            inputmode="tel"
            placeholder="Телефон"
            aria-label="Телефон"
          />
        </label>
        <button class="tablet-contact__submit" type="submit">Связаться с нами</button>
      </form>

      <address class="tablet-contact__address">
        <div class="tablet-contact__address-title">Наши контакты:</div>
        <div class="tablet-contact__links">
          <a class="tablet-contact__link" href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
          <a class="tablet-contact__link" href="tel:+70000000000">Позвонить</a>
        </div>
      </address>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

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

const emit = defineEmits<{
  selectRoute: [index: number]
}>()

const activeTabletSlideIndex = ref(1)
const tabletSwiper = shallowRef<SwiperInstance | null>(null)
const isTabletSwiperReady = ref(false)

const tabletBenefitIcons = [
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6.5L9 4l6 2.5 5-2.5v13.5L15 20l-6-2.5L4 20V6.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 4v13.5M15 6.5V20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13h14l-2.2 4.4a2 2 0 0 1-1.8 1.1H9a2 2 0 0 1-1.8-1.1L5 13Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 13V8.5h6.5l2 4.5M7 20c1.4 0 1.4-1 2.8-1s1.4 1 2.8 1 1.4-1 2.8-1S18 20 19.4 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="M14.9 9.1l-1.8 4-4 1.8 1.8-4 4-1.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM4 19.5c.6-3.3 3-5 6.5-5 1.2 0 2.2.2 3.1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15 17.3l2 2 4-4.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
]

const tabletRoutes = computed(() => {
  const order = [2, 0, 1]

  return order
    .map((index) => {
      const route = props.routes[index]
      return route ? { ...route, index } : null
    })
    .filter((route): route is RouteItem & { index: number } => route !== null)
})

const getBoundedTabletSlideIndex = (slideIndex: number) => {
  const maxIndex = tabletRoutes.value.length - 1
  return Math.min(Math.max(slideIndex, 0), maxIndex)
}

const updateTabletRouteSelection = (slideIndex: number) => {
  if (!tabletRoutes.value.length) {
    return
  }

  activeTabletSlideIndex.value = getBoundedTabletSlideIndex(slideIndex)

  const route = tabletRoutes.value[activeTabletSlideIndex.value]
  if (route && props.selectedRouteIndex !== route.index) {
    emit('selectRoute', route.index)
  }
}

const showRouteSlide = (slideIndex: number, speed = 520) => {
  if (!tabletRoutes.value.length) {
    return
  }

  const nextSlideIndex = getBoundedTabletSlideIndex(slideIndex)

  if (tabletSwiper.value && tabletSwiper.value.activeIndex !== nextSlideIndex) {
    tabletSwiper.value.slideTo(nextSlideIndex, speed)
    return
  }

  updateTabletRouteSelection(nextSlideIndex)
}

const showPrevRoute = () => {
  if (!tabletRoutes.value.length) {
    return
  }

  showRouteSlide((activeTabletSlideIndex.value - 1 + tabletRoutes.value.length) % tabletRoutes.value.length)
}

const showNextRoute = () => {
  if (!tabletRoutes.value.length) {
    return
  }

  showRouteSlide((activeTabletSlideIndex.value + 1) % tabletRoutes.value.length)
}

const onTabletSwiper = (swiper: SwiperInstance) => {
  tabletSwiper.value = swiper
  requestAnimationFrame(() => {
    swiper.update()
    swiper.slideTo(activeTabletSlideIndex.value, 0)
    isTabletSwiperReady.value = true
    updateTabletRouteSelection(activeTabletSlideIndex.value)
  })
}

const onTabletSlideChange = (swiper: SwiperInstance) => {
  if (!isTabletSwiperReady.value) {
    return
  }

  updateTabletRouteSelection(swiper.activeIndex)
}

watch(
  () => props.selectedRouteIndex,
  (index) => {
    const slideIndex = tabletRoutes.value.findIndex((route) => route.index === index)
    if (slideIndex >= 0) {
      activeTabletSlideIndex.value = slideIndex
      tabletSwiper.value?.slideTo(slideIndex, 0)
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.tablet-page {
  display: none;
}

@media (min-width: 540px) and (max-width: 1056px) {
  .tablet-page {
    display: block;
    width: 100%;
    min-width: 540px;
    overflow: hidden;
    color: #ffffff;
    background: #031d2b;
    font-family: 'Jost', Arial, sans-serif;
  }

  .tablet-hero {
    display: flex;
    min-height: 552px;
    flex-direction: column;
    justify-content: space-between;
    padding: 42px 32px 52px;
    background:
      linear-gradient(180deg, rgba(14, 38, 62, 0.18) 0%, rgba(14, 38, 62, 0.16) 52%, rgba(14, 38, 62, 0.48) 100%),
      url('~/assets/img/hero.jpg');
    background-size: cover;
    background-position: center top;
  }

  .tablet-hero__title {
    position: relative;
    height: 176px;
  }

  .tablet-hero__heading {
    position: absolute;
    inset: 0;
    margin: 0;
    color: #ffffff;
    font-size: clamp(78px, 11.3vw, 95px);
    font-weight: 700;
    line-height: 0.92;
    text-align: center;
    letter-spacing: 0;
    text-shadow: 11px 0 5px rgba(20, 57, 89, 0.38);
    mix-blend-mode: overlay;
  }

  .tablet-hero__heading--shadow {
    opacity: 0.58;
    mix-blend-mode: normal;
    text-shadow: 11px 0 5px rgba(20, 57, 89, 0.48);
  }

  .tablet-hero__heading-small {
    font-size: clamp(50px, 7vw, 59px);
    line-height: 1.28;
  }

  .tablet-hero__content {
    display: grid;
    justify-items: center;
    gap: 29px;
  }

  .tablet-hero__button {
    display: inline-flex;
    min-width: 283px;
    min-height: 57px;
    align-items: center;
    justify-content: center;
    padding: 12px 34px;
    border: 1px solid #284662;
    border-radius: 8px;
    color: #284662;
    background: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.24);
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
  }

  .tablet-hero__description {
    width: min(440px, 100%);
    margin: 0;
    color: #ffffff;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.45;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .tablet-benefits {
    min-height: 548px;
    padding: 56px 32px 28px;
    background:
      linear-gradient(180deg, rgba(20, 57, 89, 0.55) 0%, rgba(20, 57, 89, 0.35) 45%, rgba(4, 26, 38, 0.2) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .tablet-benefits__inner {
    display: grid;
    justify-items: center;
  }

  .tablet-benefits__title {
    margin: 0;
    color: #ffffff;
    font-size: clamp(43px, 6vw, 51px);
    font-weight: 500;
    line-height: 1.1;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.78);
  }

  .tablet-benefits__title-accent {
    color: #ffff00;
  }

  .tablet-benefits__subtitle {
    margin: 11px 0 21px;
    color: #ffffff;
    font-size: clamp(29px, 4.2vw, 35px);
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.74);
  }

  .tablet-benefits__grid {
    display: grid;
    width: min(520px, calc(100vw - 96px));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 32px;
  }

  .tablet-benefit-card {
    display: grid;
    min-height: 147px;
    align-content: start;
    justify-items: center;
    padding: 14px 20px 13px;
    border-radius: 7px;
    color: #284662;
    background: #ffffff;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.28);
    text-align: center;
  }

  .tablet-benefit-card__icon {
    display: grid;
    width: 32px;
    height: 32px;
    place-items: center;
    margin-bottom: 9px;
    border-radius: 999px;
    color: #284662;
    background: #ffff66;
  }

  .tablet-benefit-card__icon :deep(svg) {
    width: 20px;
    height: 20px;
  }

  .tablet-benefit-card__title {
    margin: 0;
    color: #284662;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.24;
  }

  .tablet-benefit-card__text {
    margin: 7px 0 0;
    color: #000000;
    font-size: 11.5px;
    font-weight: 400;
    line-height: 1.32;
  }

  .tablet-routes {
    position: relative;
    min-height: 557px;
    padding: 29px 32px 27px;
    background-image: url('~/assets/img/mountains.png');
    background-size: cover;
    background-position: center;
  }

  .tablet-routes__overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(180deg, rgba(0, 29, 40, 0.93) 0%, rgba(0, 29, 40, 0.78) 20%, rgba(0, 29, 40, 0.18) 50%, rgba(0, 29, 40, 0.62) 100%),
      rgba(8, 30, 40, 0.12);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  .tablet-routes__title {
    position: relative;
    z-index: 1;
    margin: 0;
    color: #ffffff;
    font-size: clamp(39px, 5.6vw, 47px);
    font-weight: 500;
    line-height: 1.18;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.78);
  }

  .tablet-routes__title-accent {
    color: #ffff66;
  }

  .tablet-routes__carousel {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: center;
    margin-top: 8px;
  }

  .tablet-routes__swiper {
    width: min(391px, calc(100vw - 196px));
    height: 466px;
    overflow: hidden;
  }

  .tablet-routes__swiper :deep(.swiper-wrapper) {
    align-items: stretch;
  }

  .tablet-route-slide {
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .tablet-route-card {
    display: grid;
    grid-template-rows: auto auto auto auto minmax(0, 1fr) auto;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 15px 17px 12px;
    border-radius: 7px;
    color: #1f3c58;
    background: #ffffff;
    box-shadow: 0 4px 13px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(12px) scale(0.96);
    transition:
      opacity 520ms ease,
      transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 520ms ease;
    scrollbar-color: #284662 rgba(40, 70, 98, 0.14);
    scrollbar-width: thin;
    will-change: opacity, transform;
  }

  .tablet-route-card::-webkit-scrollbar {
    width: 6px;
  }

  .tablet-route-card::-webkit-scrollbar-track {
    border-radius: 999px;
    background: rgba(40, 70, 98, 0.14);
  }

  .tablet-route-card::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #284662;
  }

  .tablet-route-slide.swiper-slide-active .tablet-route-card {
    opacity: 1;
    transform: translateY(0) scale(1);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.34);
  }

  .tablet-route-slide.swiper-slide-prev .tablet-route-card {
    opacity: 0.42;
    transform: translateX(-12px) scale(0.94);
  }

  .tablet-route-slide.swiper-slide-next .tablet-route-card {
    opacity: 0.42;
    transform: translateX(12px) scale(0.94);
  }

  .tablet-route-card__title {
    margin: 0;
    color: #000000;
    font-size: 23px;
    font-weight: 400;
    line-height: 1.18;
    text-align: center;
  }

  .tablet-route-card__tags {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 9px;
    flex-wrap: wrap;
  }

  .tablet-route-card__tag {
    display: inline-flex;
    min-height: 18px;
    align-items: center;
    justify-content: center;
    padding: 2px 12px;
    border: 1px solid #284662;
    border-radius: 999px;
    color: #284662;
    font-size: 8px;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
  }

  .tablet-route-card__tag--primary {
    border-color: #437eb5;
    color: #ffffff;
    background: #437eb5;
  }

  .tablet-route-card__intro {
    margin: 10px 0 0;
    color: #1f3c58;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.34;
  }

  .tablet-route-card__image {
    width: 100%;
    height: 188px;
    margin-top: 11px;
    border-radius: 6px;
    object-fit: cover;
  }

  .tablet-route-card__text {
    margin: 11px 0 0;
    color: #1f3c58;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.34;
  }

  .tablet-route-card__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .tablet-route-card__button {
    display: inline-flex;
    min-width: 128px;
    min-height: 34px;
    align-items: center;
    justify-content: center;
    padding: 8px 15px;
    border-radius: 6px;
    color: #ffffff;
    background: #284662;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
  }

  .tablet-routes__nav {
    position: absolute;
    top: 174px;
    z-index: 2;
    display: grid;
    width: 70px;
    height: 100px;
    place-items: center;
    border: 0;
    color: #ffff66;
    background: transparent;
    cursor: pointer;
    font-size: 86px;
    font-weight: 300;
    line-height: 1;
  }

  .tablet-routes__nav--prev {
    left: max(28px, calc(50% - 300px));
  }

  .tablet-routes__nav--next {
    right: max(28px, calc(50% - 300px));
  }

  .tablet-routes__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 9px;
  }

  .tablet-routes__dot {
    width: 7px;
    height: 7px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: #ffff66;
    cursor: pointer;
  }

  .tablet-routes__dot--active {
    width: 12px;
    height: 12px;
  }

  .tablet-contact {
    display: grid;
    min-height: 505px;
    justify-items: center;
    align-content: start;
    padding: 78px 32px 56px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.04) 0%, rgba(4, 26, 38, 0.34) 46%, rgba(4, 26, 38, 0.72) 100%),
      url('~/assets/img/ice.webp');
    background-size: cover;
    background-position: center bottom;
  }

  .tablet-contact__title {
    margin: 0;
    color: #ffffff;
    font-size: clamp(37px, 5.4vw, 45px);
    font-weight: 500;
    line-height: 1.18;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.78);
  }

  .tablet-contact__form {
    display: grid;
    gap: 26px;
    width: min(260px, 100%);
    margin-top: 39px;
  }

  .tablet-contact__field {
    display: flex;
    min-height: 46px;
    align-items: center;
    padding: 0 20px;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.24);
  }

  .tablet-contact__field input {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    color: #000000;
    background: transparent;
    font-size: 19px;
    font-weight: 300;
    line-height: 1.2;
  }

  .tablet-contact__field input::placeholder {
    color: rgba(0, 0, 0, 0.68);
    opacity: 1;
  }

  .tablet-contact__submit {
    min-height: 48px;
    border: 0;
    border-radius: 0;
    color: #000000;
    background: #ffff66;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.24);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    cursor: pointer;
  }

  .tablet-contact__address {
    display: grid;
    justify-items: center;
    gap: 13px;
    margin-top: 27px;
    font-style: normal;
  }

  .tablet-contact__address-title {
    color: #ffffff;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .tablet-contact__links {
    display: grid;
    gap: 12px;
    justify-items: center;
  }

  .tablet-contact__link {
    color: #ffffff;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.2;
    text-decoration: underline;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }
}
</style>
