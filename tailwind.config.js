module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-open-sans)', 'sans-serif'],
				montserrat: ['var(--font-montserrat)', 'sans-serif'],
				opensans: ['var(--font-open-sans)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}