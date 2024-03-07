import { FC } from 'react'

import { FavoriteMovies } from './favoriteMovies/favoriteMovies'
import { PopularMovies } from './popularMovies'

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}
