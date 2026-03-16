<script setup>
import Container from '@/components/ui/Container.vue'

const about = {
  title: 'Profil Sekolah',

  description: [
    'Madrasah Tsanawiyah Yanuri Annamira merupakan lembaga pendidikan Islam yang berkomitmen membentuk generasi yang berilmu, berakhlak mulia, dan siap menghadapi masa depan.',
    'Dengan pendekatan pendidikan yang seimbang antara ilmu pengetahuan dan nilai-nilai Islam, kami berupaya menciptakan lingkungan belajar yang inspiratif dan membangun karakter.',
  ],

  image: '/images/sekolah1.webp',

  highlights: [
    { label: 'Siswa Aktif', value: '500+' },
    { label: 'Tenaga Pengajar', value: '30+' },
    { label: 'Tahun Pengalaman', value: '10+' },
  ],
}
</script>

<template>
  <section v-reveal class="py-28 bg-white">
    <Container>
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Image Area -->

        <div class="relative group">
          <img
            :src="about.image"
            alt="Sekolah"
            class="rounded-2xl shadow-xl object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <!-- Decorative Shape -->

          <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10"></div>
        </div>

        <!-- Content Area -->

        <div>
          <SectionTitle normal="Profil" accent="Sekolah" />

          <div class="mt-6 space-y-4">
            <p v-for="text in about.description" :key="text" class="text-gray-600 leading-relaxed">
              {{ text }}
            </p>
          </div>

          <!-- Highlights -->

          <div class="mt-10 grid grid-cols-3 gap-8">
            <div v-for="item in about.highlights" :key="item.label" class="highlight-card">
              <p class="text-2xl font-bold text-primary">
                {{ item.value }}
              </p>

              <p class="text-sm text-gray-500">
                {{ item.label }}
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
