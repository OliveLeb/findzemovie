<template>

  <section>
    <div class="flex justify-between">
      <h2 class="text-2xl">Now in Theatre</h2>
      <span>see more...</span>
    </div>

    <div class="flex flex-wrap justify-center">
      <MovieCard v-for="movie in firstMovies" :key="movie.id" 
      :title="movie.title" :image="movie.poster_path" :votes="movie.vote_average" :id="movie.id" :overview="movie.overview"/>
    </div>

  </section>

</template>

<script setup>
import { useMoviesStore } from '~~/stores/movies';
const movieStore = useMoviesStore()

const firstMovies = computed(()=> movieStore.currentlyPlaying.slice(0,4))
</script>