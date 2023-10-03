export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.auth === 'is-guest' && authStore.user.token) return navigateTo('/')
  if (to.meta.auth === "require-auth" && !authStore.user.token) return navigateTo('/login')
})
