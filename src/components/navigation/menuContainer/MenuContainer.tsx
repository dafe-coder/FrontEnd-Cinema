import { FC } from 'react'

import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'
import QueryProvider from '@/providers/QueryProvider'
import StoreProvider from '@/providers/StoreProvider'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<QueryProvider>
				<GenreMenu />
			</QueryProvider>
			<StoreProvider>
				<Menu menu={userMenu} />
			</StoreProvider>
		</div>
	)
}

export default MenuContainer
