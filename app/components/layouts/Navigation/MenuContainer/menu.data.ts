import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'menu',
	items: [
		{
			text: 'Home',
			icon: 'MdHome',
			link: '/',
		},
		{
			text: 'Discovery',
			icon: 'MdExplore',
			link: '/genres',
		},
		{
			text: 'Fresh movies',
			icon: 'MdRefresh',
			link: '/fresh',
		},
		{
			text: 'Trending now',
			icon: 'MdLocalFireDepartment',
			link: '/trending',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [
		// { text: 'Login', icon: 'MdLogin', link: '/login' }
	],
}
