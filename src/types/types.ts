interface Job {
	title: string;
	employer: string;
	image: string;
	imageColorClass: string;
	timeframe: Timeframe;
}

export interface Timeframe {
	start: string;
	end?: string;
}

export type Jobs = Job[];
