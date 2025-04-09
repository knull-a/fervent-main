<script setup lang="ts">
import Carousel from '@/components/ui/carousel/Carousel.vue'
import CarouselContent from '@/components/ui/carousel/CarouselContent.vue'
import CarouselItem from '@/components/ui/carousel/CarouselItem.vue'
import CarouselPrevious from '@/components/ui/carousel/CarouselPrevious.vue'
import CarouselNext from '@/components/ui/carousel/CarouselNext.vue'
import BaseSection from '@/components/base/section/BaseSection.vue'
import BaseCard from '@/components/base/card/BaseCard.vue'
import cardProduct1 from '@/assets/img/card-product-1.png'
import cardProduct2 from '@/assets/img/card-product-2.png'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <Carousel class="relative w-full m-auto">
    <CarouselContent>
      <CarouselItem>
        <img class="w-full h-full object-cover" src="@/assets/img/banner-carousel-1.png" />
      </CarouselItem>
      <CarouselItem>
        <img class="w-full h-full object-cover" src="@/assets/img/banner-carousel-1.png" />
      </CarouselItem>
      <CarouselItem>
        <img class="w-full h-full object-cover" src="@/assets/img/banner-carousel-1.png" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>

  <BaseSection title="Новые поступления">
    <div class="flex flex-col gap-8 justify-center">
      <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
        <BaseCard
          v-for="_ in 8"
          :key="_"
          title="adidas originals Campus 00s Core Black"
          :price="13250"
          :imageUrl="cardProduct1"
        />
      </div>

      <Button variant="outline" class="uppercase m-auto rounded-none p-6"> Смотреть все </Button>
    </div>
  </BaseSection>

  <BaseSection title="Рекомендованные">
    <div class="flex flex-col gap-8 justify-center">
      <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
        <BaseCard
          v-for="_ in 8"
          :key="_"
          title="Солнечные очки Ray-Ban RB3026"
          :price="1500"
          :imageUrl="cardProduct2"
        />
      </div>

      <Button variant="outline" class="uppercase m-auto rounded-none p-6"> Смотреть все </Button>
    </div>
  </BaseSection>
</template>
