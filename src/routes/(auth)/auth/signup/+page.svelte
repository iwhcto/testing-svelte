<script>
	import { Block, List, Button } from 'konsta/svelte';

	let form = {
		type: null,
		contractorType: null,
		name: null,
		last_name: null,
		email: null,
		phone: null,
		address: null
	};

	let accountsType = [
		{ type: 'personal', name: 'Personal' },
		{ type: 'contractor', name: 'Contractor' },
		{ type: 'property-owner', name: 'Property Owner' },
		{ type: 'property-manager', name: 'Property Manager' }
	];

	let contractorsType = [
		{ type: 'general', name: 'General' },
		{ type: 'plumbing', name: 'Plumbing' },
		{ type: 'electrical', name: 'Electrical' },
		{ type: 'landscape', name: 'Landscape' }
	];

	function handleSubmit() {
		alert(`answered question ${form.type}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<Block strongIos insetIos>
		<div class="mb-3">
			<label for="type" class="mb-2 block text-gray-400">Account Type</label>
			<select class="input" name="" bind:value={form.type} id="type">
				<option value={null} disabled selected>Select Account Type</option>
				{#each accountsType as type}
					<option value={type.type}>{type.name}</option>
				{/each}
			</select>
		</div>

		{#if form.type === 'contractor'}
			<div class="mb-3">
				<label for="contractorType" class="mb-2 block text-gray-400">Contractor Type</label>
				<select class="input" name="" bind:value={form.contractorType} id="contractorType">
					<option value={null} disabled selected>Select Contractor Type</option>
					{#each contractorsType as type}
						<option value={type.type}>{type.name}</option>
					{/each}
				</select>
			</div>
		{/if}

		<div class="mb-3">
			<label for="name" class="mb-2 block text-gray-400">Name</label>
			<input type="text" class="input" placeholder="Name" id="name" bind:value={form.name} />
		</div>

		<div class="mb-3">
			<label for="last_name" class="mb-2 block text-gray-400">Last name</label>
			<input
				type="text"
				class="input"
				placeholder="Last name"
				id="last_name"
				bind:value={form.last_name}
			/>
		</div>

		<div class="mb-3">
			<label for="email" class="mb-2 block text-gray-400">E-Mail</label>
			<input type="email" class="input" placeholder="E-Mail" id="email" bind:value={form.email} />
		</div>

		<div class="mb-3">
			<label for="phone" class="mb-2 block text-gray-400">Phone</label>
			<input type="tel" class="input" placeholder="Phone" id="phone" bind:value={form.phone} />
		</div>

		{#if form.type === 'contractor'}
			<div class="mb-3">
				<label for="address" class="mb-2 block text-gray-400">Address</label>
				<input
					type="tel"
					class="input"
					placeholder="Address"
					id="address"
					bind:value={form.address}
				/>
			</div>
		{/if}

		<!-- <pre style="overflow: auto;">
            {JSON.stringify(form)}
        </pre> -->

		<Button class="mt-10 py-5 mx-auto my-4 w-5/6" rounded colors={{ fillBgIos: 'bg-secondary' }}
			>SIGN UP</Button
		>
	</Block>
</form>
