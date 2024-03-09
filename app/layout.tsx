import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { HeadProgressBar } from '@/components/ui/headProgressBar1/headProgressBar'

import { Navigation, Sidebar } from '../src/components'

import Favicons from './favicon'
import './globals.scss'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Watch movies online',
	description: 'Watch MovieApp and TV shows online',
}

export const viewport: Viewport = {
	themeColor: '#181B1e',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Head>
				<Favicons />
			</Head>
			<body className={inter.className}>
				<HeadProgressBar />

				<div className={styles.layout}>
					<Navigation />
					<div className={styles.main}>{children}</div>
					<Sidebar />
				</div>
			</body>
		</html>
	)
}
