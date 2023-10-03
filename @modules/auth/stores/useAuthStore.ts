import {Credentials, User} from "~/@modules/auth/helpers/types";

export const useAuthStore = defineStore('auth', () => {
  const user: User = reactive({
    user: '',
    token: '',
    error: null,
    loading: ref(false) as Ref
  })

  const AuthApi = new Auth(user)

  const login = (credentials: Credentials) => AuthApi.login(credentials)
  const register = async (credentials: Credentials) => AuthApi.register(credentials)
  const logout = async () => AuthApi.logout()

  return {user, login, register, logout}
}, {
  persist: { paths: ['user.user', 'user.token'] }
})