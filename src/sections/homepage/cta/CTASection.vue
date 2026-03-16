<script setup>
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'

const cta = {
  title: 'Bergabung Bersama Kami',

  description:
    'Daftarkan putra-putri Anda untuk mendapatkan pendidikan terbaik yang menggabungkan ilmu, akhlak, dan nilai-nilai Islam.',

  actions: [
    { label: 'Daftar Sekarang', variant: 'primary' },
    { label: 'Hubungi Kami', variant: 'outline' },
  ],
}
</script>

<template>
  <section v-reveal class="relative py-28 overflow-hidden text-white">
    <!-- Background Gradient -->

    <div
      class="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary-dark"
    ></div>

    <!-- Decorative Pattern -->

    <div class="absolute inset-0 opacity-[0.08]">
      <svg class="w-full h-full">
        <defs>
          <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#cta-pattern)" />
      </svg>
    </div>

    <!-- Decorative Blur Shapes -->

    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="cta-shape w-72 h-72 bg-white/10 rounded-full top-[-100px] left-[-80px]"></div>

      <div
        class="cta-shape w-96 h-96 bg-white/10 rounded-full bottom-[-120px] right-[-120px]"
      ></div>
    </div>

    <Container class="relative z-10">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold">
          {{ cta.title }}
        </h2>

        <p class="mt-6 text-green-100 text-lg leading-relaxed">
          {{ cta.description }}
        </p>

        <!-- Buttons -->

        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <Button v-for="action in cta.actions" :key="action.label" :variant="action.variant">
            {{ action.label }}
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.cta-shape {
  position: absolute;
  filter: blur(120px);
  opacity: 0.3;
  animation: float 10s ease-in-out infinite;
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
