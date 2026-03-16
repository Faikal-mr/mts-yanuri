<script setup>
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'

const about = {
  title: 'Tentang Sekolah',

  description: [
    'Madrasah Tsanawiyah Yanuri Annamira merupakan lembaga pendidikan Islam yang berkomitmen membentuk generasi Qurani yang berakhlak mulia, berilmu, dan siap menghadapi tantangan masa depan.',
    'Dengan tenaga pengajar profesional dan lingkungan belajar yang kondusif, kami memberikan pendidikan yang seimbang antara akademik dan nilai-nilai Islam.',
  ],

  experience: {
    value: '10+',
    label: 'Tahun Pengalaman',
  },

  image: '/images/sekolah1.webp',
}
</script>

<template>
  <section v-reveal class="bg-gray-50 py-28">
    <Container>
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- IMAGE -->

        <div class="relative group">
          <img
            :src="about.image"
            alt="Sekolah"
            class="rounded-xl shadow-lg object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />

          <!-- Experience Badge -->

          <div
            class="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-lg shadow-lg"
          >
            <p class="text-2xl font-bold">
              {{ about.experience.value }}
            </p>

            <p class="text-sm">
              {{ about.experience.label }}
            </p>
          </div>
        </div>

        <!-- CONTENT -->

        <div>
          <SectionTitle normal="Tentang" accent="Sekolah" />

          <div class="mt-6 space-y-4">
            <p v-for="text in about.description" :key="text" class="text-gray-600 leading-relaxed">
              {{ text }}
            </p>
          </div>

          <div class="mt-8">
            <Button> Pelajari Lebih Lanjut </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
