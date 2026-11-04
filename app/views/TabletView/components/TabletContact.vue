<template>
  <section id="tablet-contact" class="tablet-contact" aria-labelledby="tablet-contact-title">
    <h2 id="tablet-contact-title" class="tablet-contact__title">Пора увидеть Байкал иначе:</h2>

    <LeadForm variant="tablet" submit-label="Связаться с нами" />

    <address class="tablet-contact__address">
      <div class="tablet-contact__address-title">Наши контакты:</div>
      <div class="tablet-contact__links">
        <a class="tablet-contact__link" :href="contacts.telegram" target="_blank" rel="noreferrer">Telegram</a>
        <a class="tablet-contact__link" :href="contacts.phone">Позвонить</a>
      </div>
    </address>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '~/data/contacts'
</script>

<style scoped>
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
</style>
