<template>
  <article class="p-2 flex flex-col justify-between h-full">
    <div class="my-3">
      <ul>
        <li>{{ timeToHour }}</li>
        <li>{{ parseDate }}</li>
      </ul>
      <div class="text-3xl w-min bg-green-400 rounded-full p-1.5">
        <span class="rounded-full bg-white">{{ movie.vote_average }}</span>
      </div>
    </div>
    <div>
        <h2 class="text-2xl uppercase">Synopsis</h2>
        <p>
          {{ movie.overview }}
        </p>
    </div>
  </article>
</template>

<script setup>
  const props = defineProps({
    movie: Object
  })
  const timeToHour = computed(() => minutesToHours(props.movie.runtime))
  const parseDate = computed(() => dateToString(props.movie.release_date, 'en'))
</script>