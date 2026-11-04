<template>
  <h1 :id="id" class="hero-heading" :class="`hero-heading--${variant}`">
    <span class="hero-heading__line">КРУИЗЫ<br /></span>
    <span class="hero-heading__subtitle">ПО БАЙКАЛУ</span>
  </h1>
  <p class="hero-heading hero-heading--shadow" :class="`hero-heading--${variant}`" aria-hidden="true">
    <span class="hero-heading__line">КРУИЗЫ<br /></span>
    <span class="hero-heading__subtitle">ПО БАЙКАЛУ</span>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  variant: 'desktop' | 'tablet' | 'mobile'
}>()
</script>

<style scoped>
.hero-heading--desktop {
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
  text-shadow: 15.2px 0 4.64px #173e622b;
  mix-blend-mode: overlay;
}

.hero-heading--desktop.hero-heading--shadow {
  text-shadow: 15.2px 0 4.64px #173e6278;
  opacity: 0.4;
  mix-blend-mode: normal;
}

.hero-heading--desktop .hero-heading__line {
  font-weight: 700;
  color: #ffffff;
  font-size: 120px;
  letter-spacing: 0;
  line-height: 168px;
}

.hero-heading--desktop .hero-heading__subtitle {
  font-size: 73.6px;
  line-height: 103.04px;
}

.hero-heading--tablet {
  position: absolute;
  inset: 0;
  color: #ffffff;
  font-size: clamp(78px, 11.3vw, 95px);
  font-weight: 700;
  line-height: 0.92;
  text-align: center;
  letter-spacing: 0;
  text-shadow: 11px 0 5px rgba(20, 57, 89, 0.38);
  mix-blend-mode: overlay;
}

.hero-heading--tablet.hero-heading--shadow {
  opacity: 0.58;
  mix-blend-mode: normal;
  text-shadow: 11px 0 5px rgba(20, 57, 89, 0.48);
}

.hero-heading--tablet .hero-heading__subtitle {
  font-size: clamp(50px, 7vw, 59px);
  line-height: 1.28;
}

.hero-heading--mobile {
  position: absolute;
  inset: 0;
  color: #ffffff;
  font-size: clamp(70px, 20vw, 88px);
  font-weight: 700;
  line-height: 0.94;
  text-align: center;
  letter-spacing: 0;
  text-shadow: 8px 0 5px rgba(20, 57, 89, 0.34);
  mix-blend-mode: overlay;
}

.hero-heading--mobile.hero-heading--shadow {
  opacity: 0.68;
  mix-blend-mode: normal;
  text-shadow: 8px 0 5px rgba(20, 57, 89, 0.46);
}

.hero-heading--mobile .hero-heading__subtitle {
  font-size: clamp(44px, 13vw, 57px);
  line-height: 1.28;
}
</style>
