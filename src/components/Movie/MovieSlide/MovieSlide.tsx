import { Link } from 'react-router-dom'
import { Button } from 'src/components/Button'
import { MovieList } from '../MovieList'

interface Props {
  title: string
  type: string
  category: string
}

export const MovieSlide = ({ title, type, category }: Props) => {
  return (
    <section className='mt-12 block'>
      <div className='flex items-center justify-between mb-8'>
        <h3 className='text-lg font-bold tracking-wider uppercase text-white'>{title}</h3>
        <Button>
          <Link to='/'>More Movie</Link>
        </Button>
      </div>
      <MovieList type={type} category={category} />
    </section>
  )
}
