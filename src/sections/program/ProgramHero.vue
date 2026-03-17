<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'
import { PROGRAM_HERO_DATA } from '@/constants/program'

const programHeroData = PROGRAM_HERO_DATA
</script>

<template>
  <section v-reveal class="relative py-32 overflow-hidden bg-gray-50">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-accent/10"></div>

    <Container class="relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <!-- Breadcrumb -->
          <div class="text-sm text-gray-500 mb-6 flex gap-2">
            <template
              v-for="breadcrumbItem in programHeroData.breadcrumbs"
              :key="breadcrumbItem.label"
            >
              <RouterLink
                v-if="breadcrumbItem.to"
                :to="breadcrumbItem.to"
                class="hover:text-primary"
              >
                {{ breadcrumbItem.label }}
              </RouterLink>

              <span v-else class="text-gray-900 font-medium">
                {{ breadcrumbItem.label }}
              </span>

              <span
                v-if="
                  breadcrumbItem !==
                  programHeroData.breadcrumbs[programHeroData.breadcrumbs.length - 1]
                "
              >
                /
              </span>
            </template>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Program
            <span class="border-b-4 border-accent pb-1"> Unggulan </span>
          </h1>

          <!-- Description -->
          <p class="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            {{ programHeroData.description }}
          </p>
        </div>

        <!-- Image -->
        <div class="relative">
          <img
            :src="programHeroData.image"
            alt="Program Sekolah"
            class="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
          />

          <!-- Card -->
          <div class="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-xl px-6 py-4">
            <p class="text-sm text-gray-500">Program Unggulan</p>

            <p class="font-semibold text-gray-900">Pendidikan Qurani Modern</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
