<script>
	import Section from '../components/SHARED/Section.svelte';
	import Bio from '../components/Bio/Bio.svelte';
	import Experience from '../components/Experience/Experience.svelte';
</script>

<section class="container px-8 py-4 overflow-hidden border flex flex-col  text-xs">
	<Section
		><div class="flex flex-col gap-y-2">
			<div class="flex flex-col gap-y-2">
				<h1 class="text-4xl font-inter-medium">Rowland Williams</h1>
				<h2 class="text-gray-800 text-sm">Design Technologist | rowlandwilliams.me</h2>
			</div>
		</div>
	</Section>

	<Bio />
	<Experience />
	<!-- <Skills /> -->
</section>
