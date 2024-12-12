<template>
    <div class="multistepForm">
        <div>
            <div v-if="formStore.currentStep != totalSteps">
                <p>
                    Vyplňte prosím následujúci formulár
                </p>
                <div class="h-5 border-b-2 border-b-grey"></div>
                <br>
            </div>
            <div v-else>Ďakujeme za vyplnenie formulára
                <div class="h-5 border-b-2 border-b-grey"></div>
                <br>
                <p>
                    Vaše odošlete stlačením tlačidla "Odoslať formulár"
                </p>
                <br> 
            </div>
            <hr>
        </div>

        
        <div class="progress w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
            <div :style="{ width: `${(formStore.currentStep / totalSteps) * 100}%` }" class="progress-bar"></div>
        </div>
        
    
        <component
        :is="currentComponent"
        :formData="formStore.formData"
        :onNext="nextStep"
        :onPrev="prevStep"
        />

        <hr>
        <br>

        <div v-if="formStore.currentStep === 1" class="flex justify-end">
            <ButtonNext :onClick="nextStep"></ButtonNext>
        </div>
        <div v-else-if="formStore.currentStep > 1 && formStore.currentStep < totalSteps" class="flex justify-between">
            <button class="btn buttonBack" @click="prevStep">Späť</button>
            <ButtonNext :onClick="nextStep"></ButtonNext>
        </div>
        <div v-else-if="formStore.currentStep === totalSteps" class="flex justify-start">
            <button class="btn buttonBack" @click="prevStep">Späť</button>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useFormStore } from '../stores/formStore'; 
    import ButtonNext from '../components/ButtonNext.vue';
  
 
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
    .buttonBack {
        /* position: relative;
        top: -40px;
        min-width: 100px; */
    }
    .error {
        color: red;
        font-size: 0.9rem;
        border: 1px solid red;
    }
    input {
        margin-bottom: 1rem;
        width: 100%;
        padding: 0.5rem;
    }
  </style>
  