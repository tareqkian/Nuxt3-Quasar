<script setup lang="ts">
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

definePageMeta({ key: "require-auth" })
</script>

<template>
  <pre>{{ user }}</pre>
</template>

<style scoped>

</style>