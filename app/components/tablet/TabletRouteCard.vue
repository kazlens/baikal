<template>
  <article class="tablet-route-card">
    <h3 class="tablet-route-card__title">{{ card.title }}</h3>

    <div class="tablet-route-card__tags" aria-label="Характеристики маршрута">
      <span
        v-for="(tag, index) in card.tags"
        :key="tag"
        class="tablet-route-card__tag"
        :class="{ 'tablet-route-card__tag--primary': index === 0 }"
      >
        {{ tag }}
      </span>
    </div>

    <p class="tablet-route-card__intro">{{ card.intro }}</p>
    <img class="tablet-route-card__image" :src="card.image" :alt="card.imageAlt" />
    <p class="tablet-route-card__text">{{ card.text }}</p>

    <footer class="tablet-route-card__footer">
      <a class="tablet-route-card__button" href="#tablet-contact">Узнать подробнее</a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { TabletRouteCard } from '~/data/routes'

defineProps<{
  card: TabletRouteCard
}>()
</script>

<style scoped>
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
</style>
