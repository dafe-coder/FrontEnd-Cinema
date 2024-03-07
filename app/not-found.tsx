import { Metadata } from 'next'

import { Heading } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Page Not Found',
}

const Error = () => {
	return <Heading title="Page Not Found - 404" />
}

export default Error
