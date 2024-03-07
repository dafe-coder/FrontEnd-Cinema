import Link from 'next/link'
import { FC } from 'react'

import { MovieItem } from './movieItem'
import { IMovieList } from './movieList.interface'
import styles from './moviesList.module.scss'

export const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.length ? (
				movies.map((m) => <MovieItem key={m._id} movie={m} />)
			) : (
				<></>
			)}
			<Link href={link} className={styles.btn}>
				See more
			</Link>
		</div>
	)
}
