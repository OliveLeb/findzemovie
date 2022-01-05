import { defineNuxtPlugin } from '#app'
import { useMoviesStore } from '~~/stores/movies'


export default defineNuxtPlugin(async nuxtApp => {
  
  const config = useRuntimeConfig()
  const API_KEY = config.tmdb.TMDB_API_KEY
  
  const movieStore = useMoviesStore()

  const response: any = await $fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr&page=1&region=fr`,
    // `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    {
      method: 'GET',
    }
  )

  movieStore.currentlyPlaying = response.results

})

