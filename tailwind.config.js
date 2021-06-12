module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./pages/**/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./components/**/**/*.{js,ts,jsx,tsx}',
		'./components/**/**/**/*.{js,ts,jsx,tsx}',
		'./components/**/**/**/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				arrow: `url('/public/images/arrow.png')`,
			}),
			fontFamily: { sans: ['Montserrat'] },
			colors: {
				primaryblue: '#007bff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
