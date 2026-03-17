<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'
import { ABOUT_DATA } from '@/constants/about'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const aboutData = ABOUT_DATA
</script>

<template>
  <section v-reveal class="bg-gray-50 py-28">
    <Container>
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- IMAGE -->

        <div class="relative group">
          <img
            :src="aboutData.image"
            alt="Sekolah"
            class="rounded-xl shadow-lg object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />

          <!-- Experience Badge -->

          <div
            class="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-lg shadow-lg"
          >
            <p class="text-2xl font-bold">
              {{ aboutData.experience.value }}
            </p>

            <p class="text-sm">
              {{ aboutData.experience.label }}
            </p>
          </div>
        </div>

        <!-- CONTENT -->

        <div>
          <SectionTitle normal="Tentang" accent="Sekolah" />

          <div class="mt-6 space-y-4">
            <p
              v-for="descItem in aboutData.description"
              :key="descItem"
              class="text-gray-600 leading-relaxed"
            >
              {{ descItem }}
            </p>
          </div>

          <div class="mt-8">
            <RouterLink to="/tentang">
              <Button> Pelajari Lebih Lanjut </Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
