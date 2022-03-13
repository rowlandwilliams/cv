<script lang="ts">
	import type { Timeframe } from 'src/types/types';

	import { getMonthDiff, getTimeframe } from '../utils/utils';

	export let timeframe: Timeframe;
</script>

<div class="flex gap-x-1">
	<div>{getTimeframe(timeframe)}</div>
	<p class="text-indigo-500">&#8226;</p>
	<div>{getMonthDiff(timeframe)}</div>
</div>
