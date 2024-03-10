import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '@/shared/regex'

import { Field } from './field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

export const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = true,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: { value: validEmail, message: 'Invalid email!' },
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 4,
									message: 'Minimum length should be 4 characters!',
								},
							}
						: {}
				)}
				type="password"
				placeholder="Password"
				error={errors.password}
			/>
		</>
	)
}
