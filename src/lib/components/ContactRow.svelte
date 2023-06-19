<script>
	import { Block, Button, ListInput, List, BlockTitle } from 'konsta/svelte';
	export let user;
</script>

<div class="flex flex-row py-1 px-3">
	<img src="/user.jpg" class="border rounded-full w-14" alt="" />
	<div class="ml-2 my-auto font-bold">{user.full_name}</div>
	<div class="my-auto ml-auto">
		<Button rounded outline>Connect</Button>
	</div>
</div>
