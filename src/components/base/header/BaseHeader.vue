<script setup lang="ts">
import { mainMenuRoutes, mainCategoryRoutes } from '@/router/routes'
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'

import MainLogo from './MainLogo.vue'
import SearchBar from './SearchBar.vue'
import NavigationLinks from './NavigationLinks.vue'
import HeaderActions from './HeaderActions.vue'
import ContactInfo from './ContactInfo.vue'
import MobileMenu from './MobileMenu.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="flex flex-col w-full relative">
    <div class="w-full bg-[#242424] text-white py-6.5 hidden md:block">
      <div class="container flex items-center justify-between">
        <NavigationLinks :items="mainMenuRoutes" />
        <ContactInfo />
      </div>
    </div>

    <div class="w-full bg-[#0E0E0E] text-white py-4 sticky top-0 z-50">
      <div class="container flex items-center justify-between">
        <MainLogo />

        <div class="relative w-full max-w-xl mx-4 hidden md:block">
          <SearchBar />
        </div>

        <div class="hidden md:block">
          <HeaderActions :layout="isMobileMenuOpen ? 'horizontal' : 'vertical'" />
        </div>

        <button class="md:hidden" @click="toggleMobileMenu" v-if="!isMobileMenuOpen">
          <Menu class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div class="w-full bg-[#0E0E0E] text-white hidden md:block">
      <div class="container">
        <NavigationLinks
          :items="mainCategoryRoutes"
          className="flex items-center justify-center"
          itemClassName="px-5 py-3 text-sm font-medium hover:text-zinc-300 transition-colors"
        />
      </div>
    </div>

    <MobileMenu
      :isOpen="isMobileMenuOpen"
      :mainMenuItems="mainMenuRoutes"
      :categoryItems="mainCategoryRoutes"
      :onClose="closeMobileMenu"
    />
  </header>
</template>
