<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'
import { ABOUT_HERO_DATA } from '@/constants/about'

const aboutHeroData = ABOUT_HERO_DATA
</script>

<template>
  <section v-reveal class="relative py-28 overflow-hidden">
    <Container>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="relative z-10">
          <!-- Breadcrumb -->
          <div class="text-sm text-gray-500 mb-6 flex gap-2">
            <template v-for="item in aboutHeroData.breadcrumbs" :key="item.label">
              <RouterLink v-if="item.to" :to="item.to" class="hover:text-primary transition">
                {{ item.label }}
              </RouterLink>

              <span v-else class="text-gray-800 font-medium">
                {{ item.label }}
              </span>

              <span v-if="item !== aboutHeroData.breadcrumbs[aboutHeroData.breadcrumbs.length - 1]">
                /
              </span>
            </template>
          </div>

          <!-- Label -->
          <p class="text-sm uppercase tracking-widest text-primary mb-4">Profil Sekolah</p>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            {{ aboutHeroData.title }}
          </h1>

          <!-- Description -->
          <p class="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            {{ aboutHeroData.description }}
          </p>

          <!-- Accent -->
          <div class="mt-8 w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <img
              :src="aboutHeroData.image"
              alt="Sekolah"
              class="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <!-- Card -->
          <div
            class="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden md:block"
          >
            <p class="text-sm text-gray-500">Komitmen Kami</p>

            <p class="mt-2 font-semibold text-gray-800">
              Membangun generasi Qurani yang unggul dan berakhlak mulia.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
img {
  transition: transform 0.6s ease;
}

img:hover {
  transform: scale(1.05);
}
</style>
