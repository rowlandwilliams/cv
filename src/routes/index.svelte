<script>
	import Bio from '../components/Bio/Bio.svelte';
	import Education from '../components/Education/Education.svelte';
	import Experience from '../components/Experience/Experience.svelte';
	import Header from '../components/Header/Header.svelte';
	import Skills from '../components/Skills/Skills.svelte';
</script>

<section class="container flex flex-col border px-4 text-xs">
	<div class="h-full w-full overflow-hidden bg-white">
		<Header />
		<Bio />
		<Experience />
		<div class="grid grid-cols-2 gap-x-4">
			<Skills />
			<Education />
		</div>
	</div>
</section>
