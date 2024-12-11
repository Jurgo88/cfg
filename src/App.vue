<script setup lang="ts">
import MultiStepForm from './views/MultiStepForm.vue';
</script>

<template>
  <div>
    <img class="logo" src="https://kariera.cfg.cz/wp-content/uploads/2022/11/logo_cfg.png" alt="Logo CFG" />
    <h1>Investujte s nami</h1>
    <MultiStepForm />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
