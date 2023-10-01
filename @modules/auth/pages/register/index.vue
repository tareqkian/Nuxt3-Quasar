<script lang="ts" setup>
// import {useAuthStore} from "~/@modules/auth/stores/auth-store";
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

definePageMeta({layout: 'auth', key: "is-guest"})

const credentials = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
const handleRegister = () => authStore.register(credentials)
</script>
<template>
  <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
    <q-card-section>
      <q-avatar size="103px" class="absolute-center shadow-10" color="white" icon="person" />
    </q-card-section>
    <q-card-section>
      <div class="text-center q-pt-lg">
        <div class="col text-h6 ellipsis">
          Register or <nuxt-link to="/login">Login</nuxt-link>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form
        class="q-gutter-md"
        @submit.prevent="handleRegister"
      >
        <q-input
          filled
          v-model="credentials.name"
          label="Name"
          lazy-rules
        />
        <q-input
          filled
          v-model="credentials.email"
          label="Email"
          lazy-rules
        />
        <q-input
          type="password"
          filled
          v-model="credentials.password"
          label="Password"
          lazy-rules
        />
        <q-input
          type="password"
          filled
          v-model="credentials.password_confirmation"
          label="Password Confirmation"
          lazy-rules
        />
        <div>
          <q-btn label="Register" type="submit" color="primary" :loading="user.loading" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style scoped></style>