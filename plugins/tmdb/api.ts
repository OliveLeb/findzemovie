import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async nuxtApp => {
  
  const config = useRuntimeConfig()
  const API_KEY = config.tmdb.TMDB_API_KEY

  const response: any = await $fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`, {
      method: 'GET'
    }
  )

  // console.log(response)
})
