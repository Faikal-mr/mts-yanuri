<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { VISION_MISSION_DATA } from '@/constants/about'

const visionMissionData = VISION_MISSION_DATA
</script>

<template>
  <section v-reveal class="py-28 bg-gray-50 relative overflow-hidden">
    <Container>
      <!-- Header -->
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
            {{ visionMissionData.vision }}
          </p>
        </div>

        <!-- Mission -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Misi</h3>

          <div class="space-y-6">
            <div
              v-for="missionItem in visionMissionData.missions"
              :key="missionItem.id"
              class="mission-card"
            >
              <div class="icon">
                {{ missionItem.icon }}
              </div>

              <p class="text-gray-600">
                {{ missionItem.text }}
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
