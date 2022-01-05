<template>
  <div>
    <section>
      <MovieImage :image="movie.poster_path" />
      <h2>{{ movie.title }}</h2>
    </section>
    <Recommendations :movies="firstsRecommendations"/>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const API_KEY = config.tmdb.TMDB_API_KEY
// const { data: movie, error } = useAsyncData('current_movie', 
//   () => $fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}&language=fr`)
// )
// const { data: recommendations } = useAsyncData('recommendations',
//   () => $fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/similar?api_key=${API_KEY}&language=fr&page=1`), {
//     transform: () => {}
//   }
// )
const movie = await $fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}&language=fr`)
const recommendations = await $fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/similar?api_key=${API_KEY}&language=fr&page=1`)

const firstsRecommendations = computed(() => recommendations.results.slice(0,3))

</script>