<script setup lang="ts">
import { HeartIcon } from 'lucide-vue-next'
import { ref } from 'vue'

type Props = {
  title: string
  price: number
  imageUrl: string
}

defineProps<Props>()

const isLiked = ref(false)

const handleClick = () => {
  isLiked.value = !isLiked.value
}
</script>

<template>
  <div class="max-w-2xs cursor-pointer hover:scale-105 transition-all duration-300">
    <div class="relative">
      <HeartIcon
        :fill="isLiked ? 'currentColor' : 'none'"
        class="size-6 text-[#AFAFAF] absolute top-2 right-2 cursor-pointer hover:text-[#515559]"
        @click="handleClick"
      />
      <img class="w-full h-full object-cover" :src="imageUrl" alt="Card image" />
    </div>
    <h3 class="text-sm text-[#515559]">{{ title }}</h3>
    <p class="text-base font-medium text-[#515559]">{{ price.toLocaleString('ru-RU') }} ₽</p>
  </div>
</template>
