module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'inter-regular': ['Inter-Regular', 'sans-serif'],
				'inter-medium': ['Inter-Medium', 'sans-serif'],
				'inter-semibold': ['Inter-SemiBold', 'sans-serif']
			},
			fontSize: {
				'2xs': '0.625rem'
			}
		}
	},
	plugins: []
};
