<template>
    <div>
        <p v-if="formStore.currentStep != totalSteps">Vyplnte prosím následujúci formulár</p>
        <p v-else>Ďakujeme za vyplnenie formulára
            <br> Vaše údaje boli úspešne odoslané
        </p>
        
        <div class="progress">
            <div :style="{ width: `${(formStore.currentStep / totalSteps) * 100}%` }" class="progress-bar"></div>
        </div>
    
        <component
        :is="currentComponent"
        :formData="formStore.formData"
        :onNext="nextStep"
        :onPrev="prevStep"
        />
    
        <div v-if="formStore.currentStep > 1">
            <button @click="prevStep">Späť</button>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useFormStore } from '../stores/formStore'; 
  
 
  import FormStep1 from '../components/formSteps/FormStep1.vue';
  import FormStep2 from '../components/formSteps/FormStep2.vue';
  import FormStep3 from '../components/formSteps/FormStep3.vue';
  import FormStep4 from '../components/formSteps/FormStep4.vue';
  import FormStep5 from '../components/formSteps/FormStep5.vue';
  
  const formStore = useFormStore();
  
  
  const totalSteps = 5;
  
  const nextStep = () => {
    if (formStore.currentStep < totalSteps) formStore.nextStep(); 
  };
  
  const prevStep = () => {
    if (formStore.currentStep > 1) formStore.previousStep(); 
  };
  

  const currentComponent = computed(() => {
    switch (formStore.currentStep) {
      case 1:
        return FormStep1;
      case 2:
        return FormStep2;
      case 3:
        return FormStep3;
      case 4:
        return FormStep4;
      case 5:
        return FormStep5;
      default:
        return null;
    }
  });
  </script>
  
  <style scoped>
  .progress {
    height: 5px;
    background: #eee;
    margin-bottom: 20px;
  }
  .progress-bar {
    height: 100%;
    background: #4caf50;
    transition: width 0.3s;
  }
  </style>
  