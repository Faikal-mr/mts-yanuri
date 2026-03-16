<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const route = useRoute()
const teacher = ref(null)

const fetchTeacher = async () => {
  const { data } = await supabase
    .from('teachers')
    .select('*')
    .eq('slug', route.params.slug)
    .single()

  teacher.value = data
}

onMounted(fetchTeacher)
</script>

<template>
  <div v-if="teacher">
    <img :src="teacher.photo_url" />

    <h1>{{ teacher.name }}</h1>
    <p>{{ teacher.role }}</p>
    <p>{{ teacher.bio }}</p>
  </div>
</template>
