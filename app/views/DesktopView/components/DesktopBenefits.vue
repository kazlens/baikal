<template>
  <section class="benefits" aria-labelledby="advantages-title">
    <div class="benefits__inner">
      <header class="benefits__header">
        <h2 id="advantages-title" class="section-title benefits__title">
          <span class="section-title__text">Почему это </span>
          <span class="section-title__accent">удобно</span>
          <span class="section-title__text">?</span>
        </h2>
        <p class="benefits__subtitle">Всё главное — в одном путешествии</p>
      </header>

      <div class="benefits__grid">
        <article v-for="item in benefits" :key="item.title" class="benefit-card">
          <div class="benefit-card__icon" aria-hidden="true">
            <component :is="item.icon" />
          </div>
          <h3 class="benefit-card__title">{{ item.title }}</h3>
          <p class="benefit-card__text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { benefits } from '~/data/benefits'
</script>

<style scoped>
.benefits {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1026.4px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  position: relative;
  background-image:
    linear-gradient(
      180deg,
      rgba(33, 62, 91, 0.81) 0%,
      rgba(33, 81, 128, 0.67) 36%,
      rgba(33, 97, 158, 0) 50%,
      rgba(35, 104, 170, 0) 57%,
      rgba(46, 136, 222, 0) 100%
    ),
    url('~/assets/img/waves.jpg');
  background-position: center;
  background-size: cover;
}

.benefits__inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 48px;
  position: relative;
  flex: 0 0 auto;
}

.benefits__header {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 22.4px;
  position: relative;
  flex: 0 0 auto;
}

.benefits__title {
  position: relative;
  width: fit-content;
  text-shadow: 0 1.6px 3.2px #000000d4;
  font-weight: 500;
  color: transparent;
  font-size: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 112px;
  white-space: nowrap;
}

.benefits__subtitle {
  position: relative;
  width: fit-content;
  text-shadow: 0 0 4.4px #000000db;
  font-weight: 500;
  color: #ffffff;
  font-size: 44.8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 62.72px;
  white-space: nowrap;
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  width: min(1024px, calc(100% - 32px));
  height: 496px;
  gap: 24px;
}

.benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 27.2px 36.8px;
  border-radius: 10.4px;
  color: #284662;
  background: #ffffff;
  box-shadow: 0 3.2px 11.2px rgba(0, 0, 0, 0.24);
  text-align: center;
}

.benefit-card__icon {
  display: grid;
  width: 56px;
  height: 56px;
  min-width: 56px;
  min-height: 56px;
  aspect-ratio: 1 / 1;
  flex: 0 0 56px;
  place-items: center;
  margin-bottom: 20.8px;
  padding: 0;
  border-radius: 9999px;
  color: #284662;
  background: rgba(248, 255, 102, 0.5);
}

.benefit-card__icon :deep(svg) {
  width: 32px;
  height: 32px;
}

.benefit-card__title {
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px;
}

.benefit-card__text {
  color: #000000;
  font-size: 15.2px;
  font-weight: 400;
  line-height: 21.28px;
}
</style>
