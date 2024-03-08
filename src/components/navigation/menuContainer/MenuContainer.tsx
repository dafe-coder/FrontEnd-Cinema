import { FC } from 'react'

import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'
import QueryProvider from '@/providers/QueryProvider'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<QueryProvider>
				<GenreMenu />
			</QueryProvider>
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
