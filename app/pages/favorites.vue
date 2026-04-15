<script setup lang="ts">
  import type { IProduct } from '~/interfaces/product.interface'

  const storeFavorites = useFavoritesStore()

  const config = useRuntimeConfig()
  const API_URL = config.public.apiurl

  const favoritesProducts = ref<IProduct[]>()

  watchEffect(async () => {
    const res = await Promise.all(
      storeFavorites.favoritesIdx.map((idx) => {
        return $fetch<{ product: IProduct }>(`${API_URL}/products/${idx}`)
      }),
    )
    favoritesProducts.value = res.map((el) => el.product)
  })
</script>

<template>
  <div class="favorites__cards">
    <CatalogCard v-for="product in favoritesProducts" :key="product.id" v-bind="product" />
  </div>
</template>

<style scoped>
  .favorites__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    width: 100%;
    gap: 64px 12px;
  }
</style>
