export const fetchPopular = async () => {
  const res = await fetch(`${process.env.REACT_APP_POPULAR}`)
  return res.json()
}

export const fetchDiscover = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=Integer&with_watch_monetization_types=flatrate`)
  return res.json()
}

export const fetchTopRated = async () => {
  const res = await fetch(`${process.env.REACT_APP_TOP_RATED}`)
  return res.json()
}

export const fetchSearchMovie = async (queryMovie) => {
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${queryMovie}&page=1&include_adult=false`
  const res = await fetch(API)
  return res.json()
}

export const fetchMovieDetails = async (movie_id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    return res.json()
  }

  export const fetchMovieCredits = async (movie_id) => {
    const API = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    const res = await fetch(API)
    return res.json()
  }

  export const fetchActorCredits = async (actor_id) => {
    const API = `https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    const res = await fetch(API)
    return res.json()
  }

  export const fetchActorDetails = async (actor_id) => {
    const API = `https://api.themoviedb.org/3/person/${actor_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    const res = await fetch(API)
    return res.json()
  }
