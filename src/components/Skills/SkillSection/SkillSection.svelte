<script lang="ts">
	export let skill: { language: string; libraries: string[] };
	$: ({ language, libraries } = skill);
</script>

<section>
	<h1 class="mb-1">{language}</h1>
	<div class="grid grid-cols-2 gap-1">
		{#each libraries as library}
			<p class="rounded-sm border border-indigo-500  text-center">
				{library}
			</p>{/each}
	</div>
</section>
