import classNames from 'classnames'
import { Button } from 'src/components/Button'
import { Movie } from 'src/types/movie.type'
import { largeImage, smallImage } from 'src/utils/utils'

interface Props {
  movie: Movie
  isActive: boolean
}

export const HeroItem = ({ movie, isActive }: Props) => {
  const { backdrop_path, poster_path, title, vote_average, overview } = movie

  const backdrop = largeImage(backdrop_path ? backdrop_path : poster_path)
  const poster = smallImage(poster_path)

  const heroInvisible = (addtionClassname: string, isActive: boolean) => {
    return classNames(addtionClassname, {
      'hero-visible': isActive,
      'hero-invisible': !isActive
    })
  }

  return (
    <div
      className='flex items-center justify-center px-24 w-screen h-[100vh] bg-no-repeat bg-center bg-cover relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-black after:to-transparent'
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className='container w-[1200px] flex justify-center items-center mt-20 relative'>
        <img
          src={poster}
          alt='poster'
          className={classNames('w-72 h-full rounded-main shadow-poster duration-700', {
            'scale-0': !isActive,
            'scale-100': isActive
          })}
        />
        <div className='ml-20'>
          <h2 className={heroInvisible('text-5xl font-bold mb-10 delay-500', isActive)}>
            {title}
            <span className='text-xl font-bold ml-5'>{vote_average}⭐️</span>
          </h2>
          <p className={heroInvisible('text-lg text-justify delay-700', isActive)}>{overview}</p>
          <div className={heroInvisible('mt-10 delay-[1000ms]', isActive)}>
            <Button className='mr-10 button-hero hover:button-hero-hover'>Watch</Button>
            <Button className='button-hero hover:button-hero-hover'>Trailer</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
