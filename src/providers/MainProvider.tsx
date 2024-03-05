'use client'

import { FC, PropsWithChildren } from 'react'
import React from 'react'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'

import Layout from '../components/layouts/Layout'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient, _] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	)
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children} </Layout>
		</QueryClientProvider>
	)
}
export default MainProvider