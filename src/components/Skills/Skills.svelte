<script lang="ts">
	import SkillSection from './SkillSection/SkillSection.svelte';

	const skills: { language: string; libraries: string[] }[] = [
		{ language: 'Web', libraries: ['HTML', 'Tailwind CSS', 'PostgreSQL', 'Git / GitHub', 'Figma'] },
		{
			language: 'JavaScript',
			libraries: [
				'React',
				'TypeScript',
				'Svelte',
				'd3.js',
				'deck.gl',
				'Apollo',
				'Redux',
				'GraphQL',
				'Node',
				'Express'
			]
		},
		{ language: 'Programming', libraries: ['Python', 'R'] }
	];
</script>

<section class="flex w-1/2 flex-col gap-y-1 py-6">
	<h1 class="font-medium text-indigo-500">Skills</h1>
	<div class="flex flex-col gap-y-2">
		{#each skills as skill}
			<SkillSection {skill} />
		{/each}
	</div>
</section>
