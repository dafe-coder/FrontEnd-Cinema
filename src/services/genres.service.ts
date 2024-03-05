import { axiosClassic } from '../api/interceptors'
import { getGenresUrl } from '../config/api.config'
import { IGenre } from '../types/movie.types'

export const GenresService = {
	async getAll(searchTerm?: string) {
		const data = await axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})

		return data
	},
}
