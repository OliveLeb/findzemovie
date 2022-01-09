<template>
  <div>

    <div class="text-center mt-2 mb-5">
      <h1 class="md:text-4xl text-2xl font-bold">{{ movieStore.movie.title }}</h1>
      <span class="italic">"{{ movieStore.movie.tagline }}"</span>  
    </div>

    <slot />

  </div>
</template>

<script setup>
import { useMoviesStore } from '~~/stores/movies';

const movieStore = useMoviesStore()

const route = useRoute()

const { data: movie } = await useAsyncData('current_movie', 
  () => imdbFetch(`/movie/${route.params.id}`)
)


const { data: cast } = await useAsyncData('credits', 
  () => imdbFetch(`/movie/${route.params.id}/credits`), {
    // pick: ['cast'],
    // transform: cast => cast.cast.slice(0,6),
  }
)

movieStore.$patch(state => {
  state.movie = movie.value
  state.cast = cast.value
})

// const route = useRoute()

// const { data: movie } = await useAsyncData('current_movie', 
//   () => imdbFetch(`/movie/${route.params.id}`)
// )

// const { data: cast } = await useAsyncData('credits', 
//   () => imdbFetch(`/movie/${route.params.id}/credits`), {
//     // pick: ['cast'],
//     // transform: cast => cast.cast.slice(0,6),
//   }
// )

</script>