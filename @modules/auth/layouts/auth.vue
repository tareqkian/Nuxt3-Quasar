<script lang="ts" setup></script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>