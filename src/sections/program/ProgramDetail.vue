<script setup>
import Container from '@/components/ui/Container.vue'

const programDetails = [
  {
    id: 1,
    title: "Tahfidz Al-Qur'an",
    description:
      "Program unggulan yang berfokus pada pembinaan hafalan Al-Qur'an dengan metode talaqqi dan muraja’ah yang terstruktur.",
    features: [
      'Target hafalan bertahap',
      'Bimbingan ustadz berpengalaman',
      "Program muraja'ah harian",
      'Pembinaan karakter Qurani',
    ],
    image: '/images/program-tahfidz.webp',
  },
  {
    id: 2,
    title: 'Bahasa Arab',
    description:
      "Pembelajaran bahasa Arab aktif untuk membantu siswa memahami Al-Qur'an, hadits, dan literatur Islam klasik.",
    features: [
      'Metode pembelajaran komunikatif',
      'Latihan percakapan harian',
      "Penguatan kosakata Al-Qur'an",
      'Pembelajaran interaktif',
    ],
    image: '/images/program-arab.webp',
  },
]
</script>

<template>
  <section v-reveal class="py-32 bg-white">
    <Container>
      <div class="space-y-32">
        <!-- PROGRAM ITEM -->

        <div
          v-for="(program, index) in programDetails"
          :key="program.id"
          class="grid lg:grid-cols-2 gap-16 items-center"
          :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- IMAGE -->

          <div class="relative group">
            <img
              :src="program.image"
              :alt="program.title"
              class="rounded-2xl shadow-xl object-cover w-full h-[420px] transition duration-500 group-hover:scale-[1.03]"
            />

            <div
              class="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10"
            ></div>
          </div>

          <!-- CONTENT -->

          <div>
            <h3 class="text-3xl font-bold text-gray-900">
              {{ program.title }}
            </h3>

            <p class="mt-6 text-gray-600 leading-relaxed">
              {{ program.description }}
            </p>

            <!-- FEATURES -->

            <ul class="mt-8 space-y-3">
              <li
                v-for="feature in program.features"
                :key="feature"
                class="flex items-start gap-3 text-gray-600"
              >
                <span class="text-green-600 font-bold">✓</span>

                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
