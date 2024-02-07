'use client'

import Layout from './components/layouts/Layout'
import Home from './components/screens/home/Home'
import MainProvider from './providers/MainProvider'

export default function HomePage() {
	return (
		<MainProvider>
			<Layout>
				<Home />
			</Layout>
		</MainProvider>
	)
}
