<script lang="ts">
	import Section from '../Section/Section.svelte';

	export let rowHeader: string;
</script>

<Section>
	<div class="flex">
		<div class="w-28 flex-shrink-0 font-medium text-indigo-500">{rowHeader}</div>
		<div class="col-span-5 flex-grow text-gray-500">
			<slot />
		</div>
	</div>
</Section>
