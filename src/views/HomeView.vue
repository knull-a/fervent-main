<script setup lang="ts">
import Carousel from '@/components/ui/carousel/Carousel.vue'
import CarouselContent from '@/components/ui/carousel/CarouselContent.vue'
import CarouselItem from '@/components/ui/carousel/CarouselItem.vue'
import CarouselPrevious from '@/components/ui/carousel/CarouselPrevious.vue'
import CarouselNext from '@/components/ui/carousel/CarouselNext.vue'
</script>

<template>
  <Carousel
    class="relative w-full m-auto"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent>
      <CarouselItem>
        <img src="@/assets/img/banner-carousel-1.png" />
      </CarouselItem>
      <CarouselItem>
        <img src="@/assets/img/banner-carousel-1.png" />
      </CarouselItem>
      <CarouselItem>
        <img src="@/assets/img/banner-carousel-1.png" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
