type Credentials = {
  name?: string
  email: string
  password: string
  password_confirmation?: string
}
export class Auth {
  constructor(
  ) {}

  login = async (credentials: Credentials) => await useBaseApi('/auth/login', { method: "POST", body: credentials })
  register = async (credentials: Credentials) => await useBaseApi('/auth/register', { method: "POST", body: credentials })
  logout = async () => await useBaseApi('/logout', {method: "POST"})
}
