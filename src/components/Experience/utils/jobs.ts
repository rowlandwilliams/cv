import type { Jobs } from 'src/types/types';

export const jobs: Jobs = [
	{
		title: 'Data Visualisation Engineer & Designer',
		employer: 'Freelance',
		image: 'rowland.svg',
		imageColorClass: 'bg-yellow-200',
		bullets: [
			'Various projects at the interface of software development, UX design and data visualisation.'
		],
		timeframe: { start: '2020-10' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Remote']
	},
	{
		title: 'Software Engineer',
		employer: "Flow - Africa's Commodity Intelligence Platform",
		image: 'flow.svg',
		imageColorClass: 'bg-blue-200',
		bullets: [
			'Tech Lead of Flow, an intelligence platform bringing transparency to African commodity supply chains.',
			'Full-stack development, UX / UI design, creative direction and project management.'
		],
		timeframe: { start: '2020-12' },
		contractType: ['Contract', 'Part-time'],
		locations: ['Remote', 'Nairobi, Kenya']
	},
	{
		title: 'Software Engineer',
		employer: 'Supernova AI',
		image: 'supernova.jpeg',
		imageColorClass: 'bg-black',
		bullets: [
			'Discovery work for a novel ESG Investment platform.',
			'Designed visualisations and established UI component library using Storybook.'
		],
		timeframe: { start: '2021-05', end: '2021-07' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Remote', 'London, UK']
	},
	{
		title: 'Data Scientist',
		employer: 'Global Canopy',
		image: 'globalcanopy.svg',
		imageColorClass: 'bg-green-200',
		bullets: [
			'Analysis / visualisation of data from TRASE, a supply chain transparency initiative for agricultural commodities.',
			'Worked from briefs to write data-driven stories and visualisations for communications materials.'
		],
		timeframe: { start: '2017-10', end: '2018-04' },
		contractType: ['Full-time'],
		locations: ['Oxford, UK']
	}
];
