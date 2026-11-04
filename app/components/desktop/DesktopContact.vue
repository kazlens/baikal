<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact__main">
      <h2 id="contact-title" class="contact__title">Пора увидеть Байкал иначе:</h2>
      <LeadForm variant="desktop" submit-label="Связаться с нами" />
    </div>

    <address class="contact__address">
      <div class="contact__address-title">Наши контакты:</div>
      <div class="contact__links">
        <a class="contact__link" :href="contacts.telegram" target="_blank" rel="noreferrer" aria-label="Telegram">
          <span class="contact__link-text">Telegram</span>
        </a>
        <a class="contact__link" :href="contacts.phone" aria-label="Позвонить">
          <span class="contact__link-text">Позвонить</span>
        </a>
      </div>
    </address>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '~/data/contacts'
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  height: 950.4px;
  align-items: center;
  justify-content: center;
  gap: 23.2px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%),
    url('~/assets/img/ice.webp');
  background-size: cover;
  background-position: center;
}

.contact__main {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 57.6px;
  position: relative;
  flex: 0 0 auto;
}

.contact__title {
  position: relative;
  width: fit-content;
  font-weight: 500;
  color: #ffffff;
  font-size: 64px;
  text-align: center;
  letter-spacing: 0;
  line-height: 89.6px;
  white-space: nowrap;
}

.contact__address {
  display: flex;
  flex-direction: column;
  width: 320px;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 0 0 auto;
  font-style: normal;
}

.contact__address-title {
  position: relative;
  align-self: stretch;
  margin-top: -0.8px;
  font-weight: 500;
  color: #ffffff;
  font-size: 28.8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40.32px;
}

.contact__links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.contact__link {
  display: flex;
  height: 47.2px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13.6px 66.4px 13.6px 65.6px;
  position: relative;
  align-self: stretch;
  width: 100%;
  border-radius: 10.4px;
  cursor: pointer;
}

.contact__link-text {
  position: relative;
  width: fit-content;
  margin-top: -0.8px;
  font-weight: 300;
  color: #ffffff;
  font-size: 28.8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40.32px;
  text-decoration: underline;
  white-space: nowrap;
}
</style>
