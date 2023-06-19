<script>
	import { PUBLIC_IMAGE_PATH } from '$env/static/public';
	export let user;
</script>

{#if user.profile_image}
	<img
		src={`${PUBLIC_IMAGE_PATH}/${user.profile_image.path}`}
		class="border rounded-full w-14"
		alt=""
	/>
{:else}
	<img src="/user.jpg" class="border rounded-full w-14" alt="" />
{/if}
