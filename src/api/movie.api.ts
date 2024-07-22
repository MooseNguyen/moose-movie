import path from 'src/constants/path'
import { Movie, MovieCategory, MovieParams, MovieType, Tv, TvSimilar, TvType } from 'src/types/movie.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const movieApi = {
  getMovies(type: MovieType, params: MovieParams) {
    const URL = path.movie + type
    return http.get<SuccessResponse<Movie>>(URL, {
      params
    })
  },
  getTvs(type: TvType, params: MovieParams) {
    const URL = path.tv + type
    return http.get<SuccessResponse<Tv>>(URL, {
      params
    })
  },
  getSimilar(category: MovieCategory, id: string) {
    const URL = category + '/' + id + path.similar
    return http.get<SuccessResponse<TvSimilar>>(URL, {
      params: {}
    })
  }
}

export default movieApi
