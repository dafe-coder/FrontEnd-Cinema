import { TypeMaterialIconName } from '../../../../types/icon.types'

export interface IMenuItem {
	icon: TypeMaterialIconName
	text: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
