<script setup lang="ts">
import { shopInfo } from '@/lib/config'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconVk from '@/components/icons/IconVk.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconWhatsapp from '@/components/icons/IconWhatsapp.vue'
import { infoRoutes, mainCategoryRoutes, mainMenuRoutes } from '@/router/routes'
import IconMasterCard from '@/components/icons/IconMasterCard.vue'
import IconVisa from '@/components/icons/IconVisa.vue'
import IconMir from '@/components/icons/IconMir.vue'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import IconSend from '@/components/icons/IconSend.vue'

type FooterNavLink = {
  name: string
  links: {
    name: string
    href?: string
    to?: string
  }[]
}

const navLinks: FooterNavLink[] = [
  {
    name: 'Наши контакты',
    links: [
      {
        name: shopInfo.email,
        href: `mailto:${shopInfo.email}`,
      },
      {
        name: shopInfo.phone,
        href: `tel:${shopInfo.phone}`,
      },
    ],
  },
  {
    name: 'Разделы',
    links: mainCategoryRoutes.map((item) => ({
      name: item.name,
      to: item.path,
    })),
  },
  {
    name: 'Информация',
    links: mainMenuRoutes.map((item) => ({
      name: item.name,
      to: item.path,
    })),
  },
]
</script>

<template>
  <footer class="bg-[#0E0E0E] text-white py-10">
    <div class="container">
      <div class="flex justify-between pb-6">
        <div class="flex flex-col gap-6">
          <div>
            <IconLogo />
          </div>

          <div class="flex items-center gap-6">
            <a href="https://vk.com/ferventmarket" target="_blank">
              <IconVk />
            </a>
            <a href="https://t.me/ferventmarket" target="_blank">
              <IconTelegram />
            </a>
            <a href="https://wa.me/79111111111" target="_blank">
              <IconWhatsapp />
            </a>
          </div>

          <ul class="flex flex-col gap-4">
            <li v-for="item in infoRoutes" :key="item.path">
              <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div v-for="item in navLinks" :key="item.name">
          <h3 class="text-lg uppercase mb-5">{{ item.name }}</h3>
          <ul class="flex flex-col gap-4">
            <li v-for="link in item.links" :key="link.href" class="text-[#BCBCBC]">
              <a v-if="link.href" :href="link.href" target="_blank">{{ link.name }}</a>
              <RouterLink v-else-if="link.to" :to="link.to">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-6">
          <ul class="text-[#BCBCBC] flex flex-col gap-4">
            <li>
              {{ shopInfo.owner }}
            </li>
            <li>
              {{ shopInfo.inn }}
            </li>
            <li>
              {{ shopInfo.ogrnip }}
            </li>
          </ul>

          <div class="flex items-center gap-4">
            <IconMasterCard />
            <IconMir />
            <IconVisa />
          </div>

          <div class="flex flex-col gap-4 max-w-[320px]">
            <p>Подпишитесь на рассылку, чтобы узнавать о новинках первыми</p>
            <div class="flex items-center">
              <Input class="rounded-none" placeholder="Введите ваш email" />
              <Button
                variant="outline"
                class="rounded-none bg-transparent hover:bg-transparent hover:brightness-110"
              >
                <IconSend />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-[#AAA8A8] py-6">
        <p class="text-center">{{ shopInfo.copyright }}</p>
      </div>
    </div>
  </footer>
</template>
