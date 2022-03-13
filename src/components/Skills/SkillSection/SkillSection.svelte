<script lang="ts">
	export let skill: { language: string; libraries: string[] };
	$: ({ language, libraries } = skill);
</script>

<section>
	<h1 class="mb-1">{language}</h1>
	<div class="grid grid-cols-3 gap-1">
		{#each libraries as library}
			<p class="rounded-sm border text-center  text-2xs text-gray-500">
				{library}
			</p>{/each}
	</div>
</section>
