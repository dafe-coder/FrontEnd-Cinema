import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				draggable={false}
				src={logoImage}
				height={34}
				width={247}
				alt="Online Cinema"
			/>
		</Link>
	)
}

export default Logo
