<template>
  <article class="p-2">
    <h1>{{ movie.title }}</h1>
      <p>{{ movie.vote_average }}</p>
      <p>{{ timeToHour }}</p>
      <p>{{ movie.release_date }}</p>

      <h3>Synopsis</h3>
      <p>{{ movie.overview }}</p>
  </article>
</template>

<script setup>
  const props = defineProps({
    movie: Object
  })
  const timeToHour = computed(() => minutesToHours(props.movie.runtime))
</script>