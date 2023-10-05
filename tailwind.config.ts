import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		dropShadow: {
			'drop-shadow-50': 'drop-shadow(15px 15px 4px rgba(0, 0, 0, 0.5))'
		},
		colors: {
			'red-700': '#871812',
			'white': '#ffffff',
			'gray-100': '#CCCCCC'
		}
	},
	plugins: [],
}
export default config
