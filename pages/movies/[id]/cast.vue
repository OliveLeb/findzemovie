<template>
<section>
    <h2>Cast and Crew</h2>

    <div>
      <h3>Crew</h3>

      <div class="flex flex-row flex-wrap">

        <div v-for="(department, name) in reducedCrews" :key="name">
          <h4 class="underline">{{ name }}</h4>

          <div v-for="crew in department" :key="crew.id">
            <p>{{ crew.name }}</p>
            <p class="text-xs">{{ crew.job }}</p>
          </div>
        </div>

      </div>
    </div>

    <div>
      <h3>Actors</h3>
      <div class="flex flex-row flex-wrap">
        
        <div v-for="cast in movieStore.cast.cast" :key="cast.id">
          {{ cast.name }}
        </div>

      </div>
    </div>


</section>
</template>

<script setup>
  import { useMoviesStore } from '~~/stores/movies';

  const movieStore = useMoviesStore()

// Sort Crew by department then job in alphabetical order
  const reducedCrews = computed(()=> {
    return movieStore.cast.crew.reduce((acc, obj)=> {
      let key = obj['department']
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)

      acc[key].sort((a, b) => {
        let jobA = a.job.toUpperCase()
        let jobB = b.job.toUpperCase()
        return (jobA < jobB) ? -1 : (jobA > jobB) ? 1 : 0;
      })

      return acc
    }, {})
  })

</script>

<script>
  export default {
    layout: 'movie'
  }
</script>
