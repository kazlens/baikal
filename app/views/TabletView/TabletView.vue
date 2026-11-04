<template>
  <div class="tablet-view" aria-label="Планшетная версия страницы">
    <TabletHero />
    <TabletBenefits />
    <TabletRoutes />
    <TabletContact />
  </div>
</template>

<style scoped>
.tablet-view {
  display: none;
}

@media (min-width: 540px) and (max-width: 1056px) {
  .tablet-view {
    display: block;
    width: 100%;
    min-width: 540px;
    overflow: hidden;
    color: #ffffff;
    background: #031d2b;
    font-family: 'Jost', Arial, sans-serif;
  }
}
</style>
