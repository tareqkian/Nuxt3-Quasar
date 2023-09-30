import {UseFetchOptions} from "#app";

export const useBaseApi = (URL: string, options: UseFetchOptions<any> = {}) => {
  let header: any = {
    // @ts-ignore
    "Authorization": `Bearer ${useCookie("auth").value?.user.token}`,
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
  return useFetch(URL, {
    baseURL: useRuntimeConfig().public.baseURL,
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...header,
      ...options?.headers
    }
  })
}
