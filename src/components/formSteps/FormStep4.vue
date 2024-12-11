<template>
  <div>
    <h2>4: Adresa a banka</h2>
    <pre>{{ formStore.formData }}</pre>
    <div>
      <label for="street">Ulica:</label>
      <input 
        id="street" 
        type="text" 
        v-model="formStore.formData.street" 
        placeholder="Zadajte ulicu" 
      />
      <p v-if="formStore.errors.street" class="error">{{ formStore.errors.street }}</p>
    </div>
    <div>
      <label for="city">Mesto:</label>
      <input 
        id="city" 
        type="text" 
        v-model="formStore.formData.city" 
        placeholder="Zadajte mesto" 
      />
      <p v-if="formStore.errors.city" class="error">{{ formStore.errors.city }}</p>
    </div>
    <div>
      <label for="postalCode">PSČ:</label>
      <input 
        id="postalCode" 
        type="text" 
        v-model="formStore.formData.zip" 
        placeholder="Zadajte PSČ" 
      />
      <p v-if="formStore.errors.zip" class="error">{{ formStore.errors.zip }}</p>
    </div>
    <button @click="handleNext">Odoslať</button>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from '../../stores/formStore';

const formStore = useFormStore();

const handleNext = () => {
    formStore.validateStreet();
    formStore.validateCity();
    formStore.validateZip();


  // Skontroluj, či sú všetky chyby pre tieto polia prázdne
  if (!formStore.errors.street && !formStore.errors.city && !formStore.errors.zip) {
    formStore.nextStep();
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
  