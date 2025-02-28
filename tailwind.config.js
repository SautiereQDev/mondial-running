module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-lexend)', 'sans-serif'],
				montserrat: ['var(--font-montserrat)', 'sans-serif'],
				lexend: ['var(--font-lexend)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}