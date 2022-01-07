<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w${size}${image}`" alt="" class="m-auto">
  </div>
</template>

<script setup>
  const props = defineProps({
    image: String,
    size: {
      type: [Number, String],
      default: 500
    }
  })
</script>