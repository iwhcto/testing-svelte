import { derived } from 'svelte/store';
import { page } from '$app/stores';

const path_map = new Map([
	[
		'/',
		{
			icon: null,
			title: null,
			buttons: [],
			render: false
		}
	],
	[
		'/auth/login',
		{
			icon: null,
			title: 'Login',
			buttons: ['back'],
			render: false
		}
	],
	[
		'/auth/signup',
		{
			icon: null,
			title: 'Create an account',
			buttons: ['back'],
			render: false
		}
	],
	[
		'/auth/forgot',
		{
			icon: null,
			title: 'Reset your password',
			buttons: ['back'],
			render: false
		}
	]
]);

export const menuConfiguration = derived(page, ($page) => {
	return path_map.get($page.url.pathname);
});
