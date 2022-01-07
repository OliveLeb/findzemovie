<template>
  <div>
    <h2 class="text-2xl uppercase">Synopsis</h2>
  </div>
  <div>
    {{ synopsis }}
  </div>
</template>

<script setup>
  const props = defineProps({
    synopsis: {
      type: String
    }
  })
</script>