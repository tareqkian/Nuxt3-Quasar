import {UseFetchOptions} from "#app";

export const useBaseApi = (URL: string, options: UseFetchOptions<any> = {}) => {
  let headers: any = {
    // @ts-ignore
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  const _token: string = useCookie("auth").value?.user.token
  if ( _token ) headers.Authorization = `Bearer ${_token}`

  return useFetch(URL, {
    baseURL: useRuntimeConfig().public.baseURL,
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}
