'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

import { siteName, titleMerge } from '../../config/seo.config'
import { onlyText } from '../string/clearText'

import { ISeo } from './meta.interface'
import logoImage from '@/assets/images/logo.svg'

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	poster,
	children,
}) => {
	const pathName = usePathname()
	const currentUrl = `${process.env.APP_URL}${pathName}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={poster || logoImage} />
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}
export default Meta
