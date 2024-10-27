import { AllType, MovieCategory, IMovieParams } from 'src/types/movie.type'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { MovieItem } from '../MovieItem'
import { useGetMovieList } from 'src/hooks'

interface IMovieListProps {
  type: AllType
  category: MovieCategory
}

export const MovieList = ({ category, type }: IMovieListProps) => {
  const queryConfig: IMovieParams = {}
  const queryKeyString = `${category}-${type}`

  const { moviesData } = useGetMovieList({ queryKeyString, type, category, queryConfig })

  return (
    <div className='min-w-full'>
      <Swiper modules={[Navigation]} effect='slide' navigation grabCursor slidesPerView='auto' spaceBetween={10}>
        {moviesData && (
          <div>
            {moviesData.map((movie, index) => (
              <SwiperSlide key={index} className='!w-[15%]'>
                <MovieItem movie={movie} category={category} />
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </div>
  )
}
