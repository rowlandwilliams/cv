<script lang="ts">
	import Skill from './Skill/Skill.svelte';

	const skills: { language: string; libraries: string[] }[] = [
		{ language: 'JavaScript', libraries: ['React', 'TypeScript', 'd3.js'] },
		{ language: 'Design', libraries: ['Figma', 'Adobe'] }
	];
</script>

<h1>Skills</h1>
<div class="text-xs flex flex-col gap-y-2">
	{#each skills as skill}
		<Skill {skill} />
	{/each}
</div>
