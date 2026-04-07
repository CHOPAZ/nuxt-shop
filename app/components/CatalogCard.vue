<script setup lang="ts">
import type { IProduct } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const product = defineProps<IProduct>();
const image = computed(
  () => `url(${config.public.imageurl}${product.images[0]})`,
);
</script>

<template>
  <NuxtLink :to="`/catalog/${product.id}`" class="card">
    <div class="card__image">
      <span v-if="product.discount > 0" class="card__discount"
        >-{{ product.discount }}%</span
      >
    </div>
    <div class="card__bottom">
      <div class="card__title">
        {{ product.name }}
      </div>
      <div class="card__price">${{ product.price }}</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-decoration: none;

  &__image {
    aspect-ratio: 1/1;
    border-radius: 8px;
    width: 100%;
    padding: 16px;
    background-size: cover;
    background-image: v-bind(image);
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
