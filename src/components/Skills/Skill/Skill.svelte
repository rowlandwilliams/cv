<script lang="ts">
	export let skill: { language: string; libraries: string[] };
	$: ({ language, libraries } = skill);
	console.log(skill);
</script>

<section>
	<h1 class="mb-1">{language}</h1>
	<div class="flex gap-x-2">
		{#each libraries as library}
			<p class="border px-2 rounded-sm border-indigo-500 text-indigo-500">{library}</p>{/each}
	</div>
</section>
