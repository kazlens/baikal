<template>
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
      <button class="mobile-routes__nav mobile-routes__nav--prev" type="button" aria-label="Предыдущий маршрут" @click="showPrevSlide">
        ‹
      </button>

      <Swiper
        class="mobile-routes__swiper"
        v-bind="swiperOptions"
        :initial-slide="activeSlideIndex"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide
          v-for="route in carouselRoutes"
          :key="route.id"
          class="mobile-route-slide"
          :aria-hidden="route.id !== activeRoute?.id"
        >
          <MobileRouteCard :card="route.mobileCard" />
        </SwiperSlide>
      </Swiper>

      <button class="mobile-routes__nav mobile-routes__nav--next" type="button" aria-label="Следующий маршрут" @click="showNextSlide">
        ›
      </button>

      <div class="mobile-routes__dots" aria-label="Выбор маршрута">
        <button
          v-for="(route, slideIndex) in carouselRoutes"
          :key="route.id"
          class="mobile-routes__dot"
          :class="{ 'mobile-routes__dot--active': slideIndex === activeSlideIndex }"
          type="button"
          :aria-label="`Показать ${route.tab}`"
          :aria-current="slideIndex === activeSlideIndex"
          @click="showSlide(slideIndex)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { carouselRoutes } from '~/data/routes'

const {
  swiperOptions,
  activeSlideIndex,
  activeRoute,
  showSlide,
  showPrevSlide,
  showNextSlide,
  onSwiper,
  onSlideChange,
} = useRouteCarousel()
</script>

<style scoped>
.mobile-routes {
  position: relative;
  padding: 70px 20px 25px;
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

.mobile-routes__swiper {
  grid-area: viewport;
  width: min(272px, calc(100vw - 104px));
  height: 515px;
  justify-self: center;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: none;
}

.mobile-routes__swiper :deep(.swiper-wrapper) {
  align-items: stretch;
}

.mobile-route-slide {
  display: flex;
  height: 100%;
  justify-content: center;
}

.mobile-routes__nav {
  position: absolute;
  z-index: 2;
  top: 248px;
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
</style>
