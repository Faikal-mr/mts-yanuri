<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Container from '@/components/ui/Container.vue'

const testimonials = [
  {
    id: 1,
    isi: 'Sekolah ini memberikan pendidikan yang sangat baik, tidak hanya akademik tetapi juga pembentukan karakter Islami.',
    nama: 'Ahmad Fauzi',
    jabatan: 'Orang Tua Siswa',
  },
  {
    id: 2,
    isi: 'Lingkungan sekolah sangat mendukung perkembangan anak, guru-gurunya juga sangat perhatian.',
    nama: 'Siti Rahma',
    jabatan: 'Wali Murid',
  },
  {
    id: 3,
    isi: "Program tahfidz di sekolah ini sangat membantu anak kami dalam menghafal Al-Qur'an dengan baik.",
    nama: 'Muhammad Ridwan',
    jabatan: 'Orang Tua Siswa',
  },
]

const current = ref(0)

let interval

const nextSlide = () => {
  current.value = (current.value + 1) % testimonials.length
}

const setSlide = (i) => {
  current.value = i
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="py-32 bg-gray-50">
    <Container>
      <!-- header -->

      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Apa Kata
          <span class="border-b-4 border-red-500 pb-1"> Mereka </span>
        </h2>

        <p class="mt-4 text-gray-500 max-w-xl mx-auto">
          Testimoni dari orang tua dan siswa mengenai pengalaman mereka bersama sekolah kami.
        </p>
      </div>

      <!-- testimonial slider -->

      <div class="relative max-w-3xl mx-auto">
        <transition name="fade" mode="out-in">
          <div :key="testimonials[current].id" class="testimonial-card">
            <!-- quote -->

            <div class="quote">“</div>

            <p class="text">
              {{ testimonials[current].isi }}
            </p>

            <div class="user">
              <div class="avatar">
                {{ testimonials[current].nama.charAt(0) }}
              </div>

              <div>
                <h4 class="name">
                  {{ testimonials[current].nama }}
                </h4>

                <span class="role">
                  {{ testimonials[current].jabatan }}
                </span>
              </div>
            </div>
          </div>
        </transition>

        <!-- dots -->

        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="(item, index) in testimonials"
            :key="item.id"
            @click="setSlide(index)"
            class="dot"
            :class="index === current ? 'active' : ''"
          ></button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.quote {
  font-size: 50px;
  color: #22c55e;
  margin-bottom: 10px;
}

.text {
  color: #6b7280;
  font-size: 16px;
  line-height: 1.7;
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #22c55e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.role {
  font-size: 13px;
  color: #6b7280;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d1d5db;
  transition: all 0.3s ease;
}

.dot.active {
  background: #22c55e;
  transform: scale(1.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
