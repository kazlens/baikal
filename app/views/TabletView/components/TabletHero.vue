<template>
  <section class="tablet-hero" aria-labelledby="tablet-hero-title">
    <header class="tablet-hero__title">
      <HeroHeading id="tablet-hero-title" variant="tablet" />
    </header>

    <div class="tablet-hero__content">
      <a class="tablet-hero__button" href="#tablet-routes">Смотреть маршруты</a>
      <p class="tablet-hero__description">
        Байкал, который невозможно увидеть <br />за одну поездку на машине
      </p>
    </div>
  </section>
</template>

<style scoped>
.tablet-hero {
  display: flex;
  min-height: 552px;
  flex-direction: column;
  justify-content: space-between;
  padding: 42px 32px 52px;
  background:
    linear-gradient(180deg, rgba(14, 38, 62, 0.18) 0%, rgba(14, 38, 62, 0.16) 52%, rgba(14, 38, 62, 0.48) 100%),
    url('~/assets/img/hero.jpg');
  background-size: cover;
  background-position: center top;
}

.tablet-hero__title {
  position: relative;
  height: 176px;
}

.tablet-hero__content {
  display: grid;
  justify-items: center;
  gap: 29px;
}

.tablet-hero__button {
  display: inline-flex;
  min-width: 283px;
  min-height: 57px;
  align-items: center;
  justify-content: center;
  padding: 12px 34px;
  border: 1px solid #284662;
  border-radius: 8px;
  color: #284662;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.24);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
}

.tablet-hero__description {
  width: min(440px, 100%);
  margin: 0;
  color: #ffffff;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.45;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
}
</style>
