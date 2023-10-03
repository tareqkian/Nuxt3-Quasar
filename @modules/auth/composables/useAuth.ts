import {Credentials, User} from "~/@modules/auth/helpers/types";

export class Auth {
  constructor(
    private user: User
  ) {}

  protected setUser = (data: any, error: any) => {
    this.user.user = data?.result?.user || ""
    this.user.token = data?.result?.token.access_token || ""
    this.user.error = error?.errors || ""
  }

  login = async (credentials: Credentials) => {
    const {
      pending,
      data,
      error,
      execute,
      status
    } = useBaseApi('/auth/login', {...credentials, account_type: "vendor"}).post()
    this.user.loading = pending
    await execute()
    if ( status.value === 'success' ) this.setUser(data.value, error.value?.data)
  }
  register = async (credentials: Credentials) => {
    const {
      pending,
      data,
      error,
      execute,
      status
    } = useBaseApi('/auth/register', credentials).post()
    this.user.loading = pending
    await execute()
    if ( status.value === 'success' ) this.setUser(data.value, error.value?.data)
  }
  logout = async () => {
    const {
      pending,
      error,
      execute,
      status
    } = useBaseApi('/auth/logout').del()
    this.user.loading = pending
    await execute()
    if ( status.value === 'success' ) this.setUser({}, error.value?.data)
  }
}
