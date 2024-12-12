<template>
  <div>
    <h2>3: Identifikácia</h2>
    <div>
      <label for="idNumber">Rodné číslo:</label>
      <input 
        id="idNumber" 
        type="text" 
        v-model="formStore.formData.idNumber" 
        placeholder="Zadajte rodné číslo" 
      />
      <p v-if="formStore.errors.idNumber" class="error">{{ formStore.errors.idNumber }}</p>
    </div>
    <div>
      <label for="birthDate">Dátum narodenia:</label>
      <input 
        id="birthDate" 
        type="date" 
        v-model="formStore.formData.birthDate" 
      />
      <p v-if="formStore.errors.birthDate" class="error">{{ formStore.errors.birthDate }}</p>
    </div>
    <div>
      <label for="idCard">Číslo občianskeho preukazu:</label>
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


const formStore = useFormStore();


</script>

<style scoped>
input {
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem;
}
</style>
