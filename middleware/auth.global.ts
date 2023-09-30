import {useAuthStore} from "~/@modules/auth/stores/auth-store";
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.key === 'is-guest' && authStore.user.token) return navigateTo('/')
  if (to.meta.key === "require-auth" && !authStore.user.token) return navigateTo('/login')
})
