<template>
  <section id="tablet-routes" class="tablet-routes" aria-labelledby="tablet-routes-title">
    <div class="tablet-routes__overlay" aria-hidden="true" />

    <h2 id="tablet-routes-title" class="tablet-routes__title">
      <span>Выбери Байкал под </span><span class="tablet-routes__title-accent">свой ритм</span><span>:</span>
    </h2>

    <div class="tablet-routes__carousel" aria-roledescription="carousel">
      <button class="tablet-routes__nav tablet-routes__nav--prev" type="button" aria-label="Предыдущий маршрут" @click="showPrevSlide">
        ‹
      </button>

      <Swiper
        class="tablet-routes__swiper"
        v-bind="swiperOptions"
        :initial-slide="activeSlideIndex"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="route in carouselRoutes" :key="route.id" class="tablet-route-slide">
          <TabletRouteCard :card="route.tabletCard" />
        </SwiperSlide>
      </Swiper>

      <button class="tablet-routes__nav tablet-routes__nav--next" type="button" aria-label="Следующий маршрут" @click="showNextSlide">
        ›
      </button>

      <div class="tablet-routes__dots" aria-label="Выбор маршрута">
        <button
          v-for="(route, slideIndex) in carouselRoutes"
          :key="route.id"
          class="tablet-routes__dot"
          :class="{ 'tablet-routes__dot--active': slideIndex === activeSlideIndex }"
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
  showSlide,
  showPrevSlide,
  showNextSlide,
  onSwiper,
  onSlideChange,
} = useRouteCarousel()
</script>

<style scoped>
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
</style>
