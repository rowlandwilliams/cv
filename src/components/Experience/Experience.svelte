<script lang="ts">
	import classNames from 'classnames';
	import Row from '../SHARED/Row/Row.svelte';
	import type { Jobs } from '../../types/types';
	import ExperienceDates from './ExperienceDates/ExperienceDates.svelte';

	const jobs: Jobs = [
		{
			title: 'Data Visualisation Engineer',
			employer: 'Freelance',
			image: 'rowland.svg',
			imageColorClass: 'bg-yellow-100',
			timeframe: { start: '2020-11' }
		},
		{
			title: 'Tech Lead',
			employer: 'Flow',
			image: 'flow.svg',
			imageColorClass: 'bg-blue-100',
			timeframe: { start: '2020-11' }
		},
		{
			title: 'Software Engineer',
			employer: 'Supernova AI',
			image: 'supernova.jpeg',
			imageColorClass: 'bg-black',
			timeframe: { start: '2021-05', end: '2021-07' }
		},
		{
			title: 'Data Scientist',
			employer: 'Global Canopy',
			image: 'globalcanopy.svg',
			imageColorClass: 'bg-green-100',
			timeframe: { start: '2017-10', end: '2018-04' }
		}
	];
</script>

<Row rowHeader="Experience">
	<div class="grid grid-cols-2 gap-2">
		{#each jobs as { title, employer, image, imageColorClass, timeframe }}
			<div class="flex flex-col gap-y-2 rounded-sm border p-2 text-2xs">
				<div class="flex items-center gap-x-2">
					<div class={classNames('flex items-center w-7 h-7 p-1 rounded-full', imageColorClass)}>
						<img src={`images/${image}`} alt="flow" />
					</div>
					<div class="leading-3">
						<h1 class="font-inter-medium text-gray-800">{title}</h1>
						<h2>{employer}</h2>
					</div>
				</div>
				<div>Some text to describe the jobs and what i dide</div>
				<ExperienceDates {timeframe} />
			</div>
		{/each}
	</div>
</Row>
