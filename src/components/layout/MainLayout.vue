<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>

<template>
  <Navbar />

  <main class="min-h-screen">
    <slot />
  </main>

  <Footer />
</template>
