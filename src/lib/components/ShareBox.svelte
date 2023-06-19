<script>
	import { Actions, ActionsGroup, ActionsButton, ActionsLabel } from 'konsta/svelte';
	import { sharingUrl, toastContent } from '$lib/stores/global';

	let share = (via) => {
		switch (via) {
			case 'whatsapp':
				window.location.href = `whatsapp://send?text=${$sharingUrl}`;
				break;
			case 'sms':
				window.location.href = `sms:&body=${$sharingUrl}`;
				break;
			case 'telegram':
				window.location.href = `tg://msg?text=${$sharingUrl}`;
				break;
			case 'open':
				window.location.href = $sharingUrl + '?inapp=true';
				break;
			case 'copy':
				navigator.clipboard
					.writeText($sharingUrl)
					.then(function () {
						toastContent.update((t) => (t = 'Link copiato negli appunti'));
					})
					.then(() => {
						setTimeout(() => {
							toastContent.update(() => false);
						}, 3000);
					})
					.catch((err) => {
						alert(err);
					});
				break;
		}
		sharingUrl.update((s) => (s = false));
	};
</script>

<Actions opened={$sharingUrl} onBackdropClick={() => sharingUrl.update(() => false)}>
	<ActionsGroup>
		<ActionsLabel>Condividi tramite</ActionsLabel>
		<ActionsButton
			colors={{ textMaterial: 'text-green-600' }}
			bold
			onClick={() => share('whatsapp')}>WhatsApp</ActionsButton
		>
		<ActionsButton bold colors={{ textMaterial: 'text-blue-500' }} onClick={() => share('telegram')}
			>Telegram</ActionsButton
		>
		<ActionsButton bold onClick={() => share('sms')}>SMS</ActionsButton>
		<ActionsButton bold onClick={() => share('open')}>Apri</ActionsButton>
		<!-- <ActionsButton onClick={() => share('copy')}>Copia Link</ActionsButton> -->
		<ActionsButton
			dividers
			colors={{ textMaterial: 'text-gray-500' }}
			onClick={() => ($sharingUrl = false)}>Annulla</ActionsButton
		>
	</ActionsGroup>
</Actions>
