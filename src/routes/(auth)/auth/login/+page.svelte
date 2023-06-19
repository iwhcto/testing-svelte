<script>
	import { List, ListInput, Link, Button } from 'konsta/svelte';
</script>

<div class="flex flex-col pt-4">
	<List strongIos insetIos>
		<ListInput type="text" placeholder="E-Mail" inputClass="inputRounded mb-5" />
		<ListInput type="password" placeholder="Password" inputClass="inputRounded" />
		<Link href="/auth/forgot" class="float-right mt-4 pr-5">Forgot password?</Link>
	</List>
	<List strongIos insetIos>
		<Button
			href="/auth/login"
			class="py-5 mx-auto my-4 w-5/6"
			rounded
			colors={{ fillBgIos: 'bg-secondary' }}>Log In</Button
		>
	</List>
	<Link href="/auth/signup">Don't have an account?</Link>
</div>
