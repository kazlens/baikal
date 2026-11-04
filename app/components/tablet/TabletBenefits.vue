<template>
  <section class="tablet-benefits" aria-labelledby="tablet-benefits-title">
    <div class="tablet-benefits__inner">
      <h2 id="tablet-benefits-title" class="tablet-benefits__title">
        <span>Почему это </span><span class="tablet-benefits__title-accent">удобно</span><span>?</span>
      </h2>
      <p class="tablet-benefits__subtitle">Всё главное — в одном путешествии</p>

      <div class="tablet-benefits__grid">
        <article v-for="item in benefits" :key="item.title" class="tablet-benefit-card">
          <div class="tablet-benefit-card__icon" aria-hidden="true">
            <component :is="item.outlineIcon" />
          </div>
          <h3 class="tablet-benefit-card__title">{{ item.title }}</h3>
          <p class="tablet-benefit-card__text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { benefits } from '~/data/benefits'
</script>

<style scoped>
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
</style>
