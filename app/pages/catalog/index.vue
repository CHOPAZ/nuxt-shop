<script setup lang="ts">
import VSelect from "~/components/VSelect.vue";

// import type { ICategoriesGET } from "~/interfaces/category.interface";

// const config = useRuntimeConfig();
// const API_URL = config.public.apiurl;
const select = ref("");

// try {
//   const data = await $fetch<ICategoriesGET>(API_URL + "/categories");
//   console.log(data);
// } catch (e) {
//   console.error(e);
// }

// const { data } = await useFetch<ICategoriesGET>(API_URL + "/categories");
// console.log(data.value);
</script>

<template>
  <div>
    <VSelect
      v-model="select"
      :options="[
        { label: 'Categories', value: '' },
        { label: 'Odin', value: '1' },
        { label: 'Dva', value: '2' },
      ]"
    />
  </div>
</template>

<style scoped></style>
