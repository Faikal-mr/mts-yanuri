<script setup>
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'

const school = {
  name: 'MTs Yanuri Annamira',
  description:
    'Madrasah Tsanawiyah yang berkomitmen membentuk generasi Qurani yang berakhlak mulia dan unggul dalam ilmu pengetahuan.',
}

const navigation = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Program', to: '/program' },
  { label: 'Berita', to: '/berita' },
]

const contacts = [
  { icon: '📍', text: 'Jl. Pendidikan No.10' },
  { icon: '📞', text: '0812-3456-7890' },
  { icon: '✉', text: 'info@yanuri.sch.id' },
]

const socials = [
  {
    name: 'Facebook',
    icon: 'f',
    url: 'https://facebook.com/',
  },
  {
    name: 'Instagram',
    icon: 'i',
    url: 'https://instagram.com/',
  },
  {
    name: 'YouTube',
    icon: '▶',
    url: 'https://youtube.com/',
  },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer v-reveal class="bg-gray-900 text-gray-300 pt-20 pb-10">
    <Container>
      <!-- Grid -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- School Info -->

        <div>
          <h3 class="text-white text-xl font-semibold mb-4">
            {{ school.name }}
          </h3>

          <p class="text-gray-400 leading-relaxed text-sm">
            {{ school.description }}
          </p>
        </div>

        <!-- Navigation -->

        <div>
          <h4 class="text-white font-semibold mb-4">Navigasi</h4>

          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.label">
              <RouterLink :to="item.to" class="hover:text-white transition text-sm">
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->

        <div>
          <h4 class="text-white font-semibold mb-4">Kontak</h4>

          <ul class="space-y-3 text-gray-400">
            <li
              v-for="contact in contacts"
              :key="contact.text"
              class="flex items-start gap-2 text-sm"
            >
              <span>{{ contact.icon }}</span>

              <span>{{ contact.text }}</span>
            </li>
          </ul>
        </div>

        <!-- Social -->

        <div>
          <h4 class="text-white font-semibold mb-4">Ikuti Kami</h4>

          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              class="social-icon"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->

      <div class="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © {{ year }} {{ school.name }}. Semua Hak Dilindungi.
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2937;
  border-radius: 999px;
  transition: all 0.3s ease;
  font-size: 14px;
}

.social-icon:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}
</style>
