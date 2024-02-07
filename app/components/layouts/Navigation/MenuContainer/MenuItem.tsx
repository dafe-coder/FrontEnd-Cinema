'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<IMenuItem> = ({ text, icon, link }) => {
	const pathname = usePathname()

	return (
		<li
			className={cn({
				[styles.active]: pathname === link,
			})}
		>
			<Link href={link}>
				<MaterialIcon name={icon} />
				<span>{text}</span>
			</Link>
		</li>
	)
}

export default MenuItem
