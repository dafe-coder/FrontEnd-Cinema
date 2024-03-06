import { ChangeEvent, FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './searchField.module.scss'

export interface ISearchField {
	searchTerm: string
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<ISearchField> = ({ searchTerm, handleChange }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				type="search"
				placeholder="Search"
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	)
}
