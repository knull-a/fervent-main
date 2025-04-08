<script setup lang="ts">
import { computed, defineAsyncComponent, markRaw } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from '@/layouts/LayoutMain.vue'

const route = useRoute()

const currentLayout = computed(() => {
  const layoutName = (route.meta.layout as string) || 'default'

  if (layoutName === 'LayoutMain' || layoutName === 'default') {
    return DefaultLayout
  }

  return markRaw(defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`)))
})
</script>

<template>
  <component :is="currentLayout">
    <slot />
  </component>
</template>
