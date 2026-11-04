<template>
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
</template>

<script setup lang="ts">
import { benefits } from '~/data/benefits'
</script>

<style scoped>
.mobile-benefits {
  padding: 31px 14px 14px;
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
</style>
