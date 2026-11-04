<template>
  <div class="route-card">
    <article v-for="card in cards" :key="card.title" class="route-card__item">
      <h3 class="route-card__title">
        <span class="route-card__title-text">{{ card.title }}</span>
      </h3>
      <div v-if="card.tags?.length" class="route-card__tags" aria-label="Характеристики маршрута">
        <div
          v-for="(tag, tagIndex) in card.tags"
          :key="tag"
          class="route-card__tag"
          :class="{ 'route-card__tag--primary': tagIndex === 0 }"
        >
          <div class="route-card__tag-text">{{ tag }}</div>
        </div>
      </div>
      <p v-if="card.intro" class="route-card__intro">{{ card.intro }}</p>
      <img class="route-card__image" :src="card.image" :alt="card.imageAlt" />
      <p v-if="card.text" class="route-card__text">{{ card.text }}</p>
    </article>
    <div class="route-card__footer">
      <a class="button button--primary route-card__button" href="#contact">
        <span class="route-card__button-text">Узнать подробнее</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DesktopRouteCard } from '~/data/routes'

defineProps<{
  cards: DesktopRouteCard[]
}>()
</script>

<style scoped>
.route-card {
  max-height: 655px;
  min-height: 655px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 17px 16.8px 16px;
  position: relative;
  flex: 1;
  background-color: #ffffff;
  border-radius: 10.4px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: #284662 rgba(40, 70, 98, 0.14);
  scrollbar-width: thin;
  z-index: 1;
}

.route-card::-webkit-scrollbar {
  width: 6px;
}

.route-card::-webkit-scrollbar-track {
  border-radius: 999px;
  background: rgba(40, 70, 98, 0.14);
}

.route-card::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: #284662;
}

.route-card__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 11px;
}

.route-card__title {
  position: relative;
  width: fit-content;
  font-weight: 400;
  color: #000000;
  font-size: 28px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
}

.route-card__title-text {
  font-weight: 400;
  color: #000000;
  font-size: 28px;
  letter-spacing: 0;
}

.route-card__tags {
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  position: relative;
  flex: 0 0 auto;
  flex-wrap: wrap;
}

.route-card__tag {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 13px;
  position: relative;
  flex: 0 0 auto;
  border-radius: 999px;
}

.route-card__tag--primary {
  background-color: #437eb5;
}

.route-card__tag:not(.route-card__tag--primary) {
  border: 0.8px solid #284662;
}

.route-card__tag-text {
  position: relative;
  width: fit-content;
  font-weight: 500;
  font-size: 13.6px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
}

.route-card__tag--primary .route-card__tag-text {
  color: #ffffff;
}

.route-card__tag:not(.route-card__tag--primary) .route-card__tag-text {
  color: #284662;
}

.route-card__intro {
  position: relative;
  align-self: stretch;
  font-weight: 400;
  color: #1f3c58;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 1.35;
}

.route-card__image {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 306px;
  border-radius: 6.4px;
  object-fit: cover;
}

.route-card__text {
  position: relative;
  align-self: stretch;
  font-weight: 400;
  color: #1f3c58;
  font-size: 15.6px;
  letter-spacing: 0;
  line-height: 1.36;
}

.route-card__footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
  width: 100%;
  margin-top: auto;
  flex: 0 0 auto;
  border-radius: 10.4px;
}

.route-card__button {
  padding: 11px 21px;
  margin-top: -0.8px;
  margin-bottom: -0.8px;
  margin-right: -0.8px;
  background-color: #284662;
}

.route-card__button-text {
  position: relative;
  align-self: stretch;
  margin-top: -0.4px;
  font-weight: 500;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
}
</style>
