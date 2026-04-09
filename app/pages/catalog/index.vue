<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import CatalogCard from "~/components/CatalogCard.vue";
import VSelect from "~/components/VSelect.vue";

import type { ICategoriesGET } from "~/interfaces/category.interface";
import type { IProductsGET } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const route = useRoute();
const router = useRouter();
const search = ref(route.query.search?.toString() || "");
const category_id = ref(route.query.category_id?.toString() || "");

watch([category_id, search], () => debounce(category_id, search));

const debounce = useDebounceFn((category_id, search) => {
  router.replace({
    query: {
      category_id: category_id.value,
      search: search.value,
    },
  });
}, 700);

const query = computed(() => ({
  limit: route.query.limit ?? 20,
  offset: route.query.offset ?? 0,
  category_id: route.query.category_id || undefined,
  search: route.query.search || undefined,
}));

//Получение категорий (для select)
const { data: categoriesData } = await useFetch<ICategoriesGET>(
  API_URL + "/categories",
);

//Получение карточек продуктов
const { data: productData } = await useFetch<IProductsGET>(
  API_URL + "/products",
  {
    key: "get-products",
    query,
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
        <div class="catalog__search">
          <VInput v-model="search" variant="grey" placeholder="Поиск..." />
          <Icon name="icons:search" size="24px" />
        </div>
        <VSelect v-model="category_id" :options="categoriesSelect" />
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
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__search {
    position: relative;
    width: 100%;

    & span {
      position: absolute;
      top: 8px;
      right: 0px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    width: 100%;
    gap: 64px 12px;
  }
}
</style>
