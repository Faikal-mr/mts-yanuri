<script setup>
import Container from '@/components/ui/Container.vue'

const methods = [
  {
    id: 1,
    title: 'Pembelajaran Berbasis Al-Qur’an',
    desc: 'Setiap proses pembelajaran berlandaskan nilai-nilai Al-Qur’an untuk membentuk karakter siswa.',
    icon: '📖',
  },
  {
    id: 2,
    title: 'Pendekatan Karakter Islami',
    desc: 'Pembinaan akhlak melalui kegiatan harian dan pembiasaan nilai-nilai Islami.',
    icon: '🌱',
  },
  {
    id: 3,
    title: 'Penguatan Akademik',
    desc: 'Kurikulum dirancang untuk meningkatkan kemampuan akademik dan literasi siswa.',
    icon: '🎓',
  },
  {
    id: 4,
    title: 'Teknologi Pendidikan',
    desc: 'Pemanfaatan teknologi untuk mendukung proses belajar yang modern dan efektif.',
    icon: '💻',
  },
]
</script>

<template>
  <section v-reveal class="relative py-32 bg-gray-50 overflow-hidden">
    <!-- soft background decoration -->

    <div class="absolute inset-0 pointer-events-none">
      <div class="bg-shape top-[-100px] right-[-120px]"></div>
    </div>

    <Container class="relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- LEFT CONTENT -->

        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Metode
            <span class="border-b-4 border-red-500 pb-1"> Pembelajaran </span>
          </h2>

          <p class="mt-6 text-gray-600 leading-relaxed max-w-lg">
            Metode pembelajaran kami dirancang untuk mengembangkan potensi siswa secara akademik,
            spiritual, dan karakter.
          </p>

          <!-- METHOD LIST -->

          <div class="mt-10 space-y-6">
            <div v-for="method in methods" :key="method.id" class="method-card group">
              <div class="icon">
                {{ method.icon }}
              </div>

              <div>
                <h3 class="title">
                  {{ method.title }}
                </h3>

                <p class="desc">
                  {{ method.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT IMAGE -->

        <div class="relative group">
          <img
            src="/images/sekolah2.webp"
            class="rounded-2xl shadow-xl object-cover w-full h-[420px] transition duration-500 group-hover:scale-[1.03]"
          />

          <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10"></div>
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

.method-card {
  display: flex;
  gap: 16px;
  padding: 18px;
  border-radius: 14px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
}

.method-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
}

.icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(34, 197, 94, 0.1);
  font-size: 22px;
  flex-shrink: 0;
}

.title {
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}
</style>
