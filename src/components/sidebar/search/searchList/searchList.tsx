import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './searchList.module.scss'

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((m) => (
					<Link key={m._id} href={getMovieUrl(m.slug)}>
						<Image
							src={m.poster}
							width={50}
							height={50}
							alt={m.title}
							objectFit="cover"
							objectPosition="top"
							draggable={false}
						/>
						<span>{m.title}</span>
					</Link>
				))
			) : (
				<div className="text-white center my-4">Movies not found!</div>
			)}
		</div>
	)
}
