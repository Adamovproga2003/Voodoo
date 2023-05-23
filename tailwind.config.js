/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				alert: 'auto 1fr auto',
				info: 'auto 1fr',
				form: '1fr auto',
				hidden1: 'max-content max-content max-content',
				hidden2: '1fr auto 1fr',
			},
			maxWidth: {
				form: '624px',
			},
		},
	},
	plugins: [],
}
