<template>
  <main class="page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__inner">
        <header class="hero__title">
          <h1 id="hero-title" class="hero__heading">
            <span class="hero__heading-line">КРУИЗЫ<br /></span>
            <span class="hero__heading-subtitle">ПО БАЙКАЛУ</span>
          </h1>
          <p class="hero__heading-shadow" aria-hidden="true">
            <span class="hero__heading-line">КРУИЗЫ<br /></span>
            <span class="hero__heading-subtitle">ПО БАЙКАЛУ</span>
          </p>
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
            <div class="benefit-card__icon" aria-hidden="true" v-html="item.icon" />
            <h3 class="benefit-card__title">{{ item.title }}</h3>
            <p class="benefit-card__text">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="routes" class="routes" aria-labelledby="routes-title">
      <div class="routes__overlay" aria-hidden="true" />
      <h2 id="routes-title" class="section-title routes__title">
        <span class="section-title__text">Выбери Байкал под </span>
        <span class="section-title__accent">свой ритм</span>
        <span class="section-title__text">:</span>
      </h2>

      <article class="routes__content">
        <div class="routes__tabs" aria-label="Список маршрутов">
          <button
            v-for="(route, index) in routes"
            :key="route.tab"
            class="routes__tab"
            :class="{ 'routes__tab--active': index === selectedRouteIndex }"
            :style="{ '--route-tab-bg': `url(${route.tabImage})` }"
            :aria-pressed="index === selectedRouteIndex"
            type="button"
            @click="selectRoute(index)"
          >
            {{ route.tab }}
          </button>
        </div>

        <div class="route-card">
          <article
            v-for="card in selectedDesktopRouteCards"
            :key="card.title"
            class="route-card__item"
          >
            <h3 class="route-card__title">
              <span class="route-card__title-text">{{ card.title }}</span>
            </h3>
            <div v-if="card.tags?.length" class="route-card__tags" aria-label="Характеристики маршрута">
              <div
                v-for="(tag, tagIndex) in card.tags"
                :key="tag"
                class="route-card__tag"
                :class="{ 'route-card__tag--primary': tagIndex === 0 }"
              >
                <div class="route-card__tag-text">{{ tag }}</div>
              </div>
            </div>
            <p v-if="card.intro" class="route-card__intro">{{ card.intro }}</p>
            <img class="route-card__image" :src="card.image" :alt="card.imageAlt" />
            <p v-if="card.text" class="route-card__text">{{ card.text }}</p>
          </article>
          <div class="route-card__footer">
            <a class="button button--primary route-card__button" href="#contact">
              <span class="route-card__button-text">Узнать подробнее</span>
            </a>
          </div>
        </div>
      </article>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="contact__main">
        <h2 id="contact-title" class="contact__title">Пора увидеть Байкал иначе:</h2>
        <form class="contact__form" action="#" method="post">
          <label class="contact__field contact__field--name" for="name">
            <input id="name" name="name" type="text" autocomplete="name" placeholder="Имя" aria-label="Имя" />
          </label>
          <label class="contact__field contact__field--phone" for="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autocomplete="tel"
              inputmode="tel"
              placeholder="Телефон"
              aria-label="Телефон"
            />
          </label>
          <button class="contact__submit" type="submit">
            <span class="contact__submit-text">Связаться с нами</span>
          </button>
        </form>
      </div>

      <address class="contact__address">
        <div class="contact__address-title">Наши контакты:</div>
        <div class="contact__links">
          <a class="contact__link" href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
            <span class="contact__link-text">Telegram</span>
          </a>
          <a class="contact__link" href="tel:+70000000000" aria-label="Позвонить">
            <span class="contact__link-text">Позвонить</span>
          </a>
        </div>
      </address>
    </section>

    <MobilePage
      :benefits="benefits"
      :routes="routes"
      :selected-route-index="selectedRouteIndex"
      @select-route="selectRoute"
    />
    <TabletPage
      :benefits="benefits"
      :routes="routes"
      :selected-route-index="selectedRouteIndex"
      @select-route="selectRoute"
    />
  </main>
</template>

<script setup lang="ts">
import MobilePage from '~/components/MobilePage.vue'
import TabletPage from '~/components/TabletPage.vue'
import cruiseDunesImage from '~/assets/img/cruise-5-days.png'
import expeditionImage from '~/assets/img/route-expedition.png'
import riverImage from '~/assets/img/route-river.jpg'
import cultureImage from '~/assets/img/route-culture.png'
import argadaRiverImage from '~/assets/img/argada-river.jpg'
import baikalValleyImage from '~/assets/img/baikal-valley.jpg'
import heroImage from '~/assets/img/hero.jpg'
import sergePillarsImage from '~/assets/img/serge-pillars.png'

const benefits = [
  {
    title: 'Без сложной логистики',
    text: 'Маршрут уже продуман: трансферы, высадки, экскурсии и передвижение по Байкалу организованы заранее.',
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.2468 0C30.4948 0 28.1676 1.89401 27.4952 4.43683L26.7548 4.09283C26.6227 4.03142 26.4788 3.99961 26.3332 3.99961C26.1876 3.99961 26.0437 4.03142 25.9116 4.09283L13.6664 9.78126L1.4212 4.09322C1.26883 4.02246 1.10109 3.99123 0.933468 4.00241C0.765843 4.01359 0.603736 4.06681 0.462112 4.15718C0.320487 4.24754 0.203911 4.37213 0.123146 4.51944C0.0423801 4.66675 2.8213e-05 4.83203 2.69702e-08 5.00003V33.115C-4.42452e-05 33.3057 0.0544177 33.4924 0.156967 33.6531C0.259516 33.8138 0.405877 33.9419 0.5788 34.0222L13.2452 39.9058C13.3773 39.9672 13.5212 39.9991 13.6668 39.9991C13.8124 39.9991 13.9563 39.9672 14.0884 39.9058L26.3336 34.2178L38.5788 39.9058C39.2416 40.2134 40 39.7298 40 38.9994V10.8845C40 10.6938 39.9456 10.5071 39.843 10.3464C39.7405 10.1856 39.5941 10.0576 39.4212 9.97726L38.1292 9.37646L38.5336 8.68765C38.6256 8.52085 38.6988 8.34325 38.7616 8.16165C39.0507 7.45551 39.1996 6.69986 39.2 5.93684C39.2 2.67402 36.5192 0 33.2468 0ZM33.2468 2.78122C35.0088 2.78122 36.41 4.17963 36.41 5.93684C36.41 7.69365 35.0088 9.09086 33.2468 9.09086C31.4848 9.09086 30.0836 7.69365 30.0836 5.93684C30.0836 4.17963 31.4848 2.78122 33.2468 2.78122ZM26.7804 6.31004L27.3312 6.56644C27.4382 7.56606 27.7997 8.52156 28.3812 9.34166L32.5204 16.4977C33.1004 17.2553 33.486 17.1113 33.968 16.4577L37.1108 11.1085L38 11.5221V37.4322L26.9288 32.2894L26.8384 16.4189C27.0016 16.4541 27.1644 16.4881 27.328 16.5269L27.696 14.9705C27.408 14.9024 27.1189 14.8393 26.8288 14.7813L26.7804 6.31004ZM25.5812 6.45164L25.6272 14.5861C25.2141 14.5296 24.7986 14.492 24.382 14.4737L24.3228 16.0721C24.758 16.0881 25.1968 16.1353 25.6368 16.1993L25.7288 32.293L14.2584 37.6222L14.1108 11.7805L25.5812 6.45164ZM2 6.56724L12.91 11.6353L13.0584 37.6142L2 32.4766V6.56724ZM22.6172 14.5829C22.0664 14.6817 21.5028 14.8581 20.978 15.1633C20.3502 15.5268 19.8339 16.0552 19.4852 16.6913L20.886 17.4641C21.0947 17.0841 21.4024 16.7677 21.7764 16.5485L21.7788 16.5469L21.7812 16.5453C22.104 16.3573 22.4884 16.2309 22.9 16.1573L22.6172 14.5829ZM29.2836 15.3953L28.8304 16.9289C29.8316 17.2249 30.8232 17.5649 31.8092 17.9329L32.3688 16.4337C31.356 16.0561 30.3288 15.7041 29.2836 15.3953ZM18.8828 18.4337L18.8708 18.4969L18.8696 18.5025C18.67 19.6349 18.6912 20.7493 18.736 21.8085L20.3344 21.7405C20.2908 20.7129 20.2816 19.7185 20.4452 18.7853L20.4548 18.7353L18.8828 18.4337ZM20.4296 23.3177L18.8336 23.4257C18.9056 24.4933 18.9824 25.5398 18.9796 26.5658L20.5796 26.5698C20.5828 25.4618 20.5016 24.3785 20.4296 23.3177ZM18.9 28.0738C18.856 28.455 18.7904 28.8258 18.6944 29.1818L18.6936 29.1838L18.6928 29.187C18.5528 29.721 18.3172 30.2154 17.9884 30.6026L19.2072 31.6386C19.7224 31.0326 20.0492 30.3194 20.2392 29.5978L20.24 29.5954C20.36 29.149 20.438 28.6994 20.4892 28.2554L18.9 28.0738ZM5.3928 29.633L4.6744 31.0626C5.6664 31.5614 6.6924 31.9738 7.7256 32.3306L8.2476 30.8182C7.2656 30.4794 6.3068 30.0922 5.3928 29.633ZM9.7272 31.2782L9.3016 32.8206C10.36 33.113 11.448 33.3454 12.56 33.4706L12.7384 31.8806C11.73 31.7674 10.7244 31.5538 9.7272 31.2782ZM16.9836 31.391C16.1868 31.799 15.2248 31.9498 14.2356 31.9618L14.2556 33.5618C15.3892 33.5482 16.6012 33.3842 17.7124 32.815L16.9836 31.391Z" fill="#284662"/></svg>',
  },
  {
    title: 'Комфорт на борту',
    text: 'Каюты разных категорий, питание, рестораны, бар, зоны отдыха и атмосфера настоящего путешествия по воде.',
    icon: '<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.18 26H32.02C31.64 26 31.34 26.02 31.06 26.06C29.2 26.22 28.04 26.74 27.12 27.2C26.2 27.66 25.54 27.98 24 27.98C22.46 27.98 21.82 27.64 20.9 27.2C19.82 26.66 18.48 25.98 16 25.98C13.52 25.98 12.18 26.66 11.1 27.2C10.18 27.66 9.52 27.98 8 27.98C6.48 27.98 5.82 27.64 4.9 27.2C3.82 26.66 2.48 25.98 0 25.98V29.98C1.52 29.98 2.18 30.32 3.1 30.76C4.18 31.3 5.52 31.98 8 31.98C10.48 31.98 11.82 31.3 12.9 30.76C13.82 30.3 14.48 29.98 16 29.98C17.52 29.98 18.18 30.32 19.1 30.76C20.18 31.3 21.52 31.98 24 31.98C26.48 31.98 27.82 31.3 28.9 30.76C29.82 30.3 30.48 29.98 32.02 29.98C33.56 29.98 34.22 30.32 35.14 30.76C36.22 31.3 37.56 31.98 40.04 31.98V27.98C38.5 27.98 37.84 27.64 36.92 27.2C35.86 26.68 34.54 26.04 32.18 26ZM32.02 33.98C29.54 33.98 28.2 34.66 27.12 35.2C26.2 35.66 25.54 35.98 24 35.98C22.46 35.98 21.82 35.64 20.9 35.2C19.82 34.66 18.48 33.98 16 33.98C13.52 33.98 12.18 34.66 11.1 35.2C10.18 35.66 9.52 35.98 8 35.98C6.48 35.98 5.82 35.64 4.9 35.2C3.82 34.66 2.48 33.98 0 33.98V37.98C1.52 37.98 2.18 38.32 3.1 38.76C4.18 39.3 5.52 39.98 8 39.98C10.48 39.98 11.82 39.3 12.9 38.76C13.82 38.3 14.48 37.98 16 37.98C17.52 37.98 18.18 38.32 19.1 38.76C20.18 39.3 21.52 39.98 24 39.98C26.48 39.98 27.82 39.3 28.9 38.76C29.82 38.3 30.48 37.98 32.02 37.98C33.56 37.98 34.22 38.32 35.14 38.76C36.22 39.3 37.56 39.98 40.04 39.98V35.98C38.5 35.98 37.84 35.64 36.92 35.2C35.84 34.66 34.5 33.98 32.02 33.98ZM7.04 23.92C7.32 23.96 7.64 23.98 8.02 23.98C9.52 23.98 10.18 23.66 11.08 23.22L8.66 17.18L20.04 13.12L31.42 17.18L29.36 22.34C30.08 22.14 30.94 22 32.04 22C32.68 22 33.24 22.04 33.76 22.12L35.92 16.74C36.12 16.24 36.1 15.66 35.88 15.18C35.66 14.7 35.24 14.3 34.72 14.12L32.04 13.16V4C32.04 2.9 31.14 2 30.04 2H22.04V0H18.04V2H10.04C8.94 2 8.04 2.9 8.04 4V13.16L5.36 14.12C4.84 14.3 4.44 14.68 4.2 15.18C3.96 15.68 3.96 16.24 4.16 16.74L7.04 23.94V23.92ZM12.02 5.98H28.02V11.72L20.7 9.1C20.2675 8.94084 19.7925 8.94084 19.36 9.1L12.04 11.72V5.98H12.02Z" fill="#284662"/></svg>',
  },
  {
    title: 'Редкие места Байкала',
    text: 'Ушканьи острова, Ольхон, Огой, Чивыркуйский залив, бухта Песчаная, горячие источники и маршруты до которых сложно добраться самостоятельно.',
    icon: '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_64_616" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38"><path d="M19 1C28.94 1 37 9.06 37 19C37 28.94 28.94 37 19 37C9.06 37 1 28.94 1 19C1 9.06 9.06 1 19 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.4 15.4L29 9L22.6 22.6L9 29L15.4 15.4Z" fill="white"/><path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="black"/></mask><g mask="url(#mask0_64_616)"><path d="M-5 -5H43V43H-5V-5Z" fill="#284662"/></g></svg>',
  },
  {
    title: 'Сопровождение',
    text: 'В программе — гид, экскурсии, природные локации, культурные встречи, мероприятия и знаковые места Байкала.',
    icon: '<svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.2 18.0303L39 21.0212L25.94 35L19 27.5758L21.8 24.5848L25.94 28.997L36.2 18.0303ZM16 0C18.1217 0 20.1566 0.893936 21.6569 2.48515C23.1571 4.07637 24 6.23453 24 8.48485C24 10.7352 23.1571 12.8933 21.6569 14.4845C20.1566 16.0758 18.1217 16.9697 16 16.9697C13.8783 16.9697 11.8434 16.0758 10.3431 14.4845C8.84285 12.8933 8 10.7352 8 8.48485C8 6.23453 8.84285 4.07637 10.3431 2.48515C11.8434 0.893936 13.8783 0 16 0ZM16 4.24242C14.9391 4.24242 13.9217 4.68939 13.1716 5.485C12.4214 6.28061 12 7.35969 12 8.48485C12 9.61001 12.4214 10.6891 13.1716 11.4847C13.9217 12.2803 14.9391 12.7273 16 12.7273C17.0609 12.7273 18.0783 12.2803 18.8284 11.4847C19.5786 10.6891 20 9.61001 20 8.48485C20 7.35969 19.5786 6.28061 18.8284 5.485C18.0783 4.68939 17.0609 4.24242 16 4.24242ZM16 19.0909C17.36 19.0909 19 19.2818 20.82 19.6424L17.48 23.1848L16 23.1212C10.06 23.1212 3.8 26.2182 3.8 27.5758V29.9091H16.2L20 33.9394H0V27.5758C0 21.9333 10.66 19.0909 16 19.0909Z" fill="#284662"/></svg>',
  },
]

const selectedRouteIndex = ref(0)

const routes = [
  {
    tab: 'Короткое знакомство',
    title: 'Круиз «Байкальские Дюны»',
    tags: ['5 дней', 'бухта', 'песчаные берега', 'спокойный маршрут'],
    intro: '5 дней — для тех, кто хочет увидеть Байкал ярко, но без длинного отпуска. Подходит для первого путешествия.',
    image: cruiseDunesImage,
    imageAlt: 'Бухта Песчаная на Байкале',
    tabImage: cruiseDunesImage,
    text: 'Бухта Песчаная и соседняя бухта Академическая - одни из самых красивых мест на Байкале. С двух сторон бухты огибают живописные скалы – Большая и Малая Колокольня.',
  },
  {
    tab: 'Большое путешествие',
    title: 'Круиз «Северная Экспедиция»',
    tags: ['8 дней', 'острова', 'север Байкала', 'насыщенный маршрут'],
    intro: 'Маршрут для тех, кто хочет пройти дальше классических локаций и увидеть Байкал с воды, высадок и редких природных точек.',
    image: expeditionImage,
    imageAlt: 'Экспедиционная лодка на Байкале',
    tabImage: expeditionImage,
    text: 'В программе северные бухты, дикие берега, прогулки по воде и остановки в местах, куда сложно добраться на машине. Формат подходит для полноценного отпуска и глубокого знакомства с озером.',
  },
  {
    tab: 'Баланс отдыха и насыщенности',
    title: 'Круиз «Мягкий Байкал»',
    tags: ['6 дней', 'отдых', 'экскурсии', 'ровный темп'],
    intro: 'Маршрут без перегруза: достаточно впечатлений, но остается время спокойно смотреть на воду, отдыхать на борту и гулять на берегу.',
    image: cultureImage,
    imageAlt: 'Сакральные столбы сэргэ на берегу Байкала',
    tabImage: baikalValleyImage,
    text: 'В программе природные локации, понятные переходы, культурные остановки и свободные паузы. Это вариант для тех, кто хочет увидеть главное и не превращать отпуск в гонку.',
  },
  {
    tab: 'Индивидуальный круиз',
    title: 'Индивидуальный круиз по Байкалу',
    tags: ['от 3 дней', 'личный маршрут', 'гибкий темп', 'частная группа'],
    intro: 'Персональный формат для семьи, компании или команды: маршрут, длительность и акценты программы собираются под ваш запрос.',
    image: riverImage,
    imageAlt: 'Живописные протоки и горы Байкальского региона',
    tabImage: heroImage,
    text: 'Можно сделать упор на спокойный отдых, фотолокации, природные места, культурные встречи или активные высадки. Команда заранее согласует логистику, питание и комфортный ритм поездки.',
  },
]

const selectedRoute = computed(() => routes[selectedRouteIndex.value])

const desktopRouteCards = [
  [
    {
      title: 'Круиз «Байкальские Дюны»',
      tags: ['5 дней', 'бухта', 'песчаные берега', 'спокойный маршрут'],
      intro: '5 дней — для тех, кто хочет увидеть Байкал ярко, но без длинного отпуска. Подходит для первого путешествия.',
      image: cruiseDunesImage,
      imageAlt: 'Бухта Песчаная на Байкале',
      text: 'Бухта Песчаная и соседняя бухта Академическая - одни из самых красивых мест на Байкале. С двух сторон бухты огибают живописные скалы – Большая и Малая Колокольня.',
    },
  ],
  [
    {
      title: 'Круиз «Вокруг Байкала за 8 дней»',
      tags: ['8 дней', 'бухта', 'песчаные берега', 'спокойный маршрут'],
      intro: '8 дней — маршрут для тех, кто хочет пройти Байкал шире: от южных точек до северных природных жемчужин.',
      image: cruiseDunesImage,
      imageAlt: 'Круиз «Вокруг Байкала за 8 дней»',
      text: 'За 8 дней вы пройдёте по Байкалу почти 1200 км. и увидите не только все основные достопримечательности, но и самые заповедные места – Байкальский музей, остров Ольхон, Скалу Шаманка, остров Огой с буддийской Ступой Просветления, Ушканьи острова, Чивыркуйский залив, Хакусы, уединённую бухту Заворотная и живописную бухту Академическая.',
    },
  ],
  [
    {
      title: 'Этно-круиз «По следам кочевников»',
      tags: ['6 дней', 'бухта', 'река Аргада', 'сбалансированный маршрут'],
      image: argadaRiverImage,
      imageAlt: 'Этно-круиз «По следам кочевников»',
      text: 'Во время путешествия вы познаете Байкал во всей его многогранности, познакомитесь с коренными народностями, которые проживают как на Западной стороне Байкала, так и на Восточной. Необычная атмосфера, в которую вы будете погружаться на протяжении всего времени точно не оставит никого равнодушным. Полное слияние с природой, культурой и уникальностью Прибайкалья позволит вам прочувствовать всю аутентичность священного озера Байкал.',
    },
    {
      title: 'Круиз «Байкальская Одиссея»',
      tags: ['7 дней', 'остров Ольхон', 'Шаманка', 'Ушканьи острова'],
      image: sergePillarsImage,
      imageAlt: 'Круиз «Байкальская Одиссея»',
      text: 'Всего за 6 дней вы пройдёте 860 км. по Байкалу и увидите главные достопримечательности озера – Байкальский музей, остров Ольхон, Скалу Шаманка, остров Огой с буддийской Ступой Просветления, Ушканьи острова, Чивыркуйский залив и живописную бухту Академическая.',
    },
    {
      title: 'Круиз «Осенняя симфония Байкала»',
      tags: ['7 дней', 'остров Ольхон', 'Чивыркуйский залив', 'остров Огой'],
      image: baikalValleyImage,
      imageAlt: 'Круиз «Осенняя симфония Байкала»',
      text: '7-дневная круиз-экспедиция – проходит в самый разгар яркой байкальской осени. Маршрут в 870 км. включает самые знаковые места Байкала – остров Ольхон, остров Огой, Ушканьи острова, Чивыркуйский залив и бухту Академическая.',
    },
  ],
  [
    {
      title: 'Индивидуальный круиз',
      intro: 'Если вы не нашли подходящий круиз, мы поможем составить круиз из мест, которые вы хотите посетить.',
      image: heroImage,
      imageAlt: 'Индивидуальный круиз по Байкалу',
      text: '',
    },
  ],
]

const selectedDesktopRouteCards = computed(() => desktopRouteCards[selectedRouteIndex.value] ?? desktopRouteCards[0])

const selectRoute = (index: number) => {
  selectedRouteIndex.value = index
}
</script>

<style>
@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
  src: url('~/assets/fonts/jost/jost-01.woff2') format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
  src: url('~/assets/fonts/jost/jost-02.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
  src: url('~/assets/fonts/jost/jost-03.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('~/assets/fonts/jost/jost-04.woff2') format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('~/assets/fonts/jost/jost-05.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('~/assets/fonts/jost/jost-06.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
}

html,
body,
#__nuxt {
  min-height: 100%;
}

body {
  margin: 0;
  background: #ffffff;
  font-family: 'Jost', Arial, sans-serif;
}

button,
input {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 1.6px solid #4a90e2;
  outline-offset: 1.6px;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 256px;
  overflow: hidden;
  background-color: #ffffff;
}

.page h1,
.page h2,
.page h3,
.page p {
  margin: 0;
}

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

.hero__heading,
.hero__heading-shadow {
  position: absolute;
  top: -0.8px;
  left: -0.8px;
  width: 100%;
  font-weight: 700;
  color: #ffffff;
  font-size: 120px;
  text-align: center;
  letter-spacing: 0;
  line-height: 50px;
}

.hero__heading {
  text-shadow: 15.2px 0 4.64px #173e622b;
  mix-blend-mode: overlay;
}

.hero__heading-shadow {
  text-shadow: 15.2px 0 4.64px #173e6278;
  opacity: 0.4;
}

.hero__heading-line {
  font-weight: 700;
  color: #ffffff;
  font-size: 120px;
  letter-spacing: 0;
  line-height: 168px;
}

.hero__heading-subtitle {
  font-size: 73.6px;
  line-height: 103.04px;
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

.button {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 0 0 auto;
  border-radius: 10.4px;
  cursor: pointer;
  backdrop-filter: blur(8.4px) brightness(100%) saturate(100%);
  -webkit-backdrop-filter: blur(8.4px) brightness(100%) saturate(100%);
}

.button--primary {
  border: 0.8px solid #284662;
  background-color: #ffff66;
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
  margin-top: -1.6px;
  margin-left: -0.8px;
  text-shadow: 0 1.6px 3.2px #000000d4;
  font-weight: 500;
  color: transparent;
  font-size: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 112px;
  white-space: nowrap;
}

.section-title__text {
  color: #ffffff;
}

.section-title__accent {
  color: #ffff66;
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

.benefit-card__icon svg {
  width: 32px;
  height: 32px;
}

.benefit-card__title {
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px;
}

.benefit-card__text {
  margin-top: 16px;
  color: #000000;
  font-size: 15.2px;
  font-weight: 400;
  line-height: 21.28px;
}

.routes {
  display: flex;
  flex-direction: column;
  min-height: 915.2px;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 72px 0;
  position: relative;
  align-self: stretch;
  width: 100%;
  background-image: url('~/assets/img/mountains.png');
  background-size: cover;
  background-position: 50% 50%;
}

.routes__overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  backdrop-filter: blur(2.44px) brightness(100%);
  -webkit-backdrop-filter: blur(2.44px) brightness(100%);
  background:
    linear-gradient(
      180deg,
      rgba(0, 29, 40, 0.84) 0%,
      rgba(0, 24, 37, 0.81) 16%,
      rgba(57, 97, 135, 0.37) 30%,
      rgba(146, 146, 146, 0) 35%,
      rgba(255, 255, 255, 0) 52%
    ),
    linear-gradient(0deg, rgba(163, 163, 163, 0.1) 0%, rgba(163, 163, 163, 0.1) 100%);
}

.routes__title {
  position: relative;
  width: fit-content;
  text-shadow: 0 3.2px 5.04px #000000b8;
  font-weight: 500;
  color: transparent;
  font-size: 70.4px;
  text-align: center;
  letter-spacing: 0;
  line-height: 98.56px;
  white-space: nowrap;
}

.routes__content {
  display: flex;
  width: min(1024px, calc(100% - 32px));
  min-height: 656px;
  align-items: flex-start;
  gap: 19.2px;
  position: relative;
}

.routes__tabs {
  display: flex;
  flex-direction: column;
  width: 323.2px;
  align-items: center;
  gap: 19.2px;
  position: relative;
  z-index: 1;
  flex: 0 0 323.2px;
  min-height: 656px;
}

.routes__tab {
  display: flex;
  flex: 1;
  align-self: stretch;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20.8px;
  border: 0.8px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  color: #ffffff;
  background:
    linear-gradient(rgba(4, 18, 28, 0.74), rgba(4, 18, 28, 0.74)),
    var(--route-tab-bg, url('~/assets/img/mountains.png'));
  background-size: cover;
  background-position: center;
  cursor: pointer;
  font-size: 19.2px;
  font-weight: 700;
  line-height: 26.88px;
  text-align: center;
  text-shadow: 0 1.6px 3.2px rgba(0, 0, 0, 0.55);
  transition:
    border-color 160ms ease,
    background 160ms ease,
    box-shadow 160ms ease;
}

.routes__tab--active {
  border: 4px solid #ffffff;
  background:
    linear-gradient(rgba(32, 83, 94, 0.52), rgba(32, 83, 94, 0.52)),
    var(--route-tab-bg, url('~/assets/img/mountains.png'));
  background-size: cover;
  background-position: center;
  box-shadow: 0 2.4px 8px rgba(0, 0, 0, 0.18);
}

.route-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 17px 16.8px 16px;
  position: relative;
  flex: 1;
  background-color: #ffffff;
  border-radius: 10.4px;
  overflow: hidden;
  z-index: 1;
}

.route-card__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 11px;
}

.route-card__title {
  position: relative;
  width: fit-content;
  font-weight: 400;
  color: #000000;
  font-size: 28px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
}

.route-card__title-text {
  font-weight: 400;
  color: #000000;
  font-size: 28px;
  letter-spacing: 0;
}

.route-card__tags {
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  position: relative;
  flex: 0 0 auto;
  flex-wrap: wrap;
}

.route-card__tag {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 13px;
  position: relative;
  flex: 0 0 auto;
  border-radius: 999px;
}

.route-card__tag--primary {
  background-color: #437eb5;
}

.route-card__tag:not(.route-card__tag--primary) {
  border: 0.8px solid #284662;
}

.route-card__tag-text {
  position: relative;
  width: fit-content;
  font-weight: 500;
  font-size: 13.6px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
}

.route-card__tag--primary .route-card__tag-text {
  color: #ffffff;
}

.route-card__tag:not(.route-card__tag--primary) .route-card__tag-text {
  color: #284662;
}

.route-card__intro {
  position: relative;
  align-self: stretch;
  font-weight: 400;
  color: #1f3c58;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 1.35;
}

.route-card__image {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 306px;
  border-radius: 6.4px;
  object-fit: cover;
}

.route-card__text {
  position: relative;
  align-self: stretch;
  font-weight: 400;
  color: #1f3c58;
  font-size: 15.6px;
  letter-spacing: 0;
  line-height: 1.36;
}

.route-card__footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
  border-radius: 10.4px;
}

.route-card__button {
  padding: 11px 21px;
  margin-top: -0.8px;
  margin-bottom: -0.8px;
  margin-right: -0.8px;
  background-color: #284662;
}

.route-card__button-text {
  position: relative;
  align-self: stretch;
  margin-top: -0.4px;
  font-weight: 500;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
}

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
  margin-top: -0.8px;
  font-weight: 500;
  color: #ffffff;
  font-size: 64px;
  text-align: center;
  letter-spacing: 0;
  line-height: 89.6px;
  white-space: nowrap;
}

.contact__form {
  display: flex;
  flex-direction: column;
  width: 320px;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  flex: 0 0 auto;
}

.contact__field {
  display: flex;
  height: 54.4px;
  align-items: center;
  padding: 16.8px 26.4px;
  position: relative;
  align-self: stretch;
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 10.4px;
}

.contact__field--name {
  gap: 8px;
  backdrop-filter: blur(1.6px) brightness(100%);
  -webkit-backdrop-filter: blur(1.6px) brightness(100%);
}

.contact__field--phone {
  box-shadow: 0 3.2px 3.2px #00000040;
}

.contact__field input {
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  font-weight: 300;
  color: #000000;
  font-size: 25.6px;
  line-height: 35.84px;
}

.contact__field input::placeholder {
  color: #000000b2;
  opacity: 1;
}

.contact__submit {
  display: flex;
  height: 54.4px;
  align-items: center;
  justify-content: center;
  padding: 16.8px 0;
  position: relative;
  align-self: stretch;
  width: 100%;
  border: 0;
  background-color: #ffff66;
  border-radius: 10.4px;
  box-shadow: 0 3.2px 3.2px #00000040;
  cursor: pointer;
}

.contact__submit-text {
  position: relative;
  width: fit-content;
  font-weight: 400;
  color: #000000;
  font-size: 25.6px;
  text-align: center;
  letter-spacing: 0;
  line-height: 35.84px;
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

@media (max-width: 1535.2px) {
  .hero {
    height: auto;
    min-height: 864px;
  }
}

@media (max-width: 1056px) {
  .hero__heading,
  .hero__heading-shadow {
    width: 100%;
    left: 0;
  }

  .routes__content {
    flex-direction: column;
    height: auto;
  }

  .routes__tabs {
    width: 100%;
    min-height: 150.4px;
    flex-direction: row;
    align-self: auto;
  }

  .route-card {
    width: 100%;
    min-height: 608px;
    flex: 0 0 auto;
  }
}

@media (min-width: 540px) and (max-width: 1056px) {
  .hero,
  .benefits,
  .routes,
  .contact {
    display: none;
  }
}

@media (max-width: 720px) {
  .hero {
    min-height: 608px;
    padding: 22.4px 16px 28.8px;
  }

  .hero__title {
    height: 184px;
  }

  .hero__heading,
  .hero__heading-shadow,
  .hero__heading-line {
    font-size: clamp(44.8px, 15vw, 88px);
    line-height: 1.1;
  }

  .hero__heading-subtitle {
    font-size: clamp(27.2px, 9vw, 54.4px);
    line-height: 1.25;
  }

  .hero__button-text {
    font-size: clamp(19.2px, 7vw, 32px);
    line-height: 1.25;
  }

  .hero__description {
    font-size: clamp(16px, 5vw, 25.6px);
    line-height: 1.35;
  }

  .benefits,
  .routes,
  .contact {
    height: auto;
    min-height: 720px;
    padding: 57.6px 0;
  }

  .benefits__title,
  .routes__title,
  .contact__title {
    width: min(100% - 25.6px, 576px);
    font-size: clamp(30.4px, 9vw, 56px);
    line-height: 1.2;
    white-space: normal;
  }

  .benefits__subtitle {
    width: min(100% - 25.6px, 512px);
    font-size: clamp(19.2px, 6vw, 33.6px);
    line-height: 1.25;
    white-space: normal;
  }

  .benefits__grid {
    grid-template-columns: 1fr;
    height: auto;
  }

  .benefit-card {
    min-height: 184px;
  }

  .routes__tabs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-height: 0;
  }

  .routes__tab {
    min-height: 96px;
    font-size: 16px;
    line-height: 1.25;
  }

  .route-card__tags {
    flex-wrap: wrap;
  }

  .contact__form,
  .contact__address {
    width: min(320px, calc(100% - 25.6px));
  }
}

@media (max-width: 539px) {
  .hero,
  .benefits,
  .routes,
  .contact {
    display: none;
  }
}

@media (max-width: 448px) {
  .hero__button {
    padding: 14.4px;
  }

  .benefits,
  .routes,
  .contact {
    min-height: auto;
    padding: 48px 0;
  }

  .benefit-card {
    padding: 22.4px 16px;
  }

  .benefit-card__title {
    font-size: 19.2px;
    line-height: 1.25;
  }

  .benefit-card__text {
    font-size: 13.6px;
    line-height: 1.35;
  }

  .routes__content {
    width: min(100% - 19.2px, 1024px);
  }

  .routes__tabs {
    grid-template-columns: 1fr;
  }

  .route-card {
    min-height: auto;
  }

  .route-card__title,
  .route-card__title-text {
    font-size: 22.4px;
    text-align: center;
  }

  .route-card__intro {
    font-size: 16px;
  }

  .route-card__text {
    font-size: 14.4px;
  }

  .route-card__image {
    height: 224px;
    flex: 0 0 auto;
  }

  .contact__title {
    margin-bottom: -22.4px;
  }

  .contact__main {
    gap: 44.8px;
  }

  .contact__field input,
  .contact__submit-text {
    font-size: 19.2px;
  }

  .contact__address-title,
  .contact__link-text {
    font-size: 24px;
  }
}
</style>
