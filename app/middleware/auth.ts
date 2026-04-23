export default defineNuxtRouteMiddleware(() => {
  const authToken = useCookie<{ token: string }>('auth')

  if (!authToken.value.token) {
    return navigateTo('/auth/login')
  }
})
