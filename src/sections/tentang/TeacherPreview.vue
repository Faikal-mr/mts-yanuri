<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useTeachers } from '@/composables/useTeachers'

const { teachers: teachersData, loading } = useTeachers()

const teacherFallbackImage = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5'
</script>

<template>
  <section v-reveal class="py-28 bg-gray-50">
    <Container>
      <!-- Header -->
      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Tenaga" accent="Pengajar" />

        <p class="mt-4 text-gray-500 leading-relaxed">
          Didukung oleh tenaga pengajar profesional yang berdedikasi dalam mendidik generasi Qurani.
        </p>
      </div>

      <!-- Content -->
      <div>
        <!-- Loading -->
        <div v-if="loading" class="text-center text-gray-400">Memuat data pengajar...</div>

        <!-- Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <article
            v-for="teacherItem in teachersData"
            :key="teacherItem.id"
            class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <!-- Image -->
            <div class="relative overflow-hidden">
              <img
                :src="teacherItem.photo_url || teacherFallbackImage"
                :alt="teacherItem.name"
                class="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              <!-- Overlay -->
              <div class="overlay">
                <div class="socials">
                  <a
                    v-if="teacherItem.social_facebook"
                    :href="teacherItem.social_facebook"
                    target="_blank"
                    class="social"
                  >
                    f
                  </a>

                  <a
                    v-if="teacherItem.social_instagram"
                    :href="teacherItem.social_instagram"
                    target="_blank"
                    class="social"
                  >
                    i
                  </a>

                  <a
                    v-if="teacherItem.social_linkedin"
                    :href="teacherItem.social_linkedin"
                    target="_blank"
                    class="social"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>

            <!-- Info -->
            <div class="py-5 px-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900">
                {{ teacherItem.name }}
              </h3>

              <p class="text-sm text-gray-500 mt-1">
                {{ teacherItem.role }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.group:hover .overlay {
  opacity: 1;
}

.socials {
  display: flex;
  gap: 12px;
}

.social {
  width: 38px;
  height: 38px;
  background: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.social:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}
</style>
