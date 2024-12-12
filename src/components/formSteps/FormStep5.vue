<template>
    <div>
        <div>
            <h2>Odoslanie formulára</h2>
            <p>Prosím skontrolujte zadané údaje a potvrďte odoslanie formulára</p>
            <!-- {{ formStore.formData }} -->
            <!-- <div v-for="(value, key) in formStore.formData" :key="key">
                <strong>{{ key }}:</strong> {{ value }}
            </div> -->
            <div class="h-10"></div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div><strong>Vaša Investicia : </strong></div>
                <div class="">{{ formStore.formData.investment }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div><strong> Meno: </strong> </div>
                <div>{{ formStore.formData.name }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div><strong> Email: </strong> </div>
                <div>{{ formStore.formData.email }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div><strong> Telefón: </strong> </div>
                <div>{{ formStore.formData.phone }}</div>
                </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div> <strong>ID karta</strong></div>
                <div>{{ formStore.formData.idCard }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div> <strong> Rodné číslo</strong></div>
                <div>{{ formStore.formData.idNumber }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div> <strong> Dátum narodenia</strong></div>
                <div>{{ formStore.formData.birthDate }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div> <strong> Adresa</strong></div>
                <div>{{ formStore.formData.city }},  {{ formStore.formData.street }},  {{ formStore.formData.zip }}</div>
            </div>
            <div class="flex justify-between border-b-2 border-b-black">
                <div> <strong> Číslo účtu</strong></div>
                <div>{{ formStore.formData.bankAccount }}</div>
            </div>
            <div class="h-10"></div>
            

        </div>

        <!-- <pre>{{ formStore.formData }}</pre> -->
        <button class="btn" @click="handleSubmit">Odoslať formulár</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    
        <div>
            <p class="p-10">Načítať údaje z  <a src ="https://jsonplaceholder.typicode.com" >jsonplaceholder.typicode.com</a> </p>
            <button class="btn" @click="fetchData">Načítať dáta</button>
            <br>
            <br>
            <br>
            <div v-if="data">
                Údaje načítané z post/1
                <br>
                <br>
                <strong>{{ data.title }} </strong>
                <br>
                <p>
                    {{ data.body }}
                </p>
                <br>
            </div>

            <!-- <ul v-if="data">
                {{ data.id }}
                {{ data.title }}
            <li v-for="item in data" :key="item.id">
                <strong>{{ item.title }} kokot</strong>
                <p>{{ item.body }}</p>
            </li>
            </ul> -->
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
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
    interface PostData {
        title: string;
        body: string;
    }
    
    const data = ref<PostData | null>(null);
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
    <style scoped>
    .btn {
        width: 100%;
    }
    </style>
