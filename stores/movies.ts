import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMoviesStore = defineStore('movies', {

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMoviesStore, import.meta.hot))