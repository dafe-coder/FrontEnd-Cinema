'use client'

import { FC } from 'react'
import { useQuery } from 'react-query'

import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

import { MovieList } from './movieList'
import { MovieService } from '@/services/movie.service'

export const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	)

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular Movies"
		/>
	)
}
