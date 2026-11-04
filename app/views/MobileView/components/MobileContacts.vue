<template>
  <section class="mobile-contacts" aria-labelledby="mobile-contacts-title">
    <h2 id="mobile-contacts-title" class="mobile-contacts__title">Наши контакты:</h2>
    <div class="mobile-contacts__links">
      <a class="mobile-contacts__link" :href="contacts.telegram" target="_blank" rel="noreferrer">Telegram</a>
      <a class="mobile-contacts__link" :href="contacts.phone">Позвонить</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '~/data/contacts'
</script>

<style scoped>
.mobile-contacts {
  padding: 26px 23px 55px;
}

.mobile-contacts__title {
  margin: 0;
  color: #ffffff;
  font-size: 34px;
  font-weight: 500;
  line-height: 1.31;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.74);
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
</style>
