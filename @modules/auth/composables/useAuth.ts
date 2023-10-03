import {Credentials, User} from "~/@modules/auth/helpers/types";
import {Ref} from "vue";

export class Auth {
  constructor(
    private user: User
  ) {}

  protected setUser = (data: any, errors: any) => {
    this.user.user = data?.user || ""
    this.user.token = data?.token || ""
    this.user.error = errors
  }

  login = (credentials: Credentials) => {
    const {
      pending,
      data,
      error,
    } = useBaseApi('/auth/login', credentials).post()
    this.user.loading = pending
    console.log(data.value, error.value?.data)
  }
  register =  (credentials: Credentials) => {
    const {
      pending,
      data,
      error
    } = useBaseApi('/auth/register', credentials).post()
    this.setUser(data.value, error.value)
  }
  logout = () => {
    const {
      pending,
      error
    } = useBaseApi('/logout').post()
    this.setUser({}, error.value)
  }
}
