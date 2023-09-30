import {CookieRef} from "#app";

type Credentials = {
  name?: string
  email: string
  password: string
  password_confirmation?: string
}
export class Auth {
  constructor(
  ) {}

  login = (credentials: Credentials) => useBaseApi('/auth/login', {
    method: "POST",
    body: credentials
  })
  register = (credentials: Credentials) => useBaseApi('/auth/register', {
    method: "POST",
    body: credentials
  })
  logout = () => useBaseApi('/logout', {method: "POST"})
}
