<script setup>
import Container from '@/components/ui/Container.vue'

const history = [
  {
    id: 1,
    year: '2015',
    title: 'Pendirian Sekolah',
    description:
      'MTs Yanuri Annamira didirikan dengan tujuan memberikan pendidikan Islam yang berkualitas bagi generasi muda.',
  },
  {
    id: 2,
    year: '2018',
    title: 'Pengembangan Program Tahfidz',
    description:
      'Sekolah mulai mengembangkan program tahfidz Al-Qur’an sebagai salah satu program unggulan.',
  },
  {
    id: 3,
    year: '2021',
    title: 'Penguatan Akademik',
    description:
      'Berbagai program akademik dan kompetisi mulai dikembangkan untuk meningkatkan prestasi siswa.',
  },
  {
    id: 4,
    year: '2024',
    title: 'Modernisasi Pembelajaran',
    description:
      'Sekolah mulai menerapkan teknologi dalam pembelajaran untuk meningkatkan kualitas pendidikan.',
  },
]
</script>

<template>
  <section v-reveal class="py-28 bg-white">
    <Container>
      <!-- Header -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Sejarah" accent="Sekolah" />

        <p class="mt-4 text-gray-500 leading-relaxed">
          Perjalanan Madrasah Tsanawiyah Yanuri Annamira dalam membangun pendidikan yang
          berkualitas.
        </p>
      </div>

      <!-- Timeline -->

      <div class="relative">
        <!-- Vertical Line -->

        <div class="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2"></div>

        <!-- Timeline Items -->

        <div v-for="(item, index) in history" :key="item.id" class="timeline-item">
          <div
            class="grid md:grid-cols-2 gap-12 items-center"
            :class="index % 2 === 0 ? '' : 'md:[direction:rtl]'"
          >
            <!-- Content -->

            <div class="timeline-card">
              <span class="year">
                {{ item.year }}
              </span>

              <h3 class="title">
                {{ item.title }}
              </h3>

              <p class="desc">
                {{ item.description }}
              </p>
            </div>

            <!-- Empty space for alternating layout -->

            <div></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 60px;
}

.timeline-card {
  padding: 24px;
  border-radius: 14px;
  background: #f9fafb;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.year {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 6px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111827;
}

.desc {
  color: #6b7280;
  line-height: 1.6;
}
</style>
