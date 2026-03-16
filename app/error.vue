<script setup lang="ts">
import type { NuxtError } from "#app";
import VButton from "./components/VButton.vue";

const { error } = defineProps<{ error: NuxtError }>();

function goIndexPage() {
  navigateTo("/");
}
</script>

<template>
  <div class="error">
    <h1>{{ error.status }} ошибка</h1>
    <div v-if="error.status === 404" class="error__message">
      Страница не найдена, попробуйте перейти на главную страницу
    </div>
    <div v-else class="error__message">{{ error.statusText }}</div>
    <VButton color="ghost" @click="goIndexPage">Главная страница</VButton>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100vh;
}
.error__message {
  color: var(--color-dark-grey);
  text-align: center;
  font-family: var(--font-DM-Sans);
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 40px;
  max-width: 400px;
}
</style>
