module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				mainImage: "url('/cover.jpg')",
				errImage: "url('/error.png')",
				aboutLg: "url('/backgroundAboutlg.svg')",
				aboutSm: "url('/backgroundAboutsm.svg')",
			}),
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			zIndex: {
				'-10': '-10',
				60: '60',
			},
			colors: {
				ted: '#f34423',
			},
			rotate: {
				360: '360deg',
			},
		},
		linearGradientColors: (theme) => theme('colors'),
		radialGradientColors: (theme) => theme('colors'),
		conicGradientColors: (theme) => theme('colors'),
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwindcss-gradients'),
		require('tailwindcss-debug-screens'),
	],
};
