<template>
  <div>
    <h2>4: Adresa a banka</h2>
    <p> Vyplnte prosím Adresu a číslo účtu</p>
    <br>
    <!-- <pre>{{ formStore.formData }}</pre> -->
    <div>
      <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="street"
      > Ulica</Label>
      <input 
        id="street" 
        type="text" 
        v-model="formStore.formData.street" 
        placeholder="Zadajte ulicu" 
      />
      <p v-if="formStore.errors.street" class="error">{{ formStore.errors.street }}</p>
    </div>
    <div>
      <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="city"
      > Mesto</Label>
      <input 
        id="city" 
        type="text" 
        v-model="formStore.formData.city" 
        placeholder="Zadajte mesto" 
      />
      <p v-if="formStore.errors.city" class="error">{{ formStore.errors.city }}</p>
    </div>
    <div>
      <Label key="postalCode"
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="postalCode"
      > PSČ</Label>
      <input 
        id="postalCode" 
        type="text" 
        v-model="formStore.formData.zip" 
        placeholder="Zadajte PSČ" 
      />
      <p v-if="formStore.errors.zip" class="error">{{ formStore.errors.zip }}</p>
    </div>
    <div>
      <Label 
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="bankAccount"
      > Číslo účtu</Label>
      <input 
        id="bankAccount" 
        type="text" 
        v-model="formStore.formData.bankAccount" 
        placeholder="Zadajte číslo účtu" 
      />
      <p v-if="formStore.errors.bankAccount" class="error">{{ formStore.errors.bankAccount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from '../../stores/formStore';

const formStore = useFormStore();


</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
  