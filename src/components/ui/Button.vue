<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <button
    class="px-6 py-3 rounded-lg font-semibold transition"
    :class="{
      'bg-green-700 text-white hover:bg-green-800': variant === 'primary',
      'bg-red-600 text-white hover:bg-red-700': variant === 'accent',
      'border border-gray-300 hover:bg-gray-100': variant === 'outline',
    }"
  >
    <slot />
  </button>
</template>
