<script lang="ts">
	import type { Timeframe } from 'src/types/types';

	import { getMonthAndYear, getMonthDiff } from '../utils/utils';

	export let timeframe: Timeframe;
</script>

<div class="flex gap-x-1">
	<div>{getMonthAndYear(timeframe.start)}</div>
	<p>&#8226;</p>
	<div>{getMonthDiff(timeframe)}</div>
</div>
