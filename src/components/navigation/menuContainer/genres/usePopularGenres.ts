import { useQuery } from 'react-query'

import { getGenreUrl } from '../../../../config/url.config'
import { GenresService } from '../../../../services/genres.service'
import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const { isLoading, data } = useQuery(
		'popular genre menu',
		() => GenresService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								text: genre.name,
							}) as IMenuItem
					)
					.splice(0, 4),
		}
	)

	return { isLoading, data }
}
