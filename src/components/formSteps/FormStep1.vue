<template>
    <div>
      <h2>1: Údaje o investícii</h2>
      <label for="investmentAmount">Pravidelná výška investície (Kč):</label>
      <input
        id="investmentAmount"
        type="range"
        min="0"
        max="10000"
        step="100"
        v-model="formStore.formData.investment"
      />
      <br>
      <input
        type="number"
        min="0"
        max="10000"
        step="100"
        v-model="formStore.formData.investment"
        />
      <p>Vybraná suma: {{ formStore.formData.investment }} Kč</p>
        <p v-if="formStore.errors.investment" class="error">{{ formStore.errors.investment }}</p>
      <button @click="nextStep">Ďalej</button>
    </div>
</template>

  
<script setup lang="ts">
    import { useFormStore } from '../../stores/formStore';
    
    const formStore = useFormStore();    

    const nextStep = () => {
        formStore.validateInvestment();
        if (!formStore.errors.investment) {
            formStore.nextStep();
        } else {
            console.error('Chyba:', formStore.errors.investment);
        }
    };
</script>
  