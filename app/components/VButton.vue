<script setup lang="ts">
const { color = "primary" } = defineProps<{
  color?: "primary" | "ghost";
}>();
</script>

<template>
  <button :class="color">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--color-black);
}
.primary {
  background: var(--color-black);
  color: var(--color-white);
}

.primary:hover {
  background: var(--color-black-light);
}

.ghost {
  background: var(--color-white);
  color: var(--color-black);
}

.ghost:hover {
  background: var(--color-black-light);
  color: var(--color-white);
}
</style>
