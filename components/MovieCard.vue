<template>
  <div class="p-2">
    <NuxtLink :to="`/movies/${id}`" @mouseenter="slideIn" @mouseleave="slideOut">
      <figure class="flex flex-col w-52 relative">
        <div class="relative overflow-hidden overview-container">
          <MovieImage :image="image" />
          <div class="absolute bg-red-600/75 overview text-white transition-transform">{{ smallText }}</div>
        </div>
        <figcaption>{{ title }}</figcaption>
        <div class="absolute right-0 bg-red-600 p-1 rounded-bl-md"><span class="text-white">{{ votes }}</span></div>
      </figure>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
    id: {
      type: Number
    },
    image: {
      type: String
    },
    votes: {
      type: Number
    },
    overview: {
      type: String
    }
  })
  const slideIn = () => {}
  const slideOut = () => {}

  const smallText = computed(()=> {
    if (props.overview.length <= 150) return props.overview
    return props.overview.substring(0, 150) + '...'
  })
</script>

<style>
.overview-container:hover .overview {
  transform: translateY(-100%);
}
</style>