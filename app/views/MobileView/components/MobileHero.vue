<template>
  <section class="mobile-hero" aria-labelledby="mobile-hero-title">
    <div class="mobile-hero__title">
      <HeroHeading id="mobile-hero-title" variant="mobile" />
    </div>

    <div class="mobile-hero__bottom">
      <a class="mobile-hero__button" href="#mobile-routes">В путь!</a>
      <p class="mobile-hero__description">
        Байкал, который невозможно увидеть за одну поездку на машине
      </p>
    </div>
  </section>
</template>

<style scoped>
.mobile-hero {
  display: flex;
  min-height: 936px;
  flex-direction: column;
  justify-content: space-between;
  padding: 74px 18px 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(3, 24, 38, 0.04) 58%, rgba(3, 24, 38, 0.34) 100%),
    url('~/assets/img/hero.jpg');
  background-size: auto 100%;
  background-position: 50% top;
}

.mobile-hero__title {
  position: relative;
  height: 205px;
}

.mobile-hero__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
}

.mobile-hero__button {
  display: inline-flex;
  min-width: 258px;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  padding: 7px 28px;
  border: 1px solid #284662;
  border-radius: 17px;
  color: #284662;
  background: #ffffff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
  font-size: 34px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
}

.mobile-hero__description {
  width: min(390px, 100%);
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.52;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.78);
}
</style>
