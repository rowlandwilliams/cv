<script>
	import ExperienceBox from '../SHARED/ExperienceBox/ExperienceBox.svelte';
	import Column from '../SHARED/Column/Column.svelte';

	const educationDetails = {
		title: 'MSci Computational Ecology (1st Class Honours)',
		employer: 'University College London (UCL)',
		image: 'ucl.png',
		imageColorClass: 'bg-black',
		bullets: [
			'Research project in Computational Ecology (78%).',
			'3rd Year at University of British Columbia, Canada.',
			'The Dean’s List Nominee (2014)'
		],
		timeframe: { start: '2013-09', end: '2017-06' },
		contractType: [],
		locations: ['London, UK']
	};
</script>

<section>
	<Column columnHeader="Education">
		<ExperienceBox {...educationDetails} />
	</Column>
</section>
