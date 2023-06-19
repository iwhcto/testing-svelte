import { readable, writable } from 'svelte/store';

export const headerButtons = new writable([]);

export const currentScreen = new writable('Feed');

export const sharingUrl = new writable(false);
export const toastContent = new writable(false);

export const searchBar = new writable(false);
export const searchInput = new writable('');

export const toast = (() => {
	// Usage: toast.show('demo', false);

	const show = (toastText, autohide = 2000) => {
		toastContent.update((t) => toastText);
		if (autohide) {
			setTimeout(() => {
				hide();
			}, autohide);
		}
	};

	const hide = () => {
		toastContent.update(() => false);
	};

	return { show };
})();
