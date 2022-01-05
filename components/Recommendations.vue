<template>
 <aside>
   <h2>You'd also like</h2>

  <div class ="flex">
    <div v-for="movie in movies" :key="movie.id" class="w-40">
    <figure>
      <figcaption>
        {{ movie.title }}
      </figcaption>
      <MovieImage :image="movie.poster_path" />
    </figure>
    </div>
  </div>

 </aside>
</template>

<script setup>
  const props = defineProps({
    movies: {
      type: Array
    }
  })
</script>