<template>
  <div class="mobile-page" aria-label="Мобильная версия страницы">
    <MobileHero />

    <div class="mobile-content">
      <MobileBenefits />
      <MobileRoutes />
      <MobileRequest />
      <MobileContacts />
    </div>
  </div>
</template>

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
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.06) 0%, rgba(4, 26, 38, 0.56) 58%, rgba(4, 26, 38, 0.84) 100%),
      url('~/assets/img/waves.jpg') center 930px / auto 82% no-repeat,
      #041a26;
    font-family: 'Jost', Arial, sans-serif;
  }

  .mobile-content {
    background:
      linear-gradient(180deg, rgba(4, 26, 38, 0.04) 0%, rgba(4, 26, 38, 0.24) 45%, rgba(4, 26, 38, 0.64) 100%),
      url('~/assets/img/waves.jpg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center top;
  }
}
</style>
