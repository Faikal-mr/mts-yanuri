<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { ADVANTAGES_DATA } from '@/constants/program'

const advantagesData = ADVANTAGES_DATA
</script>

<template>
  <section v-reveal class="relative py-32 bg-white overflow-hidden">
    <Container>
      <!-- Header -->
      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Mengapa" accent="Memilih Kami" />

        <p class="mt-4 text-gray-500 leading-relaxed">
          {{ advantagesData.description }}
        </p>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="advantageItem in advantagesData.items"
          :key="advantageItem.id"
          class="advantage-card group"
        >
          <!-- Icon -->
          <div class="icon-wrapper">
            <span class="icon">
              {{ advantageItem.icon }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="title">
            {{ advantageItem.title }}
          </h3>

          <!-- Desc -->
          <p class="desc">
            {{ advantageItem.desc }}
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-20 grid md:grid-cols-3 gap-10 text-center">
        <div v-for="statItem in advantagesData.stats" :key="statItem.label" class="stat-card">
          <p class="text-4xl font-bold text-gray-900">
            {{ statItem.value }}
          </p>

          <p class="text-gray-500 mt-2">
            {{ statItem.label }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.advantage-card {
  padding: 32px;
  border-radius: 18px;
  background: #f9fafb;
  text-align: center;
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  font-size: 28px;
  transition: all 0.3s ease;
}

.advantage-card:hover .icon-wrapper {
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

.stat-card {
  padding: 24px;
  border-radius: 16px;
  background: #f9fafb;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
}
</style>
