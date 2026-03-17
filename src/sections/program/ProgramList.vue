<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { PROGRAMS_DATA } from '@/constants/program'

const programsData = PROGRAMS_DATA
</script>

<template>
  <section v-reveal class="relative py-32 bg-gray-50 overflow-hidden">
    <!-- Decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="bg-shape top-[-120px] left-[-120px]"></div>
      <div class="bg-shape bottom-[-140px] right-[-120px]"></div>
    </div>

    <Container class="relative z-10">
      <!-- Header -->
      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Program" accent="Unggulan" />

        <p class="mt-4 text-gray-500 leading-relaxed">
          Program pendidikan yang dirancang untuk mengembangkan potensi akademik dan karakter siswa.
        </p>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="programItem in programsData" :key="programItem.id" class="program-card group">
          <!-- Icon -->
          <div class="icon-wrapper">
            <span class="icon">
              {{ programItem.icon }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="title">
            {{ programItem.title }}
          </h3>

          <!-- Description -->
          <p class="desc">
            {{ programItem.desc }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.bg-shape {
  position: absolute;
  width: 420px;
  height: 420px;
  background: color-mix(in srgb, var(--color-primary) 8%, transparent);
  border-radius: 50%;
  filter: blur(120px);
}

.program-card {
  padding: 32px;
  border-radius: 18px;
  background: white;
  text-align: center;
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.08);
}

.program-card::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transition: all 0.35s ease;
}

.program-card:hover::after {
  width: 100%;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  font-size: 28px;
  transition: all 0.3s ease;
}

.program-card:hover .icon-wrapper {
  background: var(--color-primary);
  color: white;
  transform: scale(1.1);
}

.title {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
  color: #111827;
}

.desc {
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
}
</style>
