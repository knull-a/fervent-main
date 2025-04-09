<script setup lang="ts">
import BaseCard from '@/components/base/card/BaseCard.vue'
import Button from '@/components/ui/button/Button.vue'

type Props = {
  title: string
  cards: {
    title: string
    price: number
    imageUrl: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-8 justify-center">
    <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
      <BaseCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :price="card.price"
        :imageUrl="card.imageUrl"
      />
    </div>

    <Button variant="outline" class="uppercase m-auto rounded-none p-6"> Смотреть все </Button>
  </div>
</template>
