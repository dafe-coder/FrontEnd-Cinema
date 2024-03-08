import { FC, PropsWithChildren } from 'react'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/store/store'

const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}
export default QueryProvider
