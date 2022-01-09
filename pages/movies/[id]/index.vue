<template>
  <div>

    <!-- <div class="text-center mt-2 mb-5">
      <h1 class="md:text-4xl text-2xl font-bold">{{ movie.title }}</h1>
      <span class="italic">"{{ movie.tagline }}"</span>  
    </div> -->
    <div>Bonjour ?</div>
    <section class="bg-no-repeat bg-cover" :style="{backgroundImage:bgImage}">
      <div class="flex flex-col items-center md:flex-row md:items-start bg-white/75 p-2">

        <MovieImage :image="movieStore.movie.poster_path" :size="300" class="w-full md:w-1/3"/>

        <MovieInfo :movie="movieStore.movie" class="md:w-2/3" />

      </div>
    </section>

    <!-- <MovieSynopsis :synopsis="movie.overview" /> -->
    <!-- <Recommendations :movies="recommendations"/> -->

    <MovieCast :cast="movieStore.cast"/>

  </div>
</template>

<script>
  export default {
    layout: 'movie'
  }
</script>

<script setup>
import { useMoviesStore } from '~~/stores/movies'

const movieStore = useMoviesStore()

const bgImage = computed(() => `url(https://image.tmdb.org/t/p/w1280${movieStore.movie.backdrop_path})`)


// const conf = await imdbFetch('/configuration')
// console.log(conf)

// const { data: recommendations } = await useAsyncData('recommendations',
//   () => imdbFetch(`/movie/${route.params.id}/recommendations?language=fr&page=1`), {
//     transform: movies => movies.results.slice(0,3)
//   }
// )

// const { data: collection } = await useAsyncData('collection',
//   () => imdbFetch(`/collection/${movie.value.belongs_to_collection.id}?language=fr`)
// )

</script>