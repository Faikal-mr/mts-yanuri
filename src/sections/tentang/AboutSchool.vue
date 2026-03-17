<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { ABOUT_SECTION_DATA } from '@/constants/about'

const aboutData = ABOUT_SECTION_DATA
</script>

<template>
  <section v-reveal class="py-28 bg-white">
    <Container>
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Image -->
        <div class="relative group">
          <img
            :src="aboutData.image"
            alt="Sekolah"
            class="rounded-2xl shadow-xl object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10"></div>
        </div>

        <!-- Content -->
        <div>
          <SectionTitle normal="Profil" accent="Sekolah" />

          <div class="mt-6 space-y-4">
            <p
              v-for="descItem in aboutData.description"
              :key="descItem"
              class="text-gray-600 leading-relaxed"
            >
              {{ descItem }}
            </p>
          </div>

          <!-- Highlights -->
          <div class="mt-10 grid grid-cols-3 gap-8">
            <div
              v-for="highlightItem in aboutData.highlights"
              :key="highlightItem.label"
              class="highlight-card"
            >
              <p class="text-2xl font-bold text-primary">
                {{ highlightItem.value }}
              </p>

              <p class="text-sm text-gray-500">
                {{ highlightItem.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.highlight-card {
  padding: 16px;
  border-radius: 12px;
  background: #f8fafc;
  text-align: center;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}
</style>
