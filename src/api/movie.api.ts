import path from 'src/constants/path'
import { Movie, MovieParams, MovieType } from 'src/types/movie.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const movieApi = {
  getMovies(type: MovieType, params: MovieParams) {
    const URL = path.movie + type
    return http.get<SuccessResponse<Movie>>(URL, {
      params
    })
  }
}

export default movieApi
