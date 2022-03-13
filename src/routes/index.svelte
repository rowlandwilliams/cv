<script>
	import Skills from '../components/Skills/Skills.svelte';
	import Bio from '../components/Bio/Bio.svelte';
	import Experience from '../components/Experience/Experience.svelte';
	import Header from '../components/Header/Header.svelte';
</script>

<section class="container flex flex-col overflow-hidden px-8 py-2 text-xs">
	<Header />
	<Bio />
	<Experience />

	<Skills />
</section>
