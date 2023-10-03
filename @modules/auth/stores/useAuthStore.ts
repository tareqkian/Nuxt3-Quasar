import {Credentials, User} from "~/@modules/auth/helpers/types";

export const useAuthStore = defineStore('auth', () => {
  const user: User = reactive({
    user: '',
    token: '',
    error: null,
    loading: ref(false) as Ref
  })

  const AuthApi = new Auth(user)

  const login = async (credentials: Credentials) => {
    await AuthApi.login(credentials)
    navigateTo('/')
  }
  const register = async (credentials: Credentials) => {
    await AuthApi.register(credentials)
    navigateTo('/')
  }
  const logout = async () => {
    await AuthApi.logout()
    navigateTo('/login')
  }

  return {user, login, register, logout}
}, {
  persist: { paths: ['user.user', 'user.token'] }
})