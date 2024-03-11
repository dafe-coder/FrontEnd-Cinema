import { NextPage } from 'next'

import { Auth } from '@/components/screens/auth/auth'

import MainProvider from '@/providers/StoreProvider'

const AuthPage: NextPage = () => {
	return (
		<MainProvider>
			<Auth />
		</MainProvider>
	)
}

export default AuthPage
