'use client'

import { useRouter } from 'next/router'
import React from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()

	const redirect = String(query.redirect) || '/'

	React.useEffect(() => {
		if (user) push(redirect)
	}, [redirect, push, user])
}
