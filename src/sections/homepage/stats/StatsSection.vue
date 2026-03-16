<script setup>
import { ref, onMounted } from 'vue'
import Container from '@/components/ui/Container.vue'

const stats = [
  { id: 1, label: 'Siswa', value: 500, icon: '🎓' },
  { id: 2, label: 'Guru', value: 30, icon: '👨‍🏫' },
  { id: 3, label: 'Kelas', value: 20, icon: '🏫' },
  { id: 4, label: 'Tahun Berdiri', value: 10, icon: '📅' },
]

const counters = ref(stats.map(() => 0))
const sectionRef = ref(null)
let started = false

const animateCounters = () => {
  stats.forEach((stat, index) => {
    let start = 0
    const end = stat.value

    const duration = 1500
    const step = end / (duration / 16)

    const interval = setInterval(() => {
      start += step

      if (start >= end) {
        counters.value[index] = end
        clearInterval(interval)
      } else {
        counters.value[index] = Math.floor(start)
      }
    }, 16)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          animateCounters()
          started = true
        }
      })
    },
    {
      threshold: 0.4,
    },
  )

  observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" v-reveal class="relative py-32 overflow-hidden text-white">
    <!-- Background -->

    <div class="absolute inset-0">
      <img
        src="/images/sekolah2.webp"
        alt="Sekolah"
        class="w-full h-full object-cover"
        loading="lazy"
      />

      <!-- Gradient Overlay -->

      <div
        class="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"
      ></div>
    </div>

    <Container class="relative z-10">
      <!-- Header -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold">Prestasi & Statistik Sekolah</h2>

        <p class="mt-4 text-green-100 leading-relaxed">
          Kami terus berkembang dalam mencetak generasi unggul yang berilmu dan berakhlak mulia.
        </p>
      </div>

      <!-- Stats Grid -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="stats-card group"
          :style="{ animationDelay: `${index * 120}ms` }"
        >
          <!-- Icon -->

          <div class="text-3xl mb-4 opacity-90">
            {{ stat.icon }}
          </div>

          <!-- Number -->

          <p class="text-5xl font-bold tracking-tight">{{ counters[index] }}+</p>

          <!-- Label -->

          <p class="mt-3 text-green-100 text-sm tracking-wide">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.stats-card {
  padding: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
  text-align: center;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
}

.stats-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
