<script setup lang="ts">
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue'
import { Toaster } from 'vue-sonner'
</script>

<template>
  <Toaster />
  <LayoutWrapper>
    <RouterView />
  </LayoutWrapper>
</template>
