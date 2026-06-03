<template>
  <div class="mobile-page" aria-label="Мобильная версия страницы">
    <section class="mobile-hero" aria-labelledby="mobile-hero-title">
      <div class="mobile-hero__title">
        <h1 id="mobile-hero-title" class="mobile-hero__heading">
          <span>КРУИЗЫ<br /></span>
          <span class="mobile-hero__heading-small">ПО БАЙКАЛУ</span>
        </h1>
        <p class="mobile-hero__heading mobile-hero__heading--shadow" aria-hidden="true">
          <span>КРУИЗЫ<br /></span>
          <span class="mobile-hero__heading-small">ПО БАЙКАЛУ</span>
        </p>
      </div>

      <div class="mobile-hero__bottom">
        <a class="mobile-hero__button" href="#mobile-routes">В путь!</a>
        <p class="mobile-hero__description">
          Байкал, который невозможно увидеть за одну поездку на машине
        </p>
      </div>
    </section>

    <div class="mobile-content">
    <section class="mobile-benefits" aria-labelledby="mobile-benefits-title">
      <h2 id="mobile-benefits-title" class="mobile-benefits__title">Почему это удобно?</h2>
      <p class="mobile-benefits__subtitle">Всё главное - в одном путешествии</p>

      <div class="mobile-benefits__list">
        <article v-for="item in benefits" :key="item.title" class="mobile-benefit-card">
          <h3 class="mobile-benefit-card__title">{{ item.title }}</h3>
          <p class="mobile-benefit-card__text">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="mobile-routes" class="mobile-routes" aria-labelledby="mobile-routes-title">
      <svg
        class="mobile-routes__wave"
        width="440"
        height="61"
        viewBox="0 0 440 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 30.6781C59.2613 7.27051 112.506 11.9593 142.31 20.2403C203.537 34.3452 369.102 83.8608 309.261 42.1098C249.42 0.358803 400.438 -1.94061 439 6.32334"
          stroke="white"
          stroke-width="5"
        />
      </svg>
      <h2 id="mobile-routes-title" class="mobile-routes__title">
        Выбери Байкал <br />под свой ритм:
      </h2>

      <div class="mobile-routes__list">
        <button
          v-for="route in mobileRoutes"
          :key="route.tab"
          class="mobile-routes__button"
          :class="{ 'mobile-routes__button--active': route.index === selectedRouteIndex }"
          type="button"
          :aria-pressed="route.index === selectedRouteIndex"
          @click="$emit('selectRoute', route.index)"
        >
          <span class="mobile-routes__button-icon" aria-hidden="true" />
          <span class="mobile-routes__button-text">{{ route.tab.toLowerCase() }}</span>
        </button>
      </div>
    </section>

    <div class="mobile-request-wave" aria-hidden="true">
      <svg width="446" height="102" viewBox="0 0 446 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.97448 82.3126C95.2576 -37.8007 423.746 102.822 250.283 98.82C76.8212 94.8181 374.691 -54.7494 350.922 26.7875C327.153 108.324 443.975 45.7961 443.975 45.7961"
          stroke="#FFFF92"
          stroke-width="5"
        />
      </svg>
    </div>

    <section class="mobile-request" aria-labelledby="mobile-request-title">
      <h2 id="mobile-request-title" class="mobile-request__title">
        Пора увидеть Байкал иначе:
      </h2>
      <form class="mobile-request__form" action="#" method="post">
        <label class="mobile-request__field" for="mobile-name">
          <input id="mobile-name" name="name" type="text" autocomplete="name" placeholder="Имя" aria-label="Имя" />
        </label>
        <label class="mobile-request__field" for="mobile-phone">
          <input
            id="mobile-phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            inputmode="tel"
            placeholder="Телефон"
            aria-label="Телефон"
          />
        </label>
        <button class="mobile-request__submit" type="submit">Оставить заявку</button>
      </form>
    </section>

    <section class="mobile-contacts" aria-labelledby="mobile-contacts-title">
      <h2 id="mobile-contacts-title" class="mobile-contacts__title">Наши контакты:</h2>
      <div class="mobile-contacts__links">
        <a class="mobile-contacts__link" href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
        <a class="mobile-contacts__link" href="tel:+70000000000">Позвонить</a>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup lang="ts">
type Benefit = {
  title: string
  text: string
  icon: string
}

type RouteItem = {
  tab: string
}

const props = defineProps<{
  benefits: Benefit[]
  routes: RouteItem[]
  selectedRouteIndex: number
}>()

defineEmits<{
  selectRoute: [index: number]
}>()

const mobileRoutes = computed(() => {
  const order = [0, 3, 1, 2]

  return order
    .map((index) => {
      const route = props.routes[index]
      return route ? { ...route, index } : null
    })
    .filter((route): route is RouteItem & { index: number } => route !== null)
})
</script>

<style scoped>
.mobile-page {
  display: none;
}

@media (max-width: 539px) {
  .mobile-page {
    display: block;
    width: 100%;
    min-width: 320px;
    overflow: hidden;
    color: #ffffff;
    background: #041a26;
    font-family: 'Jost', Arial, sans-serif;
  }

  .mobile-hero {
    display: flex;
    min-height: 642px;
    flex-direction: column;
    justify-content: space-between;
    padding: 56px 18px 36px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(3, 24, 38, 0.04) 58%, rgba(3, 24, 38, 0.34) 100%),
      url('~/assets/img/hero.jpg');
    background-size: auto 100%;
    background-position: 50% top;
  }

  .mobile-hero__title {
    position: relative;
    height: 142px;
  }

  .mobile-hero__heading {
    position: absolute;
    inset: 0;
    margin: 0;
    color: #ffffff;
    font-size: clamp(56px, 17vw, 74px);
    font-weight: 700;
    line-height: 0.92;
    text-align: center;
    letter-spacing: 0;
    text-shadow: 8px 0 5px rgba(20, 57, 89, 0.34);
    mix-blend-mode: overlay;
  }

  .mobile-hero__heading--shadow {
    opacity: 0.68;
    mix-blend-mode: normal;
    text-shadow: 8px 0 5px rgba(20, 57, 89, 0.46);
  }

  .mobile-hero__heading-small {
    font-size: clamp(35px, 11vw, 48px);
    line-height: 1.34;
  }

  .mobile-hero__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .mobile-hero__button {
    display: inline-flex;
    min-width: 184px;
    min-height: 51px;
    align-items: center;
    justify-content: center;
    padding: 7px 28px;
    border: 1px solid #284662;
    border-radius: 13px;
    color: #284662;
    background: #ffffff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
    font-size: 27px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
  }

  .mobile-hero__description {
    width: min(330px, 100%);
    margin: 0;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.35;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.78);
  }

  .mobile-content {
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.08) 0%, rgba(4, 26, 38, 0.28) 46%, rgba(4, 26, 38, 0.64) 100%),
      url('~/assets/img/waves.jpg');
    background-repeat: no-repeat;
    background-size: auto 120%;
    background-position: center -350px;
  }

  .mobile-benefits {
    padding: 27px 14px 52px;
    background:
      linear-gradient(180deg, rgba(8, 47, 70, 0.16) 0%, rgba(4, 28, 42, 0.24) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center top;
  }

  .mobile-benefits__title {
    margin: 0;
    color: #ffff00;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.12;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .mobile-benefits__subtitle {
    margin: 18px 0 18px;
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .mobile-benefits__list {
    display: grid;
    gap: 20px;
    justify-items: center;
  }

  .mobile-benefit-card {
    width: min(328px, calc(100vw - 48px));
    min-height: 75px;
    padding: 12px 18px 10px;
    border-radius: 8px;
    color: #284662;
    background: #ffffff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.32);
    text-align: center;
  }

  .mobile-benefit-card__title {
    margin: 0;
    color: #284662;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.18;
  }

  .mobile-benefit-card__text {
    margin: 5px 0 0;
    color: #000000;
    font-size: 8.5px;
    font-weight: 400;
    line-height: 1.28;
  }

  .mobile-routes {
    position: relative;
    padding: 103px 21px 96px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.24) 0%, rgba(4, 26, 38, 0.58) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .mobile-routes__wave {
    position: absolute;
    top: 19px;
    left: 50%;
    width: min(440px, 122vw);
    height: auto;
    transform: translateX(-50%);
    opacity: 0.96;
  }

  .mobile-routes__title {
    position: relative;
    margin: 0;
    color: #ffffff;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.24;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.72);
  }

  .mobile-routes__list {
    display: grid;
    gap: 31px;
    margin-top: 42px;
  }

  .mobile-routes__button {
    display: inline-flex;
    width: min(242px, 35vw);
    min-height: 46px;
    align-items: center;
    justify-self: center;
    gap: 8px;
    padding: 11px 20px;
    border: 0;
    border-radius: 8px;
    color: #000000;
    background: #ffffff;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.28);
    cursor: pointer;
  }

  .mobile-routes__button:nth-child(2) {
    width: min(278px, 88vw);
    justify-self: start;
  }

  .mobile-routes__button:nth-child(3) {
    justify-self: end;
  }

  .mobile-routes__button:nth-child(4) {
    width: min(278px, 88vw);
  }

  .mobile-routes__button--active {
    outline: 2px solid rgba(255, 255, 255, 0.7);
  }

  .mobile-routes__button-icon {
    width: 0;
    height: 0;
    flex: 0 0 auto;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid #000000;
  }

  .mobile-routes__button-text {
    overflow-wrap: anywhere;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.15;
    text-transform: lowercase;
  }

  .mobile-request {
    padding: 28px 23px 24px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.54) 0%, rgba(4, 26, 38, 0.72) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .mobile-request-wave {
    display: flex;
    justify-content: center;
    padding: 6px 0 0;
    overflow: hidden;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.58) 0%, rgba(4, 26, 38, 0.54) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center center;
  }

  .mobile-request-wave svg {
    width: min(446px, 122vw);
    height: auto;
    flex: 0 0 auto;
  }

  .mobile-request__title,
  .mobile-contacts__title {
    margin: 0;
    color: #ffffff;
    font-size: 29px;
    font-weight: 500;
    line-height: 1.28;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.74);
  }

  .mobile-request__form {
    display: grid;
    gap: 20px;
    width: min(322px, 100%);
    margin: 27px auto 0;
  }

  .mobile-request__field {
    display: flex;
    min-height: 58px;
    align-items: center;
    padding: 0 25px;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  .mobile-request__field input {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    color: #000000;
    background: transparent;
    font-size: 25px;
    font-weight: 300;
    line-height: 1.2;
  }

  .mobile-request__field input::placeholder {
    color: rgba(0, 0, 0, 0.72);
    opacity: 1;
  }

  .mobile-request__submit {
    min-height: 58px;
    border: 0;
    border-radius: 14px;
    color: #000000;
    background: #ffff00;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
    font-size: 23px;
    font-weight: 400;
    line-height: 1.2;
    cursor: pointer;
  }

  .mobile-contacts {
    padding: 21px 23px 52px;
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.72) 0%, rgba(4, 26, 38, 0.86) 100%),
      url('~/assets/img/waves.jpg');
    background-size: cover;
    background-position: center bottom;
  }

  .mobile-contacts__links {
    display: grid;
    gap: 13px;
    width: min(274px, 100%);
    margin: 25px auto 0;
  }

  .mobile-contacts__link {
    display: flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.86);
    border-radius: 999px;
    color: #ffffff;
    background: rgba(40, 70, 98, 0.92);
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
    text-decoration: none;
  }

  .mobile-benefits,
  .mobile-routes,
  .mobile-request-wave,
  .mobile-request,
  .mobile-contacts {
    background: transparent;
  }
}
</style>
