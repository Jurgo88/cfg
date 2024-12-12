<template>
    <div>
      <h2>1: Údaje o investícii</h2>
      <label for="investmentAmount">Pravidelná výška investície (Kč):</label>
      <!-- <SliderRoot
      id="investmentAmount"
      :value="formStore.formData.investment"
      @update:modelValue="onSliderChange"
      class="relative flex items-center select-none touch-none w-[200px] h-5"
      :max="10000"
      :step="100"
    >
      <SliderTrack class="bg-stone-500/30 relative grow rounded-full h-2">
        <SliderRange class="ranger absolute bg-grass8 rounded-full h-full" />
      </SliderTrack>
      <SliderThumb
        class="block w-6 h-6 bg-white rounded-full hover:bg-stone-50 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-grass9"
        aria-label="Volume"
      />
    </SliderRoot> -->
    
    <br>
    <input
        class="ranger"
        id="investmentAmount"
        type="range"
        min="0"
        max="10000"
        step="100"
        v-model="formStore.formData.investment"
      />
    <br>
      <input
        label="Pravidelná výška investície (Kč):"
        name="investment"
        type="number"
        min="0"
        max="10000"
        step="100"
        v-model="formStore.formData.investment"
        />
      <p>Vybraná suma: {{ formStore.formData.investment }} Kč</p>
        <p v-if="formStore.errors.investment" class="error">{{ formStore.errors.investment }}</p>
      <!-- <ButtonNext :onClick="nextStep"></ButtonNext> -->
    </div>
</template>

  
<script setup lang="ts">
    import { useFormStore } from '../../stores/formStore';
    const formStore = useFormStore();   

</script>

<style scoped>
.ranger {
  width: 100%;
  background-color: black;
}
input {
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem;
}
/* .error {
  color: red;
  font-size: 0.9rem;
} */
</style>
  