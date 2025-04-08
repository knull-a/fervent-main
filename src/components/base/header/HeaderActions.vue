<script setup lang="ts">
import { Button } from '@/components/ui/button'

type Props = {
  layout?: 'horizontal' | 'vertical'
  onItemClick?: () => void
}

defineProps<Props>()
</script>

<template>
  <div :class="layout === 'horizontal' ? 'flex flex-col space-y-4' : 'flex items-center space-x-4'">
    <Button variant="outline" class="bg-black text-white px-8 rounded-none"> Продать </Button>

    <div :class="layout === 'vertical' ? 'flex justify-between' : ''">
      <RouterLink
        to="/account"
        class="text-white hover:text-zinc-300"
        :class="layout === 'vertical' ? 'p-2' : ''"
        @click="onItemClick && onItemClick()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span class="sr-only">Account</span>
      </RouterLink>

      <RouterLink
        to="/favorites"
        class="text-white hover:text-zinc-300 relative"
        :class="layout === 'vertical' ? 'p-2' : ''"
        @click="onItemClick && onItemClick()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          />
        </svg>
        <span
          :class="layout === 'vertical' ? 'top-1 right-1' : '-top-1 -right-1'"
          class="absolute bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full"
          >0</span
        >
        <span class="sr-only">Favorites</span>
      </RouterLink>

      <RouterLink
        to="/cart"
        class="text-white hover:text-zinc-300 relative"
        :class="layout === 'vertical' ? 'p-2' : ''"
        @click="onItemClick && onItemClick()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>
        <span
          :class="layout === 'vertical' ? 'top-1 right-1' : '-top-1 -right-1'"
          class="absolute bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full"
          >0</span
        >
        <span class="sr-only">Cart</span>
      </RouterLink>
    </div>
  </div>
</template>
