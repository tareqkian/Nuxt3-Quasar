type User = {
  user: any
  token: string
  error: any,
  loading: boolean
}
type Credentials = {
  name?: string
  email: string
  password: string
  password_confirmation?: string
}
export const useAuthStore = defineStore('auth', () => {
  const user: User = reactive({
    user: '',
    token: '',
    error: null,
    loading: false
  })

  const setUser = (userData: any, error: any) => {
    user.user = userData?.data.user
    user.token = userData?.data.token
    user.error = error
    user.loading = false
    if ( userData?.data.token ) navigateTo('/')
  }

  const login = async (credentials: Credentials) => {
    user.loading = true
    const { data, error } = await new Auth().login(credentials)
    console.log(data, error)
    setUser(data.value, error.value?.data.errors)
  }
  const register = async (credentials: Credentials) => {
    user.loading = true
    const { data, error } = await new Auth().register(credentials)
    setUser(data.value, error.value?.data.errors)
  }
  const logout = async () => {
    user.loading = true
    const { error } = await new Auth().logout()
    user.user = ''
    user.token = ''
    user.error = error.value?.data.errors
    user.loading = false
    navigateTo('/login')
  }

  return {user, login, register, logout}
}, {
  persist: {
    paths: ['user.user', 'user.token'],
  }
})