import { HeroItem } from '../HeroItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import useGetMovieList from 'src/hooks/useGetMovieList'
import { MOVIE_CATEGORY, MOVIE_TYPE } from 'src/constants/movie'
import { IMovieParams } from 'src/types/movie.type'

export const HeroSlide = () => {
  const type = MOVIE_TYPE.POPULAR
  const category = MOVIE_CATEGORY.MOVIE
  const queryConfig: IMovieParams = {}
  const queryKeyString = 'movieSlide'

  const { moviesData } = useGetMovieList({ queryKeyString, type, category, queryConfig })

  const movieList = moviesData && moviesData.slice(0, 5)

  return (
    <div className='w-full h-full'>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect='fade'
        autoplay={{
          delay: 4000
        }}
        navigation
        grabCursor
        spaceBetween={0}
      >
        {movieList && (
          <div>
            {movieList?.map((movie, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => <HeroItem key={movie.id} movie={movie} isActive={isActive && isActive} />}
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </div>
  )
}
