'use client'

import Layout from '../src/components/layouts/Layout'
import Home from '../src/components/screens/home/Home'
import MainProvider from '../src/providers/MainProvider'

export default function HomePage() {
	return (
		<MainProvider>
			<Layout>
				<Home />
			</Layout>
		</MainProvider>
	)
}
