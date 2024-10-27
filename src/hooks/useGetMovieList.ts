import { useQuery } from '@tanstack/react-query'
import movieApi from 'src/api/movie.api'
import { IMovieParams, AllType, MovieCategory } from 'src/types/movie.type'

interface IUseGetMovieListProps {
  queryKeyString: string
  category: MovieCategory
  type: AllType
  queryConfig: IMovieParams
  enabledCondition?: any
}

const mapAPICall = (type: AllType, category: MovieCategory, queryConfig: IMovieParams) => {
  switch (category) {
    case 'movie':
      return movieApi.getMovies(type, queryConfig)
    case 'tv':
      return movieApi.getTvs(type, queryConfig)
  }
}

export const useGetMovieList = ({
  queryKeyString,
  type,
  category,
  queryConfig,
  enabledCondition
}: IUseGetMovieListProps) => {
  const { data } = useQuery({
    queryKey: [queryKeyString, queryConfig],
    queryFn: () => mapAPICall(type, category, queryConfig),
    enabled: enabledCondition
  })

  const moviesData = data?.data.results

  return { moviesData }
}

export default useGetMovieList
