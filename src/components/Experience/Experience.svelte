<script lang="ts">
	import classNames from 'classnames';
	import Row from '../SHARED/Row/Row.svelte';
	import ExperienceDates from './ExperienceDates/ExperienceDates.svelte';
	import { jobs } from './utils/jobs';
</script>

<Row rowHeader="Experience">
	<div class="grid gap-2">
		{#each jobs as { title, employer, image, imageColorClass, bullets, timeframe, locations }}
			<div class="flex flex-col gap-y-2 rounded-sm border p-4 text-xs">
				<div class="flex justify-between">
					<div class="flex items-center gap-x-2">
						<div
							class={classNames('flex items-center w-8 h-8 p-1.5 rounded-full', imageColorClass)}
						>
							<img src={`images/${image}`} alt="flow" />
						</div>
						<div>
							<h1 class="text-gray-800">{title}</h1>
							<h2 class="hover:text-indigo-500 hover:underline ">{employer}</h2>
						</div>
					</div>
					<div class="text-right text-indigo-500">&#x2192;</div>
				</div>

				<div class="py-2">
					<ul class="list-inside list-disc text-2xs marker:text-indigo-500">
						{#each bullets as bullet}
							<li class="">{bullet}</li>
						{/each}
					</ul>
				</div>
				<div class="flex justify-between">
					<ExperienceDates {timeframe} />
					<div class="flex gap-x-1 ">
						{#each locations as location, i}
							{#if i < 1 && locations.length > 1}
								<p>{location} <span class="text-indigo-500">&#8226; </span></p>
							{:else}
								<p>{location}</p>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Row>
