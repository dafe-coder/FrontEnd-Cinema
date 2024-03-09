import NextTopLoader from 'nextjs-toploader'
import { FC } from 'react'

import { accentColor } from '@/config/constants'

export const HeadProgressBar: FC = () => {
	return (
		<NextTopLoader
			color={accentColor}
			initialPosition={0.08}
			crawlSpeed={200}
			height={3}
			crawl={true}
			showSpinner={true}
			easing="ease"
			speed={200}
			shadow={`0 0 10px ${accentColor},0 0 5px ${accentColor}`}
			template='<div class="bar" role="bar"><div class="peg"></div></div>'
			zIndex={1600}
			showAtBottom={false}
		/>
	)
}
