<script lang="ts">
	import Row from '../SHARED/Row/Row.svelte';
	import ExperienceBox from './ExperienceBox/ExperienceBox.svelte';
	import { jobs } from './utils/jobs';
</script>

<Row rowHeader="Experience">
	<div class="grid gap-2">
		{#each jobs as job}
			<ExperienceBox {...job} />
		{/each}
	</div>
</Row>
