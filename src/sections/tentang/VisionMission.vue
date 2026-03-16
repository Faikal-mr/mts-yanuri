<script setup>
import Container from '@/components/ui/Container.vue'

const visionMission = {
  vision:
    'Menjadi lembaga pendidikan Islam yang unggul dalam membentuk generasi Qurani yang berakhlak mulia, berilmu, dan berprestasi.',

  missions: [
    {
      id: 1,
      text: 'Menanamkan nilai-nilai Al-Qur’an dalam kehidupan sehari-hari.',
      icon: '📖',
    },
    {
      id: 2,
      text: 'Mengembangkan potensi akademik dan intelektual siswa.',
      icon: '🎓',
    },
    {
      id: 3,
      text: 'Membentuk karakter Islami yang berakhlak mulia.',
      icon: '🌱',
    },
    {
      id: 4,
      text: 'Mempersiapkan generasi yang siap menghadapi masa depan.',
      icon: '🚀',
    },
  ],
}
</script>

<template>
  <section v-reveal class="py-28 bg-gray-50 relative overflow-hidden">
    <Container>
      <!-- Section Header -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Visi &" accent="Misi" />

        <p class="text-gray-500 mt-4 leading-relaxed">
          Landasan utama dalam membangun pendidikan yang berkualitas dan membentuk generasi Qurani.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Vision -->

        <div class="vision-card">
          <h3 class="text-2xl font-semibold mb-6">Visi</h3>

          <p class="text-gray-600 leading-relaxed text-lg">
            {{ visionMission.vision }}
          </p>
        </div>

        <!-- Mission -->

        <div>
          <h3 class="text-2xl font-semibold mb-6">Misi</h3>

          <div class="space-y-6">
            <div v-for="mission in visionMission.missions" :key="mission.id" class="mission-card">
              <div class="icon">
                {{ mission.icon }}
              </div>

              <p class="text-gray-600">
                {{ mission.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.vision-card {
  padding: 32px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.mission-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.icon {
  font-size: 24px;
}
</style>
