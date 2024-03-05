import { FC } from 'react'

import Logo from './Logo'
import MenuContainer from './menuContainer/MenuContainer'
import styles from './navigation.module.scss'

export const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}
