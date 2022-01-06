<template>
  <div>
    <section class="flex">
      <MovieImage :image="movie.poster_path" />
      <MovieInfo :movie="movie" />
    </section>

    <!-- <Recommendations :movies="recommendations"/> -->

    <!-- <Cast :cast="cast"/> -->

  </div>
</template>

<script setup>
import MovieInfo from '~~/components/MovieInfo.vue';

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

// const { data: recommendations } = await useAsyncData('recommendations',
//   () => imdbFetch(`/movie/${route.params.id}/recommendations?language=fr&page=1`), {
//     transform: movies => movies.results.slice(0,3)
//   }
// )

// const { data: collection } = await useAsyncData('collection',
//   () => imdbFetch(`/collection/${movie.value.belongs_to_collection.id}?language=fr`)
// )

</script>