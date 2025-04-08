<script setup lang="ts">
import BaseFooter from '@/components/base/footer/BaseFooter.vue'
import BaseHeader from '@/components/base/header/BaseHeader.vue'
</script>

<template>
  <div class="text-sm flex flex-col min-h-screen">
    <BaseHeader />
    <main class="flex-1">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
