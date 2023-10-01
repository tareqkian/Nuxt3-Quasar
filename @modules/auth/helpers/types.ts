export type User = {
  user: any
  token: string
  error: any,
  loading: Ref
}
export type Credentials = {
  name?: string
  email: string
  password: string
  password_confirmation?: string
}
