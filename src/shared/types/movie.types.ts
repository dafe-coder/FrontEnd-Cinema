import { TypeMaterialIconName } from './icon.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	name: string
	slug: string
	photo: string
	countMovies: number
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	slug: string
	rating?: number
	countOpened?: number
	parameters?: IParameters
	videoUrl: string
	genres: IGenre[]
	actors: IActor[]
	isSendTelegram?: boolean
}
