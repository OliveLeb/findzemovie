<template>
  <img :src="`https://image.tmdb.org/t/p/w500/${image}`" alt="">
</template>

<script setup>
  const props = defineProps({
    image: String
  })
</script>