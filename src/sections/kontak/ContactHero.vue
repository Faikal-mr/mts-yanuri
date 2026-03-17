<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
</script>

<template>
  <section
    v-reveal
    class="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-28"
  >
    <!-- background decoration -->
    <div
      class="absolute -top-20 -right-20 w-[280px] h-[280px] bg-primary/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[220px] h-[220px] bg-primary/5 rounded-full blur-2xl"
    ></div>

    <Container>
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <!-- TEXT -->
        <div>
          <p class="text-primary font-medium tracking-wide">Hubungi Kami</p>

          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Kami Siap Membantu <br />
            <span class="text-primary">Kebutuhan Anda</span>
          </h1>

          <p class="mt-6 text-gray-600 leading-relaxed max-w-lg">
            Silakan hubungi kami untuk informasi lebih lanjut mengenai program, pendaftaran, atau
            pertanyaan lainnya. Tim kami akan dengan senang hati membantu.
          </p>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              class="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition"
            >
              Chat WhatsApp
            </a>

            <a
              href="mailto:info@sekolah.sch.id"
              class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Kirim Email
            </a>
          </div>
        </div>

        <!-- VISUAL -->
        <div class="relative">
          <!-- glow (lebih halus) -->
          <div
            class="absolute -z-10 top-6 left-6 w-full h-full bg-primary/5 rounded-2xl blur-2xl"
          ></div>

          <!-- card -->
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div class="space-y-3">
              <div class="h-3 w-20 bg-gray-200 rounded"></div>
              <div class="h-3 w-32 bg-gray-200 rounded"></div>
            </div>

            <div class="mt-6 space-y-3">
              <div class="h-10 bg-gray-100 rounded-lg"></div>
              <div class="h-10 bg-gray-100 rounded-lg"></div>
              <div class="h-24 bg-gray-100 rounded-lg"></div>
            </div>

            <div class="mt-6 h-10 bg-primary/80 rounded-lg"></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
