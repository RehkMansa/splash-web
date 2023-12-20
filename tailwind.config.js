/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: '1rem',
			center: true,
		},
		screens: {
			xsl: '320px',
			sl: '375px',
			xxs: '425px',
			xs: '450px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1024px',
			xxl: '1280px',
			'@smXL': '1320px',
			'@desktop': '1440px',
			'2xl': '1536px',
		},
		extend: {},
	},
	plugins: [],
};
