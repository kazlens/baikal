<template>
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
          v-for="route in routes"
          :key="route.id"
          class="routes__tab"
          :class="{ 'routes__tab--active': route.id === selectedRouteId }"
          :style="{ '--route-tab-bg': `url(${route.tabImage})` }"
          :aria-pressed="route.id === selectedRouteId"
          type="button"
          @click="selectRoute(route.id)"
        >
          {{ route.tab }}
        </button>
      </div>

      <DesktopRouteCard :cards="selectedCards" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { routes } from '~/data/routes'

const { selectedRouteId, selectRoute } = useRouteSelection()

const selectedCards = computed(
  () => routes.find((route) => route.id === selectedRouteId.value)!.desktopCards,
)
</script>

<style scoped>
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
</style>
