import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMoviesStore = defineStore('movies', {

  state: () => ({
    currentMovie: {},
    currentlyPlaying: [],
    recommendations: []
  })

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMoviesStore, import.meta.hot))