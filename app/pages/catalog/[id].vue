<script setup lang="ts">
  import type { IProduct } from '~/interfaces/product.interface'

  const route = useRoute()
  const API_URL = useAPI()

  const { data } = await useFetch<{ product: IProduct }>(`${API_URL}/products/${route.params.id}`)

  useSeoMeta({
    title: `Купить ${data.value?.product.name}`,
    description: data.value?.product.short_description,
  })
</script>

<template>
  <div>catalog</div>
</template>

<style scoped></style>
