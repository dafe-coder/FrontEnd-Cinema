import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import AuthItems from './auth/authItems'
import { IMenu } from './menu.interface'

interface MenuProps {
	menu: IMenu
}

const Menu: FC<MenuProps> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul>
				{items?.length > 0
					? items.map((itemMenu) => (
							<MenuItem key={itemMenu.link} {...itemMenu} />
						))
					: null}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
