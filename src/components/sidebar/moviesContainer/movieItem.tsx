import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import styles from './moviesList.module.scss'

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link className={styles.imgLink} href={getMovieUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					src={movie.poster}
					draggable={false}
					alt={movie.title}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((g, i) => (
						<Link href={getGenreUrl(g.slug)} key={g._id}>
							{getGenresList(i, movie.genres.length, g.name)}
						</Link>
					))}
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating?.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
