<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { PROGRAM_DETAILS_DATA } from '@/constants/program'

const programDetailsData = PROGRAM_DETAILS_DATA
</script>

<template>
  <section v-reveal class="py-32 bg-white">
    <Container>
      <div class="space-y-32">
        <!-- Program Item -->
        <div
          v-for="(programItem, index) in programDetailsData"
          :key="programItem.id"
          class="grid lg:grid-cols-2 gap-16 items-center"
          :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Image -->
          <div class="relative group">
            <img
              :src="programItem.image"
              :alt="programItem.title"
              class="rounded-2xl shadow-xl object-cover w-full h-[420px] transition duration-500 group-hover:scale-[1.03]"
            />

            <div
              class="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10"
            ></div>
          </div>

          <!-- Content -->
          <div>
            <h3 class="text-3xl font-bold text-gray-900">
              {{ programItem.title }}
            </h3>

            <p class="mt-6 text-gray-600 leading-relaxed">
              {{ programItem.description }}
            </p>

            <!-- Features -->
            <ul class="mt-8 space-y-3">
              <li
                v-for="featureItem in programItem.features"
                :key="featureItem"
                class="flex items-start gap-3 text-gray-600"
              >
                <span class="text-primary font-bold">✓</span>
                <span>{{ featureItem }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
