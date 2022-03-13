<script lang="ts">
	import Section from '../Section/Section.svelte';

	export let rowHeader: string;
</script>

<Section>
	<div class="grid grid-cols-6">
		<div class="font-medium text-indigo-500">{rowHeader}</div>
		<div class="col-span-5 text-gray-500">
			<slot />
		</div>
	</div>
</Section>
