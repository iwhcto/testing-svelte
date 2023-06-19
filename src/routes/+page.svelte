<script>
	import '$lib/style/app.css';
	import { App, Page, Button } from 'konsta/svelte';
</script>

<App safeAreas theme="ios">
	<Page class="mx-auto flex flex-col justify-center" colors={{ bgIos: 'bg-white' }}>
		<img class="w-40 mx-auto -mt-20 mb-4" src="/images/logo-transparent.png" alt="" />
		<h2 class="text-2xl font-bold text-center text-secondary">Welcome to MyApp</h2>
		<p class="my-3 text-center text-primary">Lorem ipsum</p>
		<div class="px-5">
			<Button href="/auth/login" class="py-5 my-4" rounded colors={{ fillBgIos: 'bg-secondary' }}
				>Log In</Button
			>
			<Button
				href="/auth/signup"
				class="py-5"
				rounded
				outline
				colors={{ textIos: 'text-secondary', outlineBorderIos: 'border-secondary' }}>Sign Up</Button
			>
		</div>
	</Page>
</App>
