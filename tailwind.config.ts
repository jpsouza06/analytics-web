import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
		dropShadow: {
			'drop-shadow-50': 'drop-shadow(15px 15px 4px rgba(0, 0, 0, 0.5))'
		},
		colors: {
			'red-700': '#581616',
			'gray-100': '#DADCE0'
		}
	},
	plugins: [],
}
export default config
