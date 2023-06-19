<script>
	import '$lib/style/app.css';
	import {
		App,
		NavbarBackLink,
		Navbar,
		Link,
		List,
		ListInput,
		Page,
		Block,
		Toast,
		Icon,
		Button
	} from 'konsta/svelte';
	import { menuConfiguration } from '$lib/config/menu';

	import { page } from '$app/stores';
	import {
		toastContent,
		searchInput,
		searchBar,
		currentScreen,
		headerButtons
	} from '$lib/stores/global';

	import Search from '$lib/components/icons/Search.svelte';
	import ShareBox from '$lib/components/ShareBox.svelte';
	import Clear from '$lib/components/icons/Clear.svelte';
	import Camera from '$lib/components/icons/Camera.svelte';
	import NewPost from '$lib/components/icons/NewPost.svelte';
	import { beforeUpdate } from 'svelte';

	beforeUpdate(() => {
		//Keep track of App header title and buttons state
		let currentItem;
		menuConfiguration.screens.forEach((screen) => {
			if (screen.path === $page.url.pathname) {
				currentItem = screen;
			} else if (screen.sub) {
				screen.sub.forEach((subItem) => {
					if (subItem.path === $page.url.pathname) {
						currentItem = subItem;
					}
				});
			}
		});

		console.log(currentItem.title);
		// setTimeout(() => {disc
		currentScreen.update(() => currentItem.title);
		headerButtons.update(() => currentItem.buttons);
		searchBar.update(() => currentItem.searchBar || false);
		// }, 40);
	});
</script>

<App safeAreas theme="ios">
	<Page>
		<Navbar
			centerTitle={true}
			colors={{ bgIos: 'bg-secondary', textIos: 'text-white' }}
			title={$currentScreen}
			medium={true}
			subtitle="C-Square"
			class="top-0 sticky"
			translucent={false}
		>
			{#if $headerButtons.includes('camera')}
				<!-- Camera -->
				<Link class="mr-auto" navbar>
					<Icon>
						<Camera class="w-8 h-8 text-white" />
					</Icon>
				</Link>
			{:else}
				<!-- Back -->
				<NavbarBackLink
					text="Back"
					class="{$headerButtons.includes('back') ? '' : 'hidden'} text-white mr-auto"
					onClick={() => history.back()}
				/>
			{/if}

			{#if $headerButtons.includes('newPost')}
				<Link class="ml-auto" navbar>
					<Icon>
						<NewPost class="w-8 h-8 text-white" />
					</Icon>
				</Link>
			{/if}

			<!-- Right -->
			<div
				slot="right"
				class={$headerButtons.includes('save') || $headerButtons.includes('search') ? '' : 'hidden'}
			>
				{#if $headerButtons.includes('save')}
					<Link navbar onClick={() => alert('Save todo')} class="my-auto text-white">Save</Link>
				{/if}
				{#if $headerButtons.includes('search')}
					<Link navbar onClick={() => searchBar.update((o) => !o)}>
						<Icon>
							<Search class="w-8 h-8 text-white" />
						</Icon>
					</Link>
				{/if}
			</div>
		</Navbar>
		{#if $searchBar}
			<List strongIos class="mt-0">
				<ListInput
					type="search"
					bind:value={$searchInput}
					class="rounded w-full text-gray-700 py-1"
					clearButton={$searchInput.length}
					placeholder="Search..."
				/>
				{$searchInput}
				{#if $searchInput.length}
					<Link slot="right" navbar onClick={() => searchInput.update(() => '')}>
						<Icon>
							<Clear slot="ios" class="text-gray-500 w-6 h-6" />
						</Icon>
					</Link>
				{/if}
			</List>
		{/if}
		<slot />

		<ShareBox />
	</Page>

	<!-- Toast -->
	<Toast opened={$toastContent} class="sticky top-0">
		<Button
			slot="button"
			colors={{ textIos: 'text-white' }}
			clear
			onClick={() => toastContent.update(() => false)}>Close</Button
		>
		<div class="shrink text-white">{$toastContent != false ? $toastContent : ''}</div>
	</Toast>
</App>
