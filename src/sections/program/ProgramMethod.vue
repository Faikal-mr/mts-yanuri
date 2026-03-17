<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { METHODS_DATA } from '@/constants/program'

const methodsData = METHODS_DATA
</script>

<template>
  <section v-reveal class="relative py-32 bg-gray-50 overflow-hidden">
    <!-- Decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="bg-shape top-[-100px] right-[-120px]"></div>
    </div>

    <Container class="relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <!-- Header -->
          <SectionTitle normal="Metode" accent="Pembelajaran" />

          <p class="mt-6 text-gray-600 leading-relaxed max-w-lg">
            {{ methodsData.description }}
          </p>

          <!-- List -->
          <div class="mt-10 space-y-6">
            <div
              v-for="methodItem in methodsData.items"
              :key="methodItem.id"
              class="method-card group"
            >
              <div class="icon">
                {{ methodItem.icon }}
              </div>

              <div>
                <h3 class="title">
                  {{ methodItem.title }}
                </h3>

                <p class="desc">
                  {{ methodItem.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative group">
          <img
            :src="methodsData.image"
            alt="Metode Pembelajaran"
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
  background: color-mix(in srgb, var(--color-primary) 8%, transparent);
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
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
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
