'use client'

import { FC } from 'react'
import { toast } from 'react-toastify'

import { MoviesContainer } from '../sidebar/moviesContainer/moviesContainer'
import Toast from '../ui/toast/toast'

import { Search } from './search/search'
import styles from './sidebar.module.scss'
import QueryProvider from '@/providers/QueryProvider'
import MainProvider from '@/providers/StoreProvider'

export const Sidebar: FC = () => {
	const notify = () => toast('Wow so easy!')
	return (
		<div className={styles.sidebar}>
			<QueryProvider>
				<Search />
				<MoviesContainer />
			</QueryProvider>
			<MainProvider>
				<Toast />
				<button className="btn-primary" onClick={notify}>
					Click
				</button>
			</MainProvider>
		</div>
	)
}
