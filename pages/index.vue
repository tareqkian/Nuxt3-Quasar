<script setup lang="ts">
import {useAuthStore} from "~/@modules/auth/stores/auth-store";
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

definePageMeta({ key: "require-auth" })
</script>

<template>
  <pre>{{ user }}</pre>
</template>

<style scoped>

</style>