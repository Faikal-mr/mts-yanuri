<script setup>
import Container from '@/components/ui/Container.vue'

const characters = [
  {
    title: 'Amanah',
    icon: '📖',
    desc: 'Mendidik siswa menjadi pribadi yang terpercaya',
  },
  {
    title: 'Disiplin',
    icon: '🎓',
    desc: 'Membiasakan hidup teratur dan bertanggung jawab',
  },
  {
    title: 'Peduli',
    icon: '🤝',
    desc: 'Menanamkan rasa kepedulian sosial',
  },
  {
    title: 'Mandiri',
    icon: '🌱',
    desc: 'Membentuk karakter mandiri sejak dini',
  },
]
</script>

<template>
  <section v-reveal class="bg-white py-24">
    <Container>
      <!-- Title -->

      <div class="text-center mb-16">
        <SectionTitle normal="Karakter" accent="Pendidikan" />

        <p class="text-gray-500 mt-4 max-w-xl mx-auto">
          Nilai-nilai pendidikan yang kami tanamkan kepada setiap siswa untuk membentuk pribadi yang
          unggul dan berakhlak mulia.
        </p>
      </div>

      <!-- Cards -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="item in characters" :key="item.title" class="character-card text-center">
          <div class="icon">
            {{ item.icon }}
          </div>

          <h3 class="font-semibold text-lg mb-2">
            {{ item.title }}
          </h3>

          <p class="text-gray-600 text-sm leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.character-card {
  padding: 32px;
  border-radius: 16px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: #ffffff;
}

.character-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.icon {
  font-size: 32px;
  margin-bottom: 12px;
}
</style>
