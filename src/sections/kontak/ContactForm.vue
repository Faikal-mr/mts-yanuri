<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

// 🔥 nomor WA
const WA_NUMBER = '6281234567890'

// 🔥 template pesan
const message = `
Assalamu’alaikum, saya ingin mendaftar PPDB.

Mohon informasi lebih lanjut.
`

const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
</script>

<template>
  <section v-reveal class="py-24 bg-gray-50 text-center">
    <Container>
      <h2 class="text-3xl font-bold text-gray-900">Pendaftaran PPDB</h2>

      <p class="mt-3 text-gray-500">Klik tombol di bawah untuk langsung terhubung dengan admin</p>

      <!-- 🔥 BUTTON -->
      <div class="mt-8">
        <a :href="waLink" target="_blank" class="btn-cta"> Daftar PPDB </a>
      </div>
    </Container>
  </section>
</template>
