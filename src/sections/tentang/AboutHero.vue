<script setup>
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'

const hero = {
  title: 'Tentang Sekolah',

  description:
    'Mengenal lebih dekat Madrasah Tsanawiyah Yanuri Annamira dan komitmen kami dalam membangun generasi Qurani.',

  image: '/images/sekolah1.webp',
}
</script>

<template>
  <section v-reveal class="relative py-44 overflow-hidden text-white">
    <!-- Background Image -->

    <div class="absolute inset-0">
      <img :src="hero.image" alt="Sekolah" class="w-full h-full object-cover scale-105 hero-zoom" />

      <!-- Gradient Overlay -->

      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
    </div>

    <!-- Decorative Blur -->

    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="hero-shape w-72 h-72 bg-white/10 rounded-full top-[-120px] left-[-120px]"></div>

      <div
        class="hero-shape w-96 h-96 bg-white/10 rounded-full bottom-[-120px] right-[-120px]"
      ></div>
    </div>

    <Container class="relative z-10">
      <div class="text-center max-w-2xl mx-auto">
        <!-- Breadcrumb -->

        <div class="text-sm text-gray-300 mb-6 flex justify-center gap-2">
          <RouterLink to="/" class="hover:text-white transition"> Beranda </RouterLink>

          <span>/</span>

          <span class="text-white">Tentang</span>
        </div>

        <!-- Title -->

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {{ hero.title }}
        </h1>

        <!-- Description -->

        <p class="mt-6 text-gray-200 text-lg leading-relaxed">
          {{ hero.description }}
        </p>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.hero-zoom {
  animation: heroZoom 12s ease-in-out infinite alternate;
}

@keyframes heroZoom {
  from {
    transform: scale(1.05);
  }

  to {
    transform: scale(1.15);
  }
}

.hero-shape {
  position: absolute;
  filter: blur(120px);
  opacity: 0.25;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
