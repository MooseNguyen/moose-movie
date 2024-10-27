import path from 'src/constants/path'
import { MovieCategory, IMovieParams, AllType, TvSimilar, IMovieData } from 'src/types/movie.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const movieApi = {
  getMovies(type: AllType, params: IMovieParams) {
    const URL = path.movie + type
    return http.get<SuccessResponse<IMovieData>>(URL, {
      params
    })
  },
  getTvs(type: AllType, params: IMovieParams) {
    const URL = path.tv + type
    return http.get<SuccessResponse<IMovieData>>(URL, {
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
