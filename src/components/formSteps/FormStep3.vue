<template>
  <div>
    <h2>3: Identifikácia</h2>
    <p> Vyplnte prosím Identifikáčné údaje</p>
    <br>
    <div>
      <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="idNumber"
      > Rodné číslo</Label>
      <input 
        id="idNumber" 
        type="text" 
        v-model="formStore.formData.idNumber" 
        placeholder="Zadajte rodné číslo" 
      />
      <p v-if="formStore.errors.idNumber" class="error">{{ formStore.errors.idNumber }}</p>
    </div>
    <div>
      <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="birthDate"
      > Dátum narodenia</Label>
      <input 
        id="birthDate" 
        type="date" 
        v-model="formStore.formData.birthDate" 
      />
      <p v-if="formStore.errors.birthDate" class="error">{{ formStore.errors.birthDate }}</p>
    </div>
    <div>
      <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="idCard"
      > Číslo občianskeho preukazu</Label>
      <input 
        id="idCard" 
        type="text" 
        v-model="formStore.formData.idCard" 
        placeholder="Zadajte číslo OP" 
      />
      <p v-if="formStore.errors.idCard" class="error">{{ formStore.errors.idCard }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from '../../stores/formStore';
import { Label } from 'reka-ui';


const formStore = useFormStore();


</script>

<style scoped>
  #birthDate {
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem;
  }
</style>
