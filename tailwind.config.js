const children = require("tailwindcss-children");
const forms = require("@tailwindcss/forms");
const gradients = require("tailwindcss-gradients");
const aspectRatio = require("@tailwindcss/aspect-ratio");
const typography = require("@tailwindcss/typography");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			borderWidth: {
				16: "16px",
			},
			backgroundImage: () => ({
				mainImage: "url('/cover.jpg')",
				errImage: "url('/error.png')",
				aboutLg: "url('/backgroundAboutlg.svg')",
				aboutSm: "url('/backgroundAboutsm.svg')",
				bg: "url('/bg.png')",
			}),
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			zIndex: {
				"-10": "-10",
				60: "60",
			},
			colors: {
				ted: "#f34423",
				"red-500-alpha": "rgba(239, 68, 68, 0.75)",
			},
			rotate: {
				360: "360deg",
			},
		},
		linearGradientColors: (theme) => theme("colors"),
		// radialGradientColors: (theme) => theme('colors'),
		conicGradientColors: (theme) => theme("colors"),
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "1.5rem",
			},
		},
	},
	variants: {
		extend: {
			textColor: [
				"children",
				"children-first",
				"children-last",
				"children-odd",
				"children-even",
				"children-not-first",
				"children-not-last",
				"children-hover",
				"hover",
				"children-focus",
				"focus",
				"children-focus-within",
				"focus-within",
				"children-active",
				"active",
				"dark",
				"children-visited",
				"visited",
				"children-disabled",
				"disabled",
				"responsive",
			],
		},
	},
	plugins: [
		children,
		forms,
		gradients,
		aspectRatio,
		typography,
		// require('tailwindcss-debug-screens'),
	],
};
