<script lang="ts">
	import type { Timeframe } from 'src/types/types';

	import ExperienceBoxHeader from './ExperienceBoxHeader/ExperienceBoxHeader.svelte';
	import ExperienceBullets from './ExperienceBullets/ExperienceBullets.svelte';
	import ExperienceDates from './ExperienceDates/ExperienceDates.svelte';
	import ExperienceLocations from './ExperienceLocations/ExperienceLocations.svelte';

	export let imageColorClass: string;
	export let image: string;
	export let title: string;
	export let employer: string;
	export let bullets: string[];
	export let timeframe: Timeframe;
	export let locations: string[];
</script>

<div class="flex flex-col gap-y-2 rounded-xl border border-gray-100 p-4 text-xs">
	<ExperienceBoxHeader {imageColorClass} {image} {title} {employer} />
	<ExperienceBullets {bullets} />
	<div class="flex justify-between">
		<ExperienceDates {timeframe} />
		<ExperienceLocations {locations} />
	</div>
</div>
