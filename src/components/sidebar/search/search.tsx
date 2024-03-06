'use client'

import { FC } from 'react'

import { SearchField } from '@/components/ui'

import styles from './search.module.scss'
import { SearchList } from './searchList/searchList'
import { useSearch } from './useSearch.hook'

export const Search: FC = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleChange={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}
