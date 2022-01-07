# Find Ze Movie

Personnal Project to search for a movie or a tv show using [Nuxt 3](https://v3.nuxtjs.org/) and [TheMovieDataBase](https://www.themoviedb.org/)  
Currently in dev

## Setup

Make sure to install the dependencies

```bash
yarn install
```

And copy the .env.example to .env

```bash
cp .env.example .env
```
### The Movie DB

1. Create an account on [TMDB](https://www.themoviedb.org/signup)  
2. Get an API key 
3. fill `TMDB_API_KEY` in the .env with it

Check the [TMDB developers docs](https://developers.themoviedb.org/3/getting-started/introduction) to learn more

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).