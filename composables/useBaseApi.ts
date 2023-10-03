
const useBaseApiConfig = (URL: string, body: any = {}, options: any = {}) => {
  let headers: any = {
    lang: "en",
    Accept: "application/json",
    "Content-Type": "application/json"
  }

  if ( process.server ) headers = { ...headers, ...useRequestHeaders(['cookie']) }

  // @ts-ignore
  const _token: string|null = useCookie("auth").value?.user.token
  if ( _token ) headers.Authorization = `Bearer ${_token}`

  return useLazyFetch(URL, {
    immediate: false,
    body,
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

export const useBaseApi = (URL: string, body: any = {}, options: any = {}) => {
  const get = () => useBaseApiConfig(URL, body, {method: "GET", ...options})
  const post = () => useBaseApiConfig(URL, body, {method: "POST", ...options})
  const put = () => useBaseApiConfig(URL, body, {method: "POST", ...options})
  const patch = () => useBaseApiConfig(URL, body, {method: "PATCH", ...options})
  const del = () => useBaseApiConfig(URL, body, {method: "DELETE", ...options})

  return {get, post, put, patch, del}
}
