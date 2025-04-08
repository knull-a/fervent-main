<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import NavigationLinks from './NavigationLinks.vue'
import MainLogo from './MainLogo.vue'
import { X } from 'lucide-vue-next'
import { shopInfo } from '@/lib/config'
type Props = {
  isOpen: boolean
  mainMenuItems: Array<{ name: string; path: string }>
  categoryItems: Array<{ name: string; path: string }>
  onClose: () => void
}

defineProps<Props>()
</script>

<template>
  <div v-if="isOpen" class="fixed text-base inset-0 z-50 bg-black overflow-y-auto md:hidden">
    <div class="h-full flex flex-col">
      <div class="flex items-center justify-between px-4 py-4">
        <MainLogo />
        <button @click="onClose" class="text-white">
          <X class="h-6 w-6" />
        </button>
      </div>

      <div class="px-4 py-4">
        <SearchBar />
      </div>
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-y-auto px-4 pb-4">
          <div class="pb-4 mb-4">
            <NavigationLinks
              :items="[...categoryItems, ...mainMenuItems]"
              className="flex flex-col space-y-3"
              itemClassName="text-white text-sm py-1 hover:text-zinc-300 transition-colors"
              :onItemClick="onClose"
            />
          </div>
        </div>

        <div class="mt-auto px-4 py-4 text-white">
          <a
            href="mailto:support@ferventmarket.ru"
            class="text-sm flex items-center space-x-1.5 mb-2 uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>{{ shopInfo.email }}</span>
          </a>
          <a href="tel:+78001111111" class="text-sm flex items-center space-x-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <span>{{ shopInfo.phone }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
