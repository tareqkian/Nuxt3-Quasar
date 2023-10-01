<script lang="ts" setup>
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

definePageMeta({layout: 'auth', key: "is-guest"})

const credentials = reactive({
  email: '',
  password: '',
})
const handleLogin = () => authStore.login(credentials)
</script>

<template>
  <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
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
          v-model="credentials.email"
          label="Email"
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