<template>
  <div class="mobile-route-item">
    <div class="mobile-route-details">
      <article v-for="item in card.items" :key="item.text" class="mobile-route-detail">
        <h3 v-if="item.titleLines.length" class="mobile-route-detail__title">
          <template v-for="(line, lineIndex) in item.titleLines" :key="line">
            <br v-if="lineIndex" />{{ line }}
          </template>
        </h3>
        <p v-if="card.intro" class="mobile-route-details__intro">{{ card.intro }}</p>

        <img v-if="item.image" class="mobile-route-detail__image" :src="item.image" :alt="item.imageAlt" />
        <p class="mobile-route-detail__text">{{ item.text }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MobileRouteCard } from '~/data/routes'

defineProps<{
  card: MobileRouteCard
}>()
</script>

<style scoped>
.mobile-route-item {
  display: grid;
  gap: 0;
  width: min(360px, 100%);
  max-height: 100%;
  border-radius: 7px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(12px) scale(0.96);
  transition:
    opacity 520ms ease,
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.mobile-route-slide.swiper-slide-active .mobile-route-item {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.mobile-route-slide.swiper-slide-prev .mobile-route-item {
  opacity: 0.42;
  transform: translateX(-10px) scale(0.94);
}

.mobile-route-slide.swiper-slide-next .mobile-route-item {
  opacity: 0.42;
  transform: translateX(10px) scale(0.94);
}

.mobile-route-details {
  display: grid;
  gap: 12px;
  max-height: 515px;
  overflow-y: auto;
  padding: 19px 16px 21px;
  border-radius: 7px;
  color: #ffff92;
  background: #214150;
  scrollbar-color: #ffff66 rgba(255, 255, 255, 0.16);
  scrollbar-width: thin;
}

.mobile-route-details::-webkit-scrollbar {
  width: 6px;
}

.mobile-route-details::-webkit-scrollbar-track {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
}

.mobile-route-details::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: #ffff66;
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
</style>
