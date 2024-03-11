import { useTypedSelector } from './useTypedSelected'

export const useAuth = () => useTypedSelector((state) => state.user)
