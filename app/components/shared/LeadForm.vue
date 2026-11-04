<template>
  <form class="lead-form" :class="`lead-form--${variant}`" action="#" method="post">
    <label class="lead-form__field lead-form__field--name" :for="nameId">
      <input :id="nameId" name="name" type="text" autocomplete="name" placeholder="Имя" aria-label="Имя" />
    </label>
    <label class="lead-form__field lead-form__field--phone" :for="phoneId">
      <input
        :id="phoneId"
        name="phone"
        type="tel"
        autocomplete="tel"
        inputmode="tel"
        placeholder="Телефон"
        aria-label="Телефон"
      />
    </label>
    <button class="lead-form__submit" type="submit">
      <span class="lead-form__submit-text">{{ submitLabel }}</span>
    </button>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: 'desktop' | 'tablet' | 'mobile'
  submitLabel: string
}>()

const nameId = `${props.variant}-name`
const phoneId = `${props.variant}-phone`
</script>

<style scoped>
.lead-form__field input {
  min-width: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #000000;
}

.lead-form__field input::placeholder {
  opacity: 1;
}

.lead-form__submit {
  cursor: pointer;
}

.lead-form--desktop {
  display: flex;
  flex-direction: column;
  width: 320px;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  flex: 0 0 auto;
}

.lead-form--desktop .lead-form__field {
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

.lead-form--desktop .lead-form__field--name {
  gap: 8px;
  backdrop-filter: blur(1.6px) brightness(100%);
  -webkit-backdrop-filter: blur(1.6px) brightness(100%);
}

.lead-form--desktop .lead-form__field--phone {
  box-shadow: 0 3.2px 3.2px #00000040;
}

.lead-form--desktop .lead-form__field input {
  font-weight: 300;
  font-size: 25.6px;
  line-height: 35.84px;
}

.lead-form--desktop .lead-form__field input::placeholder {
  color: #000000b2;
}

.lead-form--desktop .lead-form__submit {
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
}

.lead-form--desktop .lead-form__submit-text {
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

.lead-form--tablet {
  display: grid;
  gap: 26px;
  width: min(260px, 100%);
  margin-top: 39px;
}

.lead-form--tablet .lead-form__field {
  display: flex;
  min-height: 46px;
  align-items: center;
  padding: 0 20px;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.24);
}

.lead-form--tablet .lead-form__field input {
  font-size: 19px;
  font-weight: 300;
  line-height: 1.2;
}

.lead-form--tablet .lead-form__field input::placeholder {
  color: rgba(0, 0, 0, 0.68);
}

.lead-form--tablet .lead-form__submit {
  min-height: 48px;
  border: 0;
  border-radius: 0;
  color: #000000;
  background: #ffff66;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.24);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
}

.lead-form--mobile {
  display: grid;
  gap: 28px;
  width: min(368px, 100%);
  margin: 31px auto 0;
}

.lead-form--mobile .lead-form__field {
  display: flex;
  min-height: 67px;
  align-items: center;
  padding: 0 25px;
  border-radius: 17px;
  background: #ffffff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}

.lead-form--mobile .lead-form__field input {
  font-size: 29px;
  font-weight: 300;
  line-height: 1.2;
}

.lead-form--mobile .lead-form__field input::placeholder {
  color: rgba(0, 0, 0, 0.72);
}

.lead-form--mobile .lead-form__submit {
  min-height: 67px;
  border: 0;
  border-radius: 17px;
  color: #000000;
  background: #ffff00;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
  font-size: 29px;
  font-weight: 400;
  line-height: 1.2;
}
</style>
