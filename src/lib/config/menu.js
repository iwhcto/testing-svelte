import Home from '$lib/components/icons/Home.svelte';
import Reviews from '$lib/components/icons/Reviews.svelte';
import Contacts from '$lib/components/icons/Contacts.svelte';
import Messages from '$lib/components/icons/Messages.svelte';
import Profile from '$lib/components/icons/Profile.svelte';

export const menuConfiguration = {
	screens: [
		//Auth
		{
			icon: null,
			title: null,
			path: '/',
			buttons: [],
			render: false
		},
		{
			icon: null,
			title: 'Login',
			path: '/auth/login',
			buttons: ['back'],
			render: false
		},
		{
			icon: null,
			title: 'Create new account',
			path: '/auth/signup',
			buttons: ['back'],
			render: false
		},
		{
			icon: null,
			title: 'Reset password',
			path: '/auth/forgot',
			buttons: ['back'],
			render: false
		},
		//End Auth
		{
			icon: Home,
			title: 'Feed',
			path: '/posts',
			buttons: ['camera', 'newPost']
		},
		{
			icon: Reviews,
			title: 'Reviews',
			path: '/reviews',
			buttons: []
		},
		{
			icon: Contacts,
			title: 'Contacts',
			path: '/contacts',
			buttons: [],
			searchBar: true
		},
		{
			icon: Messages,
			title: 'Messages',
			path: '/messages',
			buttons: []
		},
		{
			icon: Profile,
			title: 'Profile',
			path: '/profile',
			buttons: [],
			sub: [
				{
					title: 'Settings',
					path: '/profile/my-profile',
					buttons: ['back'],
					render: false
				},
				{
					title: 'Account Details',
					path: '/profile/my-profile/account',
					buttons: ['back'],
					render: true
				},
				{
					title: 'Settings',
					path: '/profile/my-profile/settings',
					buttons: ['back'],
					render: true
				},
				{
					title: 'Contact Us',
					path: '/profile/my-profile/contact-us',
					buttons: ['back'],
					render: true
				},
				{
					title: 'Blocked Contacts',
					path: '/profile/my-profile/blocked-contacts',
					buttons: ['back'],
					render: true
				}
			]
		}
	]
};
