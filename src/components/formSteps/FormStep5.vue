<template>
    <div>
      <h2>Dokončenie formulára</h2>
      <pre>{{ formStore.formData }}</pre>
      <button @click="handleSubmit">Odoslať formulár</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
 
    <h3>Souhrn</h3>
    <button @click="fetchData">Načíst souhrn</button>
    <ul v-if="data">
      <li v-for="item in data" :key="item.id">
        <strong>{{ item.title }}</strong>
        <p>{{ item.body }}</p>
      </li>
    </ul>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>

  </template>

    <script setup lang="ts">
    import { useFormStore } from '../../stores/formStore';
    import { ref } from 'vue';

    const formStore = useFormStore();

    const errorMessage = ref<string | null>(null);

    const handleSubmit = async () => {
        try {
            errorMessage.value = null; // Reset chyby
            const result = await formStore.submitForm();
            console.log('Odoslané dáta:', result);
            alert('Formulár bol úspešne odoslaný!');
            formStore.resetForm(); // Vyprázdni formulár
        } catch (error) {
            errorMessage.value = 'Nepodarilo sa odoslať formulár. Skúste znova.';
        }
    };

    // Fetch Data
    const data = ref(null);
    const fetchData = async () => {
        try {
            errorMessage.value = null; // Reset chyby
            const result = await formStore.fetchSummary();
            data.value = result;
        } catch (error) {
            errorMessage.value = 'Nepodarilo sa načítať dáta. Skúste znova.';
        }
    };
    </script>
