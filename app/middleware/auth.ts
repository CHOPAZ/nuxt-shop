export default defineNuxtRouteMiddleware(() => {
  const authToken = useCookie('auth')
  console.log(authToken.value)

  if (!authToken.value) {
    return navigateTo('/auth/login')
  }
})
