import { TypeMaterialIconName } from './icon.types'

export interface IGenre {
	_id: number
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}
