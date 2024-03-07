import { FC } from 'react'

import { MoviesContainer } from '../sidebar/moviesContainer/moviesContainer'

import { Search } from './search/search'
import styles from './sidebar.module.scss'
import MainProvider from '@/providers/MainProvider'

export const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<MainProvider>
				<Search />
				<MoviesContainer />
			</MainProvider>
		</div>
	)
}
