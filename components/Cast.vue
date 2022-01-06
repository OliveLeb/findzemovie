<template>
<section>
  <h2>Starring</h2>

  <div class="flex">
    <div v-for="actor in cast" :key="actor.id">
      <ul>
        <li>{{ actor.name }}</li>
        <li>as</li>
        <li>{{ actor.character }}</li>
        
      </ul>
      <MovieImage :image="actor.profile_path"/>
    </div>
  </div>

</section>
</template>

<script setup>
  const props = defineProps({
    cast: Array
  })
</script>