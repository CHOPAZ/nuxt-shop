<script setup lang="ts">
  definePageMeta({ middleware: 'auth' })

  const storeAuth = useAuthStore()
</script>

<template>
  <div><NuxtLink to="/" @click="storeAuth.clearToken">Выход</NuxtLink></div>
</template>

<style scoped></style>
