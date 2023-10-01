type Credentials = {
  name?: string
  email: string
  password: string
  password_confirmation?: string
}
type User = {
  user: any
  token: string
  error: any,
  loading: boolean
}
export class Auth {
  constructor(
    private user: User
  ) {}

  login = async (credentials: Credentials) => await useBaseApi('/auth/login', { method: "POST", body: credentials })
  register = async (credentials: Credentials) => await useBaseApi('/auth/register', { method: "POST", body: credentials })
  logout = async () => await useBaseApi('/logout', {method: "POST"})
}
