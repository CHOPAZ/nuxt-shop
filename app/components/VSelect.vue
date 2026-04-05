<script setup lang="ts">
const model = defineModel<string>();
const { options } = defineProps<{
  options: { label: string; value: string }[];
}>();
</script>

<template>
  <div class="select">
    <select v-model="model" class="select-field">
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.select {
  position: relative;

  &-field {
    appearance: none;
    background-color: transparent;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    padding: 15px 12px;
    width: 100%;
    font-size: 14px;
  }
}
</style>
