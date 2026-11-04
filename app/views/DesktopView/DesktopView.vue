<template>
  <div class="desktop-view">
    <DesktopHero />
    <DesktopBenefits />
    <DesktopRoutes />
    <DesktopContact />
  </div>
</template>

<style scoped>
.desktop-view {
  display: contents;
}

@media (max-width: 1056px) {
  .desktop-view {
    display: none;
  }
}
</style>
