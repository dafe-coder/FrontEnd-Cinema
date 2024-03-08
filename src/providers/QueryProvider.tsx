'use client'

import { FC, PropsWithChildren } from 'react'
import React from 'react'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'

const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
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
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
export default QueryProvider
