<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import { NAV_MENU } from '@/constants/navigation'
import { SITE_INFO } from '@/constants/site'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
const navMenu = NAV_MENU
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm"
  >
    <Container>
      <!-- NAVBAR TOP -->

      <div class="flex items-center justify-between h-16">
        <!-- Logo -->

        <RouterLink to="/" class="flex items-center gap-3" @click="closeMenu">
          <img src="@/assets/images/ujang.svg" alt="Logo" class="h-10" />

          <div class="leading-tight">
            <p class="font-semibold text-primary text-sm">{{ SITE_INFO.name }}</p>

            <p class="text-xs text-gray-500">{{ SITE_INFO.subName }}</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->

        <nav class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <RouterLink
            v-for="menu in navMenu"
            :key="menu.path"
            :to="menu.path"
            class="hover:text-primary transition"
          >
            {{ menu.name }}
          </RouterLink>
        </nav>

        <!-- CTA -->

        <!-- <div class="hidden md:block">
          <RouterLink
            to="/pendaftaran"
            class="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Daftar
          </RouterLink>
        </div> -->

        <!-- Mobile Button -->

        <button class="md:hidden text-2xl" @click="toggleMenu" aria-label="Toggle Menu">☰</button>
      </div>
    </Container>

    <!-- MOBILE MENU -->

    <div v-if="isMenuOpen" class="md:hidden bg-white border-t">
      <Container>
        <div class="flex flex-col py-6 gap-4 text-gray-700 font-medium">
          <RouterLink
            v-for="menu in navMenu"
            :key="menu.path"
            :to="menu.path"
            @click="closeMenu"
            class="hover:text-primary transition"
          >
            {{ menu.name }}
          </RouterLink>
        </div>
      </Container>
    </div>
  </header>
</template>
