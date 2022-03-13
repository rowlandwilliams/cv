<script lang="ts">
	import SkillSection from './SkillSection/SkillSection.svelte';

	const skills: { language: string; libraries: string[] }[] = [
		{
			language: 'JavaScript',
			libraries: ['React', 'TypeScript', 'd3.js', 'deck.gl', 'Apollo', 'Redux']
		},
		{ language: 'Design', libraries: ['Figma', 'Adobe'] }
	];
</script>

<section class="flex flex-col gap-y-1 w-40">
	<h1 class="text-sm">Skills</h1>
	<div class="flex flex-col gap-y-2">
		{#each skills as skill}
			<SkillSection {skill} />
		{/each}
	</div>
</section>
