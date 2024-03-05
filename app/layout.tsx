import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navigation, Sidebar } from '../src/components'

import './globals.scss'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Watch movies online',
	description: 'Watch MovieApp and TV shows online',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={styles.layout}>
					<Navigation />
					<div className={styles.main}>{children}</div>
					<Sidebar />
				</div>
			</body>
		</html>
	)
}
