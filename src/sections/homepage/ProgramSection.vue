<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { PROGRAM_LIST } from '@/constants/homepage'

const programList = PROGRAM_LIST
</script>

<template>
  <section v-reveal class="bg-white py-28">
    <Container>
      <!-- HEADER -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Program" accent="Unggulan" />

        <p class="text-gray-500 mt-4 leading-relaxed">
          Program pendidikan yang dirancang untuk membentuk generasi unggul secara akademik dan
          spiritual.
        </p>
      </div>

      <!-- PROGRAM GRID -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="programItem in programList"
          :key="programItem.id"
          class="group relative bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Icon -->

          <div
            class="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-3xl mb-6 transition group-hover:bg-primary group-hover:text-white"
          >
            {{ programItem.icon }}
          </div>

          <!-- Title -->

          <h3 class="text-lg font-semibold mb-3 text-gray-900 transition group-hover:text-primary">
            {{ programItem.title }}
          </h3>

          <!-- Description -->

          <p class="text-gray-600 text-sm leading-relaxed">
            {{ programItem.description }}
          </p>

          <!-- Hover Border -->

          <div
            class="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/20 transition"
          ></div>
        </div>
      </div>
    </Container>
  </section>
</template>
