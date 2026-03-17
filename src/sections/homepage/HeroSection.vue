<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'
import { HERO_DATA } from '@/constants/homepage'

const { slides, stats } = HERO_DATA

const currentSlide = ref(0)
let sliderInterval: ReturnType<typeof setInterval> | null = null

const goToNextSlide = () => {
  if (!slides.length) return
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const setSlide = (index: number) => {
  currentSlide.value = index
}

onMounted(() => {
  sliderInterval = setInterval(goToNextSlide, 5000)
})

onUnmounted(() => {
  if (sliderInterval !== null) {
    clearInterval(sliderInterval)
    sliderInterval = null
  }
})
</script>

<template>
  <section class="relative h-[650px] flex items-center overflow-hidden text-white">
    <!-- Background Carousel -->

    <div class="absolute inset-0">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide"
        :loading="index === 0 ? 'eager' : 'lazy'"
        decoding="async"
        class="absolute w-full h-full object-cover hero-zoom transition-opacity duration-1000"
        :class="index === currentSlide ? 'opacity-100' : 'opacity-0'"
      />
    </div>

    <!-- Overlay -->

    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

    <!-- Floating Elements -->

    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="floating-circle w-40 h-40 bg-white/10 rounded-full top-20 left-20"></div>

      <div class="floating-circle w-24 h-24 bg-white/10 rounded-full bottom-20 right-20"></div>

      <div class="floating-circle w-32 h-32 bg-white/10 rounded-full top-1/2 left-1/4"></div>
    </div>

    <!-- Content -->

    <Container class="relative z-10">
      <div class="max-w-2xl hero-content">
        <!-- Badge -->
        <p class="text-sm uppercase tracking-widest text-accent mb-4">Sekolah Islam Modern</p>

        <!-- Headline (VALUE FIRST) -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Membentuk Generasi Qurani yang Unggul & Berakhlak
        </h1>

        <!-- School Name -->
        <p class="mt-4 text-lg text-gray-200">
          Madrasah Tsanawiyah
          <span class="font-semibold text-white">Yanuri Annamira</span>
        </p>

        <!-- Description -->
        <p class="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
          Pendidikan berbasis Al-Qur’an yang menggabungkan akademik modern dan pembinaan karakter
          dalam lingkungan Islami.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">
          <Button class="px-6 py-3 text-base shadow-lg"> Daftar Sekarang </Button>

          <Button
            variant="outline"
            class="px-6 py-3 text-base border-white text-white hover:bg-white hover:text-black"
          >
            Lihat Program
          </Button>
        </div>

        <!-- Stats -->
        <div class="mt-12 grid grid-cols-3 gap-8 max-w-md">
          <div v-for="statItem in stats" :key="statItem.label">
            <p class="text-3xl font-bold">
              {{ statItem.value }}
            </p>

            <p class="text-sm text-gray-300">
              {{ statItem.label }}
            </p>
          </div>
        </div>
      </div>
    </Container>

    <!-- Carousel Indicator -->

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="setSlide(index)"
        class="w-3 h-3 rounded-full transition"
        :class="index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'"
      />
    </div>

    <!-- Scroll Indicator -->

    <div class="absolute bottom-6 right-10 hidden md:flex flex-col items-center text-white/80">
      <span class="text-xs tracking-widest rotate-90 mb-4"> SCROLL </span>

      <div class="w-[2px] h-10 bg-white/50 relative overflow-hidden">
        <div class="scroll-dot"></div>
      </div>
    </div>

    <!-- Wave Divider -->

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg class="block w-full h-[120px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#ffffff"
          d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,202.7C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,320L0,320Z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-zoom {
  animation: heroZoom 10s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes heroZoom {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1.15);
  }
}

.hero-content {
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-dot {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30%;
  background: white;
  animation: scrollAnim 2s infinite;
}

@keyframes scrollAnim {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(200%);
  }
}

.floating-circle {
  will-change: transform;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
