<script setup>
import Container from '@/components/ui/Container.vue'

const advantages = [
  {
    id: 1,
    title: 'Kurikulum Terpadu',
    desc: 'Menggabungkan kurikulum nasional dengan pendidikan karakter Islami.',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Pengajar Berpengalaman',
    desc: 'Didukung oleh tenaga pendidik profesional dan berpengalaman.',
    icon: '👨‍🏫',
  },
  {
    id: 3,
    title: 'Lingkungan Islami',
    desc: 'Lingkungan sekolah yang mendukung pembentukan akhlak dan karakter.',
    icon: '🕌',
  },
  {
    id: 4,
    title: 'Pengembangan Potensi',
    desc: 'Berbagai kegiatan untuk mengembangkan bakat dan minat siswa.',
    icon: '🌟',
  },
]

const stats = [
  { label: 'Siswa Aktif', value: '500+' },
  { label: 'Tenaga Pengajar', value: '30+' },
  { label: 'Program Unggulan', value: '8+' },
]
</script>

<template>
  <section v-reveal class="relative py-32 bg-white overflow-hidden">
    <Container>
      <!-- HEADER -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Mengapa
          <span class="border-b-4 border-red-500 pb-1"> Memilih Kami </span>
        </h2>

        <p class="mt-4 text-gray-500 leading-relaxed">
          Komitmen kami dalam memberikan pendidikan terbaik untuk membentuk generasi Qurani yang
          unggul.
        </p>
      </div>

      <!-- ADVANTAGES GRID -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="item in advantages" :key="item.id" class="advantage-card group">
          <!-- ICON -->

          <div class="icon-wrapper">
            <span class="icon">
              {{ item.icon }}
            </span>
          </div>

          <!-- TITLE -->

          <h3 class="title">
            {{ item.title }}
          </h3>

          <!-- DESC -->

          <p class="desc">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- STATS -->

      <div class="mt-20 grid md:grid-cols-3 gap-10 text-center">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <p class="text-4xl font-bold text-gray-900">
            {{ stat.value }}
          </p>

          <p class="text-gray-500 mt-2">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.advantage-card {
  padding: 32px;
  border-radius: 18px;
  background: #f9fafb;
  text-align: center;
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(34, 197, 94, 0.1);
  font-size: 28px;
  transition: all 0.3s ease;
}

.advantage-card:hover .icon-wrapper {
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

.stat-card {
  padding: 24px;
  border-radius: 16px;
  background: #f9fafb;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
}
</style>
