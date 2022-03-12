<script>
	import Section from '../components/SHARED/Section.svelte';
	import Bio from '../components/Bio/Bio.svelte';
	import Experience from '../components/Experience/Experience.svelte';
	import Skills from '../components/Skills/Skills.svelte';
</script>

<section class="container flex flex-col overflow-hidden border px-8 py-4  text-xs">
	<Section
		><div class="flex flex-col gap-y-2">
			<div class="flex flex-col gap-y-2">
				<h1
					class="max-w-max bg-gradient-to-b from-black to-indigo-800 bg-clip-text font-inter-medium text-4xl text-transparent"
				>
					Rowland Williams
				</h1>
				<h2 class="text-sm text-gray-800">Design Technologist | rowlandwilliams.me</h2>
			</div>
		</div>
	</Section>

	<Bio />
	<Experience />
	<!-- <Skills /> -->
</section>
