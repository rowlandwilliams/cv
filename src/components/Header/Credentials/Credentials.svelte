<script lang="ts">
	const credentials = [
		{ icon: 'website', credential: 'rowlandwilliams.me' },
		{ icon: 'email', credential: 'rowland.williams.94@gmail.com' },
		{ icon: 'location', credential: 'UK' }
	];
</script>

<div class="flex flex-col gap-y-0.5 rounded-sm p-2 text-xs">
	{#each credentials as { icon, credential }}
		<div class="flex items-center gap-x-2">
			<div class="w-3 text-indigo-400"><img src={`/credentials/${icon}.svg`} alt={icon} /></div>
			<p class="text-gray-500">{credential}</p>
		</div>
	{/each}
</div>
