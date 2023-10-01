export const useBaseApi = (URL: string, options: any = {}) => {
  let headers: any = {
    lang: "en",
    Accept: "application/json",
    "Content-Type": "application/json"
  }

  // @ts-ignore
  const _token: string|null = useCookie("auth").value?.user.token
  if ( _token ) headers.Authorization = `Bearer ${_token}`

  return useLazyFetch(URL, {
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
