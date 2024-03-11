'use client'

import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './logoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()
	return (
		<>
			{user ? (
				<>
					<MenuItem icon="MdSettings" link="/profile" text="Profile" />
					<LogoutButton />
				</>
			) : (
				<MenuItem icon="MdLogin" link="/auth" text="Login" />
			)}
			{user?.isAdmin && (
				<MenuItem
					icon="MdOutlineLock"
					text="Admin panel"
					link={getAdminHomeUrl()}
				/>
			)}
		</>
	)
}

export default AuthItems
