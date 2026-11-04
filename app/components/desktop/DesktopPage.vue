<template>
  <div class="desktop-page">
    <DesktopHero />
    <DesktopBenefits />
    <DesktopRoutes />
    <DesktopContact />
  </div>
</template>

<style scoped>
.desktop-page {
  display: contents;
}

@media (max-width: 1056px) {
  .desktop-page {
    display: none;
  }
}
</style>
