<script setup lang="ts">
  import VButton from '~/components/VButton.vue'
  import type { IAuthResponce } from '~/interfaces/auth.interface'

  const API_URL = useAPI().apiURL
  const email = ref<string | undefined>()
  const password = ref<string | undefined>()
  const storeAuth = useAuthStore()

  async function login() {
    const data = await $fetch<IAuthResponce>(`${API_URL}/auth/login`, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })
    storeAuth.setToken(data.token)
    navigateTo('/account')
  }
</script>

<template>
  <div class="login">
    <h1>Мой аккаунт</h1>
    <form class="login__form">
      <div class="login__fields">
        <VInput v-model="email" variant="grey" placeholder="Почта" type="email" />
        <VInput v-model="password" variant="grey" placeholder="Пароль" type="password" />
      </div>
      <div class="login__actions">
        <VButton @click.stop.prevent="login">Вход</VButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .login {
    max-width: 500px;
    margin: 0 auto;

    &__form,
    &__actions,
    &__fields {
      display: flex;
      flex-direction: column;
      gap: 70px;
    }

    &__fields {
      gap: 46px;
    }

    &__actions {
      gap: 13px;

      & a {
        text-decoration: none;
        color: var(--color-black);
      }
    }
  }
</style>
