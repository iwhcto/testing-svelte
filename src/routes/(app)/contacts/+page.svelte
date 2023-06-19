<script>
	import { List, BlockTitle } from 'konsta/svelte';
	import ContactRow from '$lib/components/ContactRow.svelte';

	export let data;

	let { users } = data;
</script>

<BlockTitle>Your contacts</BlockTitle>
<List strongIos>
	{#each users as user}
		<ContactRow {user} />
	{/each}
</List>
