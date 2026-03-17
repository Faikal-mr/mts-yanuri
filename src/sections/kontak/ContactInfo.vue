<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { icons } from '@/lib/icons'

interface ContactItem {
  title: string
  value: string
  icon: keyof typeof icons
}

interface SocialItem {
  name: string
  url: string
  icon: keyof typeof icons
}

const contactItems: ContactItem[] = [
  {
    title: 'Alamat',
    value: 'Jl. Contoh No.123, Bandung',
    icon: 'map',
  },
  {
    title: 'Telepon',
    value: '0812-xxxx-xxxx',
    icon: 'phone',
  },
  {
    title: 'Email',
    value: 'info@sekolah.sch.id',
    icon: 'mail',
  },
  {
    title: 'Jam Operasional',
    value: 'Senin - Jumat, 08.00 - 15.00',
    icon: 'clock',
  },
]

const socialItems: SocialItem[] = [
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'YouTube', url: '#', icon: 'youtube' },
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'TikTok', url: '#', icon: 'music' },
  { name: 'WhatsApp', url: '#', icon: 'phone' },
]
</script>
<template>
  <section class="py-28 bg-white">
    <Container>
      <!-- Header -->
      <div class="text-center max-w-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Informasi Kontak</h2>

        <p class="mt-4 text-gray-500 leading-relaxed">
          Hubungi kami melalui berbagai saluran yang tersedia
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="item in contactItems" :key="item.title" class="contact-card group">
          <!-- Icon wrapper -->
          <div class="icon-wrapper">
            <component :is="icons[item.icon]" class="w-5 h-5 text-primary" />
          </div>

          <h3 class="mt-4 font-semibold text-gray-900">
            {{ item.title }}
          </h3>

          <p class="mt-1 text-sm text-gray-500">
            {{ item.value }}
          </p>
        </div>
      </div>

      <!-- Social Media -->
      <div class="mt-20 text-center">
        <h3 class="text-base font-semibold text-gray-900">Ikuti Kami</h3>

        <div class="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            v-for="item in socialItems"
            :key="item.name"
            :href="item.url"
            target="_blank"
            class="social-circle group"
          >
            <component
              :is="icons[item.icon]"
              class="w-5 h-5 text-gray-600 group-hover:text-primary transition"
            />
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
/* Card */
.contact-card {
  text-align: center;
  padding: 24px 18px;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
}

/* Icon background */
.icon-wrapper {
  width: 44px;
  height: 44px;
  margin: 0 auto;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.08); /* primary soft */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.contact-card:hover .icon-wrapper {
  background: rgba(16, 185, 129, 0.15);
}

/* Social circle */
.social-circle {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all 0.25s ease;
}

.social-circle:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
}
</style>
