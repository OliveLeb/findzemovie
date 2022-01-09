<template>
<section>
  <h2>Starring</h2>

  <div class="flex">
    <div v-for="actor in principalCast" :key="actor.id">
    <NuxtLink to="#"></NuxtLink>
      <ul>
        <li>{{ actor.name }}</li>
        <li>as</li>
        <li>{{ actor.character }}</li>
        
      </ul>
      <MovieImage :image="actor.profile_path"/>
    </div>
  </div>
  <div>
    <NuxtLink :to="`${cast.id}/cast`" >
      See more...
    </NuxtLink>
  </div>
</section>
</template>

<script setup>
  const props = defineProps({
    cast: Object
  })

  const principalCast = computed(() => props.cast.cast.slice(0,6))

</script>