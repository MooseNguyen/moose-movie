export interface MovieCategory {
  movie?: string
  tv?: string
}

export interface MovieType {
  upcoming?: string
  popular?: string
  top_rated?: string
}

export interface TvType {
  topRated?: string
  popular?: string
  onTheAir?: string
}

export interface MovieParams {
  page?: number
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
  popster_path: string
  vote_average: string
  vote_count: number
}

export interface TvSimilar extends Tv {
  first_air_date: string
  name: string
}
