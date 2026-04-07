<script setup lang="ts">
import type { IProduct } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const product = defineProps<IProduct>();
</script>

<template>
  <NuxtLink to="/" class="card">
    <div
      class="card__image"
      :style="{
        background: `url(${config.public.imageurl}${product.images[0]}) lightgray 50% / cover no-repeat`,
      }"
    >
      <span class="card__discount">-{{ product.discount }}%</span>
    </div>
    <div class="card__title">
      {{ product.name }}
    </div>
    <div class="card__price">${{ product.price }}</div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 320px;
  text-decoration: none;

  &__image {
    aspect-ratio: 1/1;
    border-radius: 8px;
    width: 100%;
    padding: 16px;
  }

  &__title {
    font-size: 20px;
    line-height: 26px;
    color: var(--color-black);
  }

  &__price {
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    text-transform: capitalize;
    color: var(--color-accent);
  }

  &__discount {
    background: var(--color-accent);
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 12px;
    color: var(--color-white);
  }
}
</style>
