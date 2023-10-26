import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Credentials } from "~/@modules/auth/helpers/types";
import {useBaseApi} from "~/composables/useBaseApi";

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      authorize: async (credentials: Credentials) => {
        console.log(credentials);
        console.log(config.ofetch);
        let error = ''
        const response = await $fetch('/auth/login', {
          method: 'POST',
          body: {
            account: credentials.account,
            password: credentials.password,
            account_type: config.account_type
          },
          ...(config.ofetch as any),
          // onRequest: (req) => console.log("onRequest => ", req.response),
          onRequestError: (req) => {
            console.log("onRequestError => ", req.error)
          },
          onResponse: () => console.log("onResponse"),
          onResponseError: () => console.log("onResponseError"),
        })
        return error
      }
    })
  ]
})