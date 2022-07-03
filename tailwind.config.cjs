/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"system-bg": "var(--system-bg)",
				"system-fg": "var(--system-fg)",
			},
			minHeight: {
				"scroll": "calc(100% + 1px)"
			}
		}
	},
	plugins: [],
}