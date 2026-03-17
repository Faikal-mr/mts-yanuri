<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '@/lib/icons'

interface Props {
  name: keyof typeof icons
  size?: number
  class?: string
}

const props = defineProps<Props>()

const IconComponent = computed(() => icons[props.name])
const size = computed(() => props.size ?? 20)
</script>

<template>
  <component
    :is="IconComponent"
    :class="class"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>
