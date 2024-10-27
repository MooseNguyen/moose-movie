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
      <Button className='w-full text-right mt-8 px-4'>
        <Link to='/'>More like this</Link>
      </Button>
    </section>
  )
}
