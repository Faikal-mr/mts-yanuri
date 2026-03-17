<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { HISTORY_DATA } from '@/constants/about'

const historyData = HISTORY_DATA
</script>

<template>
  <section v-reveal class="py-28 bg-white">
    <Container>
      <!-- Header -->
      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Sejarah" accent="Sekolah" />

        <p class="mt-4 text-gray-500 leading-relaxed">
          Perjalanan Madrasah Tsanawiyah Yanuri Annamira dalam membangun pendidikan yang
          berkualitas.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2"></div>

        <!-- Items -->
        <div
          v-for="(historyItem, index) in historyData"
          :key="historyItem.id"
          class="timeline-item"
        >
          <div
            class="grid md:grid-cols-2 gap-12 items-center"
            :class="index % 2 === 0 ? '' : 'md:[direction:rtl]'"
          >
            <!-- Content -->
            <div class="timeline-card">
              <span class="year">
                {{ historyItem.year }}
              </span>

              <h3 class="title">
                {{ historyItem.title }}
              </h3>

              <p class="desc">
                {{ historyItem.description }}
              </p>
            </div>

            <!-- Spacer -->
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 60px;
}

.timeline-card {
  padding: 24px;
  border-radius: 14px;
  background: #f9fafb;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.year {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 6px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111827;
}

.desc {
  color: #6b7280;
  line-height: 1.6;
}
</style>
