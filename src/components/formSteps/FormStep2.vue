

<template>
  <div>
    <h2>2: Kontaktné údaje</h2>
    <p> Vyplnte prosím nasledujúce údaje kde Vás môžeme kontaktovať</p>
    <pre>{{ formStore.formData }}</pre>
    <label>Meno a priezvisko</label>
    <input
      v-model="formStore.formData.name"
      type="text"
      name="name"
    />
    <br>
    <p v-if="formStore.errors.name" class="error">{{ formStore.errors.name }}</p>
    
    <label>Emailová adresa</label>
    <input
      v-model="formStore.formData.email"
      type="email"
      name="email"
    />
    <br>
    <p v-if="formStore.errors.email" class="error">{{ formStore.errors.email }}</p>

    <label>Telefónne číslo</label>
    <input
      v-model="formStore.formData.phone"
      type="tel"
      name="phone"
    />
    <br>
    <p v-if="formStore.errors.phone" class="error">{{ formStore.errors.phone }}</p>

    <button @click="nextStep">Ďalej</button>
  </div>
</template>

<script setup lang="ts">
    import { useFormStore } from '../../stores/formStore';

    const formStore = useFormStore();

    const nextStep = () => {
        formStore.validateName();
        formStore.validateEmail();
        formStore.validatePhone();
        if (!formStore.errors.name && !formStore.errors.email && !formStore.errors.phone) {
            formStore.nextStep();
        } else {
            console.log('Chyby:', formStore.errors);
        }
    };
</script>
