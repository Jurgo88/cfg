<script setup lang="ts">
import MultiStepForm from './views/MultiStepForm.vue';
</script>

<template>
  <div class="w-full h-full content-between">
    <div class="content-start">
      <img class="logo" src="https://kariera.cfg.cz/wp-content/uploads/2022/11/logo_cfg.png" alt="Logo CFG" />
      <h1 class="flex items-center justify-center">Investujte s nami</h1>
    </div>

    <br>
    <div class="myForm content-end">
      <MultiStepForm />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 8em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  left: 50%;
  transform: translateX(-50%);
  position: relative;

}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.myForm {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 0px;
  box-shadow: 0 0 10px #ccc;
}
</style>
