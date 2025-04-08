<script setup lang="ts">
type Props = {
  items: Array<{ name: string; path: string }>
  className?: string
  itemClassName?: string
  onItemClick?: () => void
}

defineProps<Props>()
</script>

<template>
  <nav :class="className || 'flex items-center gap-6'">
    <RouterLink
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      :class="itemClassName || 'text-sm hover:text-zinc-300 transition-colors'"
      @click="onItemClick && onItemClick()"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
