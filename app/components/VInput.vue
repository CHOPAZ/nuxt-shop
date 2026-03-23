<script setup lang="ts">
const data = defineModel<string>();
const { variant = "grey" } = defineProps<{ variant?: "grey" | "black" }>();
</script>

<template>
  <input v-model="data" class="input" :class="variant" />
</template>

<style scoped>
.input {
  padding: 12px 0;
  background: none;
  border: none;
  color: var(--color-black);
  outline: none;
}

.input::placeholder {
  color: var(--color-dark-gray);
}

.grey {
  border-bottom: 1px solid var(--color-gray);
}

.black {
  border-bottom: 1px solid var(--color-black);
}
</style>
