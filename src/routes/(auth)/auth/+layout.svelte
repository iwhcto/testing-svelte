<script>
	import '$lib/style/app.css';
	import { App, Page, Navbar, NavbarBackLink } from 'konsta/svelte';
	import { menuConfiguration } from '$lib/stores/menu';
</script>

<App safeAreas theme="ios">
	<Page colors={{ bgIos: 'bg-white' }}>
		<Navbar
			centerTitle={true}
			colors={{ bgIos: 'bg-white', textIos: 'text-secondary' }}
			title={$menuConfiguration.title ?? '-'}
			medium={true}
			outline={false}
			class="top-0 sticky"
			translucent={true}
		>
			{#if $menuConfiguration.buttons.includes('back')}
				<NavbarBackLink text="" class="text-secondary mr-auto" onClick={() => history.back()} />
			{/if}
		</Navbar>
		<div class="my-2">
			header title should be: {$menuConfiguration.title}
		</div>
		<slot />
	</Page>
</App>
