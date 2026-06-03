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
        <article
          v-for="route in mobileRoutes"
          :key="route.tab"
          class="mobile-route-item"
          :class="{ 'mobile-route-item--open': isRouteOpen(route.index) }"
        >
          <button
            class="mobile-routes__button"
            :class="{ 'mobile-routes__button--active': route.index === selectedRouteIndex }"
            type="button"
            :aria-expanded="isRouteOpen(route.index)"
            @click="toggleRoute(route.index)"
          >
            <span class="mobile-routes__button-icon" aria-hidden="true" />
            <span class="mobile-routes__button-text">{{ route.tab.toLowerCase() }}</span>
          </button>

          <div v-if="isRouteOpen(route.index)" class="mobile-route-details">
            <p v-if="getRouteDetails(route.index)?.intro" class="mobile-route-details__intro">
              {{ getRouteDetails(route.index)?.intro }}
            </p>

            <article
              v-for="item in getRouteDetails(route.index)?.items"
              :key="item.title"
              class="mobile-route-detail"
            >
              <h3 v-if="item.title" class="mobile-route-detail__title" v-html="item.title" />
              <img
                v-if="item.image"
                class="mobile-route-detail__image"
                :src="item.image"
                :alt="item.imageAlt"
              />
              <p class="mobile-route-detail__text">{{ item.text }}</p>
            </article>
          </div>
        </article>
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
import argadaRiverImage from '~/assets/img/argada-river.jpg'
import baikalValleyImage from '~/assets/img/baikal-valley.jpg'
import sergePillarsImage from '~/assets/img/serge-pillars.png'

type Benefit = {
  title: string
  text: string
  icon: string
}

type RouteItem = {
  tab: string
  title: string
  tags: string[]
  intro: string
  image: string
  imageAlt: string
  text: string
}

const props = defineProps<{
  benefits: Benefit[]
  routes: RouteItem[]
  selectedRouteIndex: number
}>()

type MobileRouteDetail = {
  intro?: string
  items: Array<{
    title: string
    text: string
    image?: string
    imageAlt?: string
  }>
}

const emit = defineEmits<{
  selectRoute: [index: number]
}>()

const openRouteIndexes = ref<number[]>([])

const isRouteOpen = (index: number) => openRouteIndexes.value.includes(index)

const toggleRoute = (index: number) => {
  emit('selectRoute', index)

  openRouteIndexes.value = isRouteOpen(index)
    ? openRouteIndexes.value.filter((routeIndex) => routeIndex !== index)
    : [...openRouteIndexes.value, index]
}

const mobileRouteDetails: Record<number, MobileRouteDetail> = {
  0: {
    items: [
      {
        title: 'Круиз<br>«Байкальские Дюны»',
        text: '5 дней — для тех, кто хочет увидеть Байкал ярко, но без длинного отпуска. Подходит для первого путешествия.',
      },
      {
        title: '',
        image: props.routes[0]?.image,
        imageAlt: 'Круиз «Байкальские Дюны»',
        text: 'Бухта Песчаная и соседняя бухта Академическая - одни из самых красивых мест на Байкале. С двух сторон бухты огибают живописные скалы – Большая и Малая Колокольня.',
      },
    ],
  },
  1: {
    intro: '8 дней — маршрут для тех, кто хочет пройти Байкал шире: от южных точек до северных природных жемчужин.',
    items: [
      {
        title: 'Круиз<br>«Вокруг Байкала<br>за 8 дней»',
        image: props.routes[1]?.image,
        imageAlt: 'Круиз «Вокруг Байкала за 8 дней»',
        text: 'За 8 дней вы пройдете по Байкалу почти 1200 км. и увидите не только все основные достопримечательности, но и самые заповедные места – Байкальский музей, остров Ольхон, Скалу Шаманка, остров Огой с буддийской Ступой Просветления, Ушканьи острова, Чивыркуйский залив, Хакусы, уединенную бухту Заворотная и живописную бухту Академическая.',
      },
    ],
  },
  2: {
    intro: '6–7 дней — много локаций, экскурсии, отдых на борту и достаточно времени, чтобы прочувствовать Байкал.',
    items: [
      {
        title: 'Этно-круиз<br>«По следам кочевников»',
        image: argadaRiverImage,
        imageAlt: 'Этно-круиз «По следам кочевников»',
        text: 'Во время путешествия вы познаете Байкал во всей его многогранности, познакомитесь с коренными народностями, которые проживают как на Западной стороне Байкала, так и на Восточной. Необычная атмосфера, в которую вы будете погружаться на протяжении всего времени точно не оставит никого равнодушным. Полное слияние с природой, культурой и уникальностью Прибайкалья позволит вам прочувствовать всю аутентичность священного озера Байкал.',
      },
      {
        title: 'Круиз<br>«Байкальская Одиссея»',
        image: sergePillarsImage,
        imageAlt: 'Круиз «Байкальская Одиссея»',
        text: 'Всего за 6 дней вы пройдете 860 км. по Байкалу и увидите главные достопримечательности озера – Байкальский музей, остров Ольхон, Скалу Шаманка, остров Огой с буддийской Ступой Просветления, Ушканьи острова, Чивыркуйский залив и живописную бухту Академическая.',
      },
      {
        title: 'Круиз<br>«Осенняя симфония Байкала»',
        image: baikalValleyImage,
        imageAlt: 'Круиз «Осенняя симфония Байкала»',
        text: '7-дневная круиз-экспедиция – проходит в самый разгар яркой байкальской осени. Маршрут в 870 км. включает самые знаковые места Байкала – остров Ольхон, остров Огой, Ушканьи острова, Чивыркуйский залив и бухту Академическая.',
      },
    ],
  },
  3: {
    items: [
      {
        title: '',
        text: 'Если вы не нашли подходящий круиз, мы поможем составить круиз из мест, которые вы хотите посетить.',
      },
    ],
  },
}

const getRouteDetails = (index: number) => mobileRouteDetails[index]

const mobileRoutes = computed(() => {
  const order = [0, 2, 1, 3]

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
    gap: 34px;
    margin-top: 42px;
  }

  .mobile-route-item {
    display: grid;
    gap: 0;
    justify-self: center;
    width: min(212px, 62vw);
  }

  .mobile-route-item:nth-child(2) {
    width: min(304px, calc(100vw - 34px));
    justify-self: start;
  }

  .mobile-route-item:nth-child(3) {
    width: min(228px, 66vw);
    justify-self: end;
  }

  .mobile-route-item:nth-child(4) {
    width: min(359px, calc(100vw - 24px));
    justify-self: center;
  }

  .mobile-route-item--open {
    gap: 0;
  }

  .mobile-routes__button {
    display: inline-flex;
    width: 100%;
    min-height: 46px;
    align-items: center;
    justify-self: stretch;
    gap: 8px;
    padding: 11px 20px;
    border: 0;
    border-radius: 8px;
    color: #000000;
    background: #ffffff;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.28);
    cursor: pointer;
  }

  .mobile-route-item--open .mobile-routes__button {
    min-height: auto;
    //justify-content: center;
    padding: 18px 20px 10px;
    border-radius: 13px 13px 0 0;
    color: #ffffff;
    background: #214150;
    box-shadow: none;
  }

  .mobile-routes__button--active {
    outline: 2px solid rgba(255, 255, 255, 0.7);
  }

  .mobile-route-item--open .mobile-routes__button--active {
    outline: 0;
  }

  .mobile-routes__button-icon {
    width: 0;
    height: 0;
    flex: 0 0 auto;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid #000000;
  }

  .mobile-route-item--open .mobile-routes__button-icon {
    border-left-color: #ffffff;
  }

  .mobile-routes__button-text {
    overflow-wrap: anywhere;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.15;
    text-transform: lowercase;
  }

  .mobile-route-item--open .mobile-routes__button-text {
    color: #ffffff;

    text-transform: lowercase;
  }

  .mobile-route-details {
    display: grid;
    gap: 8px;
    padding: 0 10px 18px;
    border-radius: 0 0 13px 13px;
    color: #ffff92;
    background: #214150;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.28);
  }

  .mobile-route-details__intro {
    margin: 0;
    color: #ffff92;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.22;
  }

  .mobile-route-detail {
    display: grid;
    gap: 8px;
  }

  .mobile-route-detail__title {
    margin: 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.15;
  }

  .mobile-route-detail__text {
    margin: 0;
    color: #ffff92;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
  }

  .mobile-route-detail__image {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    object-fit: cover;
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
