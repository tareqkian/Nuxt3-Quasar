<script lang="ts" setup>
import {signIn} from "next-auth/react";

const viewport = useViewport()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

definePageMeta({layout: 'auth', auth: "is-guest"})

const credentials = reactive({account: '', password: ''})
const handleLogin = async () => authStore.login(credentials)
// const handleLogin = async () => signIn('credentials', credentials).catch(e => console.log(e))

</script>

<template>
  <q-card :style="viewport.isGreaterOrEquals('desktopMedium') ? {'width': '30%'} : {'width': '80%'}">
    <q-card-section>
      <q-avatar size="103px" class="absolute-center shadow-10" color="white" icon="person" />
    </q-card-section>
    <q-card-section>
      <div class="text-center q-pt-lg">
        <div class="col text-h6 ellipsis">
          Log in or <nuxt-link to="/register">register</nuxt-link>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form
        class="q-gutter-md"
        @submit.prevent="handleLogin"
      >
        <q-input
          filled
          v-model="credentials.account"
          label="Account"
          lazy-rules
          :error="!!user.error?.account"
          :error-message="useJoin(user.error?.account, ' - ')"
        />
        <q-input
          type="password"
          filled
          v-model="credentials.password"
          label="Password"
          lazy-rules
          :error="!!user.error?.password"
          :error-message="useJoin(user.error?.password, ' - ')"
        />
        <div>
          <q-btn label="Login" type="submit" color="primary" :loading="user.loading" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style scoped></style>