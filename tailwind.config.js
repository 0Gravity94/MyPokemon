/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			chackra: ["Chakra Petch"],
		},
		extend: {
			colors: {
				"poke-1": "#5EBDFC",
				"poke-2": "#16D6FB",
				"poke-3": "#EFFCD5",
				"poke-4": "#0C3348",
				"poke-1": "#37796C",
			},
		},
	},
	plugins: [],
};
