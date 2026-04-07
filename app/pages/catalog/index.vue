<script setup lang="ts">
import CatalogCard from "~/components/CatalogCard.vue";
import VSelect from "~/components/VSelect.vue";

import type { ICategoriesGET } from "~/interfaces/category.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const select = ref("");

const { data } = await useFetch<ICategoriesGET>(API_URL + "/categories");

const defaultSelect = { label: "Категории", value: "" };
const categoriesSelect = computed(() => {
  return data.value
    ? data.value.categories
        .map((c) => ({
          label: c.name,
          value: c.id.toString(),
        }))
        .concat(defaultSelect)
    : [defaultSelect];
});

const testProduct = {
  id: 1,
  name: "Lira Earrings",
  price: 20,
  short_description: "Элегантные золотистые серьги-кольца",
  long_description:
    "Отлично подойдут к любому гардеробу. Чистое золото высокой пробы, которое не оставит вас равнодушными к качеству изделия.",
  sku: "12",
  discount: 0,
  images: [
    "/images/jewelry/lira1.jpg",
    "/images/jewelry/lira2.jpg",
    "/images/jewelry/lira3.jpg",
    "/images/jewelry/lira4.jpg",
  ],
  category_id: 1,
  category: {
    id: 1,
    name: "Серьги",
    alias: "earrings",
  },
};
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог товаров</h1>
    <div class="catalog__content">
      <div class="catalog__filter">
        <VSelect v-model="select" :options="categoriesSelect" />
      </div>
      <div class="catalog__cards">
        <CatalogCard v-bind="testProduct" />
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
}
</style>
