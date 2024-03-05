import { FC } from 'react'

import { Heading } from '@/components/ui/'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Heading
			title="Watch movies online"
			className="text-gray-300 mb-8 text-xl"
		/>
	)
}

export default Home
