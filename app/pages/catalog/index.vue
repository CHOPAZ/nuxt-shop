<script setup lang="ts">
import CatalogCard from "~/components/CatalogCard.vue";
import VSelect from "~/components/VSelect.vue";

import type { ICategoriesGET } from "~/interfaces/category.interface";
import type { IProductsGET } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const select = ref("");

const { data: categoriesData } = await useFetch<ICategoriesGET>(
  API_URL + "/categories",
);
const { data: productData } = await useFetch<IProductsGET>(
  API_URL + "/products",
  {
    query: {
      limit: 20,
      offset: 0,
    },
  },
);

const defaultSelect = { label: "Категории", value: "" };
const categoriesSelect = computed(() => {
  return categoriesData.value
    ? [defaultSelect].concat(
        categoriesData.value.categories.map((c) => ({
          label: c.name,
          value: c.id.toString(),
        })),
      )
    : [defaultSelect];
});
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог товаров</h1>
    <div class="catalog__content">
      <div class="catalog__filter">
        <VSelect v-model="select" :options="categoriesSelect" />
      </div>
      <div class="catalog__cards">
        <CatalogCard
          v-for="product in productData?.products"
          :key="product.id"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  &__title {
    text-align: left;
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    gap: 36px;
  }

  &__filter {
    width: 260px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    width: 100%;
    gap: 14px;
  }
}
</style>
