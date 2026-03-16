<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'

const open = ref(false)

const menus = [
  { name: 'Home', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Program', path: '/program' },
  { name: 'Berita', path: '/berita' },
  { name: 'Kontak', path: '/kontak' },
]

const closeMenu = () => {
  open.value = false
}
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm"
  >
    <Container>
      <!-- NAVBAR TOP -->

      <div class="flex items-center justify-between h-16">
        <!-- Logo -->

        <RouterLink to="/" class="flex items-center gap-3">
          <img src="@/assets/images/ujang.svg" alt="Logo" class="h-10" />

          <div class="leading-tight">
            <p class="font-semibold text-primary text-sm">Yayasan Nurul Islam</p>

            <p class="text-xs text-gray-500">MTs Yanuri Annamira</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->

        <nav class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <RouterLink
            v-for="menu in menus"
            :key="menu.path"
            :to="menu.path"
            class="hover:text-primary transition"
          >
            {{ menu.name }}
          </RouterLink>
        </nav>

        <!-- CTA -->

        <div class="hidden md:block">
          <RouterLink
            to="/pendaftaran"
            class="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Daftar
          </RouterLink>
        </div>

        <!-- Mobile Button -->

        <button class="md:hidden text-2xl" @click="open = !open">☰</button>
      </div>
    </Container>

    <!-- MOBILE MENU -->

    <div v-if="open" class="md:hidden bg-white border-t">
      <Container>
        <div class="flex flex-col py-6 gap-4 text-gray-700 font-medium">
          <RouterLink
            v-for="menu in menus"
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
