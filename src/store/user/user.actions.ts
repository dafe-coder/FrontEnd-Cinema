import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { toastError } from '@/utils/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/api/helpers'
import { AuthService } from '@/services/auth/auth.service'

// Register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toast.success('Registration successfully!')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

// Login

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toast.success('Login successfully!')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

// Logout

export const logout = createAsyncThunk('auth/logout', () => {
	AuthService.logout()
})

// Check auth
export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastError('Your authorization is finished, plz sign in again!')
				thunkApi.dispatch(logout)
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
