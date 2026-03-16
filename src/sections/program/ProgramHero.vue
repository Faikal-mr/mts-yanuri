<script setup>
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'

const hero = {
  title: 'Program Sekolah',
  description:
    'Berbagai program unggulan yang dirancang untuk membentuk generasi Qurani yang unggul secara akademik dan karakter.',
  image: '/images/sekolah2.webp',
}
</script>

<template>
  <section v-reveal class="relative py-32 overflow-hidden bg-gray-50">
    <!-- Background gradient -->

    <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-red-50"></div>

    <Container class="relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- TEXT SIDE -->

        <div>
          <!-- breadcrumb -->

          <div class="text-sm text-gray-500 mb-6 flex gap-2">
            <RouterLink to="/" class="hover:text-primary"> Beranda </RouterLink>

            <span>/</span>

            <span class="text-gray-900 font-medium"> Program </span>
          </div>

          <!-- title -->

          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Program
            <span class="border-b-4 border-red-500 pb-1"> Unggulan </span>
          </h1>

          <p class="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            {{ hero.description }}
          </p>
        </div>

        <!-- IMAGE SIDE -->

        <div class="relative">
          <!-- image -->

          <img
            :src="hero.image"
            alt="Program Sekolah"
            class="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
          />

          <!-- floating card -->

          <div class="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-xl px-6 py-4">
            <p class="text-sm text-gray-500">Program Unggulan</p>

            <p class="font-semibold text-gray-900">Pendidikan Qurani Modern</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
