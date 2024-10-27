import { Link } from 'react-router-dom'
import { IMovieData, MovieCategory } from 'src/types/movie.type'
import { smallImage } from 'src/utils/utils'

interface IMovieItemProps {
  movie: IMovieData
  category: MovieCategory
}

export const MovieItem = ({ movie, category }: IMovieItemProps) => {
  const { poster_path, backdrop_path, id, title, original_name } = movie

  const itemImage = smallImage(poster_path ? poster_path : backdrop_path)

  const movieDetail = `/${category}/${id}`

  return (
    <Link to={movieDetail}>
      <div className='relative overflow-hidden rounded-main min-h-96 shadow-none'>
        <img
          src={itemImage}
          alt='movie img'
          loading='lazy'
          className='min-w-full min-h-full object-cover top-[50%] left-[50%] absolute -translate-y-1/2 -translate-x-1/2'
        />
        {/* <button>
          <i className='bx bx-play-circle'></i>
        </button> */}
      </div>
      <h4 className='text-white mt-4 text-center'>{title || original_name}</h4>
    </Link>
  )
}
