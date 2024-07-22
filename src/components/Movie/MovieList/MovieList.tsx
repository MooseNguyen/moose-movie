import { useQuery } from '@tanstack/react-query'
import movieApi from 'src/api/movie.api'
import { MovieCategory, MovieParams, MovieType, TvType } from 'src/types/movie.type'

interface Props {
  type: string
  category: string
}

export const MovieList = ({ category, type }: Props) => {
  const queryConfig: MovieParams = {}

  const { data: movieListData } = useQuery({
    queryKey: ['movies', queryConfig],
    queryFn: () => {
      return movieApi.getMovies(type as MovieType, queryConfig)
    },
    enabled: type !== 'similar' && category === 'movie'
  })

  const { data: tvListData } = useQuery({
    queryKey: ['tvs', queryConfig],
    queryFn: () => {
      return movieApi.getTvs(type as TvType, queryConfig)
    },
    enabled: type !== 'similar' && category === 'tv'
  })

  const { data: similarData } = useQuery({
    queryKey: ['tvs', queryConfig],
    queryFn: () => {
      return movieApi.getSimilar(category as MovieCategory, '123')
    },
    enabled: type === 'similar'
  })

  console.log('movieListData: ', movieListData)
  console.log('tvListData: ', tvListData)
  console.log('similarData: ', similarData)

  return <div>MovieList</div>
}
