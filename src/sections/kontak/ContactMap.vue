<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

// 🔥 config lokasi (bisa dipindah ke config nanti)
const location = {
  name: 'Sekolah ABC',
  address: 'Jl. Contoh No.123, Bandung',
  embed: 'https://maps.google.com/maps?q=bandung&t=&z=15&ie=UTF8&iwloc=&output=embed',
  link: 'https://maps.google.com/?q=bandung',
}
</script>
<template>
  <section v-reveal class="py-28 bg-gray-50">
    <Container>
      <!-- Header -->
      <div class="text-center max-w-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Lokasi Kami</h2>

        <p class="mt-4 text-gray-500">Temukan lokasi kami dengan mudah melalui peta di bawah ini</p>
      </div>

      <!-- Map Wrapper -->
      <div class="mt-14 relative">
        <!-- Map -->
        <iframe
          :src="location.embed"
          class="w-full h-[420px] rounded-2xl border border-gray-200 shadow-sm"
          loading="lazy"
        ></iframe>

        <!-- 🔥 Overlay Card -->
        <div
          class="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 max-w-xs border border-gray-100"
        >
          <h3 class="font-semibold text-gray-900">
            {{ location.name }}
          </h3>

          <p class="text-sm text-gray-500 mt-1">
            {{ location.address }}
          </p>

          <a
            :href="location.link"
            target="_blank"
            class="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
          >
            Lihat di Google Maps →
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>
