import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

import { axiosClassic } from '@/api/interceptors'

export const GenresService = {
	async getAll(searchTerm?: string) {
		const data = await axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})

		return data
	},
}
