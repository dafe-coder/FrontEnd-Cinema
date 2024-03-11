'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/ui/formElements/button'
import { Heading } from '@/ui/heading/heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { AuthFields } from '../../ui/formElements/authFields'

// import { useAuthRedirect } from '../../../hooks/useAuthRedirect'
import { IAuthInput } from './auth.interface'
import styles from './auth.module.scss'

export const Auth: FC = () => {
	// useAuthRedirect()
	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')
	const { register, login } = useActions()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<section className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading title="Auth" className="mb-6" />
				<AuthFields register={registerInput} formState={formState} />
				<div className={styles.buttons}>
					<Button type="submit" onClick={() => setType('login')}>
						Login
					</Button>
					<Button
						type="submit"
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</Button>
				</div>
			</form>
		</section>
	)
}
