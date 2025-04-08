<script setup lang="ts">
import BaseHeader from '@/components/base/header/BaseHeader.vue'
</script>

<template>
  <div class="text-sm">
    <BaseHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
