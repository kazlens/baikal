<template>
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
    <LeadForm variant="mobile" submit-label="Оставить заявку" />
  </section>
</template>

<style scoped>
.mobile-request {
  padding: 31px 23px 35px;
}

.mobile-request-wave {
  display: flex;
  justify-content: center;
  padding: 13px 0 0;
  overflow: hidden;
}

.mobile-request-wave svg {
  width: min(446px, 122vw);
  height: auto;
  flex: 0 0 auto;
}

.mobile-request__title {
  margin: 0;
  color: #ffffff;
  font-size: 34px;
  font-weight: 500;
  line-height: 1.31;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.74);
}
</style>
