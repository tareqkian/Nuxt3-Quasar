import {Credentials, User} from "~/@modules/auth/helpers/types";
import {Ref} from "vue";

export class Auth {
  constructor(
    private user: User
  ) {}

  protected setUser = (data: Ref, error: Ref) => {
    this.user.user = data.value?.user || ""
    this.user.token = data.value?.token || ""
    this.user.error = error.value?.data.errors
  }

  login = (credentials: Credentials) => {
    const {
      pending,
      data,
      error
    } = useBaseApi('/auth/login', {
      method: "POST",
      body: credentials,
      onRequestError: (request) => {
        console.log("onRequestError ", request)
        this.setUser(data, error)
      },
      onResponse: (request) => {
        console.log("onResponse ", request)
        this.setUser(data, error)
      },
      onResponseError: (request) => {
        console.log("onResponseError ", request)
        this.setUser(data, error)
      },
    })
    this.user.loading = pending
  }
  register = async (credentials: Credentials) => {
    const {
      pending,
      data,
      error
    } = useBaseApi('/auth/register', {method: "POST", body: credentials})
    this.setUser(pending, data.value, error.value)
  }
  logout = async () => {
    const {
      pending,
      error
    } = useBaseApi('/logout', {method: "POST"})
    this.setUser(pending, {}, error.value)
  }
}
