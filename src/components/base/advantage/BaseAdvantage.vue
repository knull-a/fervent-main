<script setup lang="ts">
import type { Component } from 'vue'

type Props = {
  icon: Component
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-6">
    <component class="w-full h-full max-w-11 max-h-11" :is="icon" />

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold text-[#0E0E0E]">{{ title }}</h3>
      <p class="text-base text-[#515559]">{{ description }}</p>
    </div>
  </div>
</template>
