import { FC, PropsWithChildren } from 'react'

import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import styles from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.main}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
