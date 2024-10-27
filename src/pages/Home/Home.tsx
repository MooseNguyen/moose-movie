import { MovieSlide } from 'src/components'
import { HeroSlide } from 'src/components/Hero'
import { MOVIE_CATEGORY, MOVIE_TYPE, TV_TYPE } from 'src/constants/movie'

export const Home = () => {
  return (
    <div className='text-white'>
      <HeroSlide />
      <div className='container-fluid'>
        <MovieSlide title='Trending Movie' type={MOVIE_TYPE.POPULAR} category={MOVIE_CATEGORY.MOVIE} />
        <MovieSlide title='Top Movie' type={MOVIE_TYPE.TOP_RATED} category={MOVIE_CATEGORY.MOVIE} />
        <MovieSlide title='Upcoming Movie' type={MOVIE_TYPE.UPCOMING} category={MOVIE_CATEGORY.MOVIE} />
        <MovieSlide title='Trending Series' type={TV_TYPE.POPULAR} category={MOVIE_CATEGORY.TV} />
        <MovieSlide title='Top TV Series' type={TV_TYPE.TOP_RATED} category={MOVIE_CATEGORY.TV} />
        <MovieSlide title='On Air Series' type={TV_TYPE.ON_THE_AIR} category={MOVIE_CATEGORY.TV} />
      </div>
    </div>
  )
}
