'use client'

import React, { FC } from 'react'

import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11">
			<SkeletonLoader count={3} className="h-7 mb-6" />
		</div>
	) : (
		<Menu menu={{ items: data || [], title: 'Popular Movie Genres' }} />
	)
}
export default GenreMenu
