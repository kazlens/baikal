<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__inner">
      <header class="hero__title">
        <HeroHeading id="hero-title" variant="desktop" />
      </header>

      <div class="hero__content">
        <a class="button button--primary hero__button" href="#routes">
          <span class="hero__button-text">Смотреть маршруты</span>
        </a>
        <p class="hero__description">
          Байкал, который невозможно увидеть <br />за одну поездку на машине
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  align-items: center;
  gap: 8px;
  padding: 24.8px 32px 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-image:
    linear-gradient(
      180deg,
      rgba(31, 60, 88, 0.4) 0%,
      rgba(31, 60, 88, 0.4) 37%,
      rgba(102, 102, 102, 0) 46%,
      rgba(102, 102, 102, 0) 100%
    ),
    url('~/assets/img/hero.jpg');
  background-position: 0 0px;
  background-size: cover;
}

.hero__inner {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: min(1024px, 100%);
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.hero__title {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 302.4px;
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.hero__button {
  padding: 22.4px;
  background-color: #ffffff;
}

.hero__button-text {
  position: relative;
  align-self: stretch;
  margin-top: -0.4px;
  font-weight: 500;
  color: #1f3c58;
  font-size: 43.2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 60.48px;
}

.hero__description {
  position: relative;
  width: min(1122.4px, 100vw - 32px);
  font-weight: 500;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: 44.8px;
}

@media (max-width: 1535.2px) {
  .hero {
    height: auto;
    min-height: 864px;
  }
}
</style>
