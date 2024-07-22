import { MovieSlide } from 'src/components'
import { HeroSlide } from 'src/components/Hero'

export const Home = () => {
  return (
    <div className='text-white'>
      <HeroSlide />
      <div className='container-fluid'>
        <MovieSlide title='Trending Movie' type='popular' category='movie' />
      </div>
    </div>
  )
}
