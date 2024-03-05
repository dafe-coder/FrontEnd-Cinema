import { FC } from 'react'

import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'
import MainProvider from '@/providers/MainProvider'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<MainProvider>
				<GenreMenu />
			</MainProvider>
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
