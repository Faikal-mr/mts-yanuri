<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'
import { CTA_DATA } from '@/constants/cta'

const ctaData = CTA_DATA
</script>

<template>
  <section v-reveal class="relative py-28 overflow-hidden text-white">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary-dark"
    ></div>

    <!-- Pattern -->
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

    <!-- Decoration -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="cta-shape w-72 h-72 bg-white/10 rounded-full top-[-100px] left-[-80px]"></div>
      <div
        class="cta-shape w-96 h-96 bg-white/10 rounded-full bottom-[-120px] right-[-120px]"
      ></div>
    </div>

    <Container class="relative z-10">
      <!-- Content -->
      <div class="text-center max-w-2xl mx-auto">
        <!-- Badge -->
        <p class="text-sm uppercase tracking-widest text-green-200 mb-3">
          {{ ctaData.badge }}
        </p>

        <!-- Title -->
        <h2 class="text-4xl md:text-5xl font-bold leading-tight">
          {{ ctaData.title }}
        </h2>

        <!-- Description -->
        <p class="mt-6 text-green-100 text-lg leading-relaxed">
          {{ ctaData.description }}
        </p>

        <!-- Actions -->
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            v-for="actionItem in ctaData.actions"
            :key="actionItem.label"
            :variant="actionItem.variant"
            class="px-6 py-3 text-base shadow-lg hover:scale-105 transition"
          >
            {{ actionItem.label }}
          </Button>
        </div>

        <!-- Highlights -->
        <div class="mt-8 flex flex-wrap justify-center gap-4 text-sm text-green-200">
          <span
            v-for="highlightItem in ctaData.highlights"
            :key="highlightItem"
            class="flex items-center gap-2"
          >
            ✔ {{ highlightItem }}
          </span>
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
