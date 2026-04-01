<script setup lang="ts">
import VInput from "./VInput.vue";
</script>

<template>
  <div class="footer">
    <hr />
    <div class="footer__top">
      <ul>
        <li><NuxtLink to="#">Контакты</NuxtLink></li>
        <li><NuxtLink to="#">Условия покупки</NuxtLink></li>
        <li><NuxtLink to="#">Доставка и возврат</NuxtLink></li>
      </ul>
      <div class="footer__form">
        <VInput
          placeholder="Введите email для новостей и акций"
          variant="black"
        />
        <button class="footer__subscribe">
          <Icon name="icons:arrow-right" size="8px" />
        </button>
      </div>
    </div>
    <div class="footer__bottom">
      <div>© {{ new Date().getFullYear() }} Shoppe</div>
      <div class="footer__social">
        <NuxtLink to="#">
          <Icon name="icons:in" size="30px" />
        </NuxtLink>
        <NuxtLink to="#">
          <Icon name="icons:facebook" size="30px" />
        </NuxtLink>
        <NuxtLink to="#">
          <Icon name="icons:instagram" size="30px" />
        </NuxtLink>
        <NuxtLink to="#">
          <Icon name="icons:twitter" size="30px" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 0 16px;
  margin: 0 auto;
  max-width: 1248px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  & hr {
    border: none;
    border-bottom: 1px solid var(--color-gray);
    height: 1px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & ul {
      list-style: none;
      display: flex;
      padding: 0;
      gap: 30px;
    }

    & ul a {
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--color-dark-gray);
      text-decoration: none;
    }

    & ul a:hover {
      color: var(--color-dark);
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__social {
    display: flex;
    gap: 20px;

    & a {
      color: var(--color-dark-gray);
    }

    & a:hover {
      color: var(--color-dark);
    }
  }

  &__form {
    position: relative;

    & input {
      min-width: 380px;
    }
  }

  &__subscribe {
    position: absolute;
    right: 0;
    top: 10px;
    background: none;
    border: none;
    color: var(--color-dark-gray);
  }
}
</style>
