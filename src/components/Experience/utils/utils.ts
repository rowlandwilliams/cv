const months = [
	'Jan',
	'Feb',
	'March',
	'April',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec'
];

export const getMonthAndYear = (dateString: string) => {
	const date = new Date(dateString);

	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return `${month} ${year}`;
};

export const getMonthDiff = (timeframe: { start: string; end?: string }) => {
	const { start, end } = timeframe;

	const dateFrom = new Date(start);
	const dateTo = end ? new Date(end) : new Date();

	const diffInMonths =
		dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());

	if (diffInMonths < 12) return `${diffInMonths} mo${diffInMonths > 1 ? 's' : ''}`;

	const years = Math.floor(diffInMonths / 12);
	const months = diffInMonths % 12;

	return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
};
