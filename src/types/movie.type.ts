export type MovieCategory = 'movie' | 'tv'
export type AllType = 'upcoming' | 'popular' | 'top_rated' | 'on_the_air'

export interface IMovieParams {
  page?: number
}

export interface IMovieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  origin_country?: string[]
  original_language: string
  original_name?: string
  original_title?: string
  overview: string
  popularity: number
  poster_path: string
  release_date?: string
  title?: string
  video?: string
  vote_average: number
  vote_count: number
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: string
  vote_average: number
  vote_count: number
}

export interface Tv {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: string
  vote_count: number
}

export interface TvSimilar extends Tv {
  first_air_date: string
  name: string
}
