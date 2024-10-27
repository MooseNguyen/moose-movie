import { Link } from 'react-router-dom'
import { Button } from 'src/components/Button'
import { MovieList } from '../MovieList'
import { MovieCategory, AllType } from 'src/types/movie.type'

interface IMovieSlideProps {
  title: string
  type: AllType
  category: MovieCategory
}

export const MovieSlide = ({ title, type, category }: IMovieSlideProps) => {
  return (
    <section className='mt-12 block'>
      <div className='flex items-center mb-8'>
        <h3 className='text-xl font-bold tracking-wider uppercase text-white'>{title}</h3>
      </div>
      <MovieList type={type} category={category} />
      <Button className='w-full text-right mt-4 px-4'>
        <Link to='/' className='flex items-center justify-end hover:text-mainOrange duration-main'>
          <span>More like this</span>
          <svg
            className='h-4 ml-2'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </Link>
      </Button>
    </section>
  )
}
