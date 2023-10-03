<script setup lang="ts">
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

definePageMeta({ auth: "require-auth" })
</script>

<template>
  <pre>{{ user }}</pre>
</template>

<style scoped></style>