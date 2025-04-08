<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const searchQuery = ref('')
</script>

<template>
  <div class="relative w-full">
    <Input
      v-model="searchQuery"
      class="w-full bg-white text-black placeholder:text-[#B8B8B8] px-4"
      placeholder="Поиск"
    />
    <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
      <Search class="h-5 w-5 text-[#B8B8B8]" />
    </button>
  </div>
</template>
