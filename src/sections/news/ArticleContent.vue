<script setup lang="ts">
import type { News } from '@/types/news'

defineProps<{
  article: News
}>()
</script>

<template>
  <section class="py-16">
    <div class="max-w-3xl mx-auto px-6">
      <!-- Article Content -->

      <article class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {{ article.content }}
      </article>
    </div>
  </section>
</template>
