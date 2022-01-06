export const imdbFetch = (path: string) => {

  const API_KEY = useRuntimeConfig().tmdb.TMDB_API_KEY

  const url = path + `?language=fr&api_key=${API_KEY}`

  return $fetch(url + '', {
    baseURL: 'https://api.themoviedb.org/3',
  })
}

