<script>
	import Section from '../SHARED/Section/Section.svelte';
	import Credentials from './Credentials/Credentials.svelte';
</script>

<Section>
	<div class="flex items-center justify-between">
		<div class="flex flex-col gap-y-2">
			<h1 class="max-w-max text-2xl font-medium">Rowland Williams</h1>
			<h2 class="text-sm text-gray-800">
				Software Engineer <span class="text-indigo-500">&#8226;</span> Design Technologist
			</h2>
		</div>
		<Credentials />
	</div>
</Section>
