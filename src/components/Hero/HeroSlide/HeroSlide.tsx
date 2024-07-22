import { useQuery } from '@tanstack/react-query'
import movieApi from 'src/api/movie.api'
import { movieType } from 'src/constants/movie'
import { MovieParams, MovieType } from 'src/types/movie.type'
import { HeroItem } from '../HeroItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export const HeroSlide = () => {
  const queryConfig: MovieParams = { page: 1 }
  const { data: moviesHeroData } = useQuery({
    queryKey: ['movies', queryConfig],
    queryFn: () => {
      return movieApi.getMovies(movieType.popular as MovieType, queryConfig)
    }
  })

  const movieList = moviesHeroData?.data.results.slice(0, 5)

  return (
    <div className='w-full h-full'>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect='fade'
        autoplay={{
          delay: 4000
        }}
        navigation={true}
        grabCursor={true}
        spaceBetween={0}
      >
        {moviesHeroData && (
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
