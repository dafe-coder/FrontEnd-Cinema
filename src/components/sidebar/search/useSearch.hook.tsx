import React, { ChangeEvent } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = React.useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['query movie list', debounceSearch],
		() => MovieService.getAll(debounceSearch),
		{
			select: ({ data }) => data,
			enabled: !!debounceSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, data, handleSearch, searchTerm }
}
