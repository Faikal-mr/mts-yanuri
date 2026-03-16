<script setup>
import Container from '@/components/ui/Container.vue'

const programs = [
  {
    id: 1,
    title: "Tahfidz Al-Qur'an",
    desc: "Program unggulan untuk membentuk generasi penghafal Al-Qur'an.",
    icon: '📖',
  },
  {
    id: 2,
    title: 'Bahasa Arab',
    desc: 'Pembelajaran bahasa Arab aktif untuk memahami literatur Islam.',
    icon: '🕌',
  },
  {
    id: 3,
    title: 'Sains & Teknologi',
    desc: 'Penguatan ilmu pengetahuan dan teknologi modern.',
    icon: '🔬',
  },
  {
    id: 4,
    title: 'Karakter Islami',
    desc: 'Pembentukan akhlak dan karakter berdasarkan nilai Islam.',
    icon: '🌱',
  },
]
</script>

<template>
  <section v-reveal class="relative py-32 bg-gray-50 overflow-hidden">
    <!-- decorative background -->

    <div class="absolute inset-0 pointer-events-none">
      <div class="bg-shape top-[-120px] left-[-120px]"></div>
      <div class="bg-shape bottom-[-140px] right-[-120px]"></div>
    </div>

    <Container class="relative z-10">
      <!-- header -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Program
          <span class="border-b-4 border-red-500 pb-1"> Unggulan </span>
        </h2>

        <p class="mt-4 text-gray-500 leading-relaxed">
          Program pendidikan yang dirancang untuk mengembangkan potensi akademik dan karakter siswa.
        </p>
      </div>

      <!-- grid -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="program in programs" :key="program.id" class="program-card group">
          <!-- icon -->

          <div class="icon-wrapper">
            <span class="icon">
              {{ program.icon }}
            </span>
          </div>

          <!-- title -->

          <h3 class="title">
            {{ program.title }}
          </h3>

          <!-- desc -->

          <p class="desc">
            {{ program.desc }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.bg-shape {
  position: absolute;
  width: 420px;
  height: 420px;
  background: rgba(34, 197, 94, 0.08);
  border-radius: 50%;
  filter: blur(120px);
}

.program-card {
  padding: 32px;
  border-radius: 18px;
  background: white;
  text-align: center;
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.08);
}

.program-card::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, #22c55e, #ef4444);
  transition: all 0.35s ease;
}

.program-card:hover::after {
  width: 100%;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(34, 197, 94, 0.1);
  font-size: 28px;
  transition: all 0.3s ease;
}

.program-card:hover .icon-wrapper {
  background: #22c55e;
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
</style>
