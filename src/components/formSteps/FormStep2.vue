

<template>
  <div>
    <h2>2: Kontaktné údaje</h2>
    <p> Vyplnte prosím nasledujúce údaje kde Vás môžeme kontaktovať</p>
    <!-- <pre>{{ formStore.formData }}</pre> -->
    <!-- <TextInput
        label="Meno a priezvisko"
        v-model="formStore.formData.name"
        name="name"
        placeholder="Zadajte meno a priezvisko"
    /> -->
    <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="name"
    > Meno a priezvisko</Label>
    <input
        v-model="formStore.formData.name"
        type="text"
        name="name"
        placeholder="Zadajte meno a priezvisko"
    />
    <br>
    <p v-if="formStore.errors.name" class="error">{{ formStore.errors.name }}</p>
    
    <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="email"
    > Emailová adresa</Label>
    <input
        v-model="formStore.formData.email"
        type="email"
        name="email"
        placeholder="Zadajte emailovú adresu"
    />
    <br>
    <p v-if="formStore.errors.email" class="error">{{ formStore.errors.email }}</p>

    <Label
        class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
        for="phone"
    > Telefónne číslo</Label>
    <input
        v-model="formStore.formData.phone"
        type="tel"
        name="phone"
        placeholder="Zadajte telefónne číslo"
    />
    <br>
    <p v-if="formStore.errors.phone" class="error">{{ formStore.errors.phone }}</p>


  </div>
</template>

<script setup lang="ts">
    import { useFormStore } from '../../stores/formStore';
    import { Label } from 'reka-ui';
    


    const formStore = useFormStore();

  
</script>

<style scoped>
    input {
        margin-bottom: 1rem;
        width: 100%;
        padding: 0.5rem;
    }
    .error {
        color: red;
        font-size: 0.9rem;
    }
</style>
