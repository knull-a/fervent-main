<script setup lang="ts">
import Carousel from '@/components/ui/carousel/Carousel.vue'
import CarouselContent from '@/components/ui/carousel/CarouselContent.vue'
import CarouselItem from '@/components/ui/carousel/CarouselItem.vue'
import CarouselPrevious from '@/components/ui/carousel/CarouselPrevious.vue'
import CarouselNext from '@/components/ui/carousel/CarouselNext.vue'
import BaseSection from '@/components/base/section/BaseSection.vue'
import CardList from '@/components/base/card/CardList.vue'
import cardProduct1 from '@/assets/img/card-product-1.png'
import cardProduct2 from '@/assets/img/card-product-2.png'
import IconAdvantage1 from '@/components/icons/IconAdvantage1.vue'
import IconAdvantage2 from '@/components/icons/IconAdvantage2.vue'
import IconAdvantage3 from '@/components/icons/IconAdvantage3.vue'
import IconAdvantage4 from '@/components/icons/IconAdvantage4.vue'
import BaseAdvantage from '@/components/base/advantage/BaseAdvantage.vue'
import IconBrand1 from '@/components/icons/IconBrand1.vue'
import IconBrand2 from '@/components/icons/IconBrand2.vue'
import IconBrand3 from '@/components/icons/IconBrand3.vue'
import IconBrand4 from '@/components/icons/IconBrand4.vue'
import IconBrand5 from '@/components/icons/IconBrand5.vue'

const newArrivals = Array(8).fill({
  title: 'adidas originals Campus 00s Core Black',
  price: 13250,
  imageUrl: cardProduct1,
})

const recommended = Array(8).fill({
  title: 'Солнечные очки Ray-Ban RB3026',
  price: 1500,
  imageUrl: cardProduct2,
})

const advantages = [
  {
    icon: IconAdvantage1,
    title: 'Большой выбор',
    description:
      'Огромный ассортимент товаров на любой вкус и потребность. У нас вы найдёте всё: от эксклюзивных новинок до проверенных временем хитов. Выбирайте лучшее среди множества вариантов!',
  },
  {
    icon: IconAdvantage2,
    title: 'Проверка на подлинность',
    description:
      'Гарантируем 100% оригинальность! Каждый товар проходит тщательную проверку, чтобы вы получали только подлинную продукцию от надёжных поставщиков. Покупайте с уверенностью!',
  },
  {
    icon: IconAdvantage3,
    title: 'Быстрая доставка',
    description:
      'Оперативно отправляем заказы, чтобы вы получили свой товар в кратчайшие сроки. Надёжные службы доставки и удобные варианты получения для вашего комфорта!',
  },
  {
    icon: IconAdvantage4,
    title: 'Безопасные сделки',
    description:
      'Каждая покупка защищена! Гарантируем надёжные способы оплаты и полную конфиденциальность ваших данных. Покупайте без рисков!',
  },
]
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
    <CardList title="Новые поступления" :cards="newArrivals" />
  </BaseSection>

  <BaseSection title="Рекомендованные">
    <CardList title="Рекомендованные" :cards="recommended" />
  </BaseSection>

  <BaseSection title="Наши преимущества">
    <div class="flex flex-col md:flex-row items-center justify-between gap-14">
      <img class="w-full md:w-1/2" src="@/assets/img/advantages-1.png" alt="Преимущество" />

      <div class="flex flex-col gap-10">
        <BaseAdvantage
          v-for="advantage in advantages"
          :key="advantage.title"
          :icon="advantage.icon"
          :title="advantage.title"
          :description="advantage.description"
        />
      </div>
    </div>
  </BaseSection>

  <BaseSection title="Популярные бренды">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-14">
      <IconBrand1 />
      <IconBrand2 />
      <IconBrand3 />
      <IconBrand4 />
      <IconBrand5 />
    </div>
  </BaseSection>
</template>
