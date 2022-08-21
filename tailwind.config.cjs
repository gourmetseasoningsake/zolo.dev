/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
      sans: [
        `ui-sans-serif`,
        `system-ui`,
        `-apple-system`,
        `BlinkMacSystemFont`,
        `"Segoe UI"`,
        `Roboto`,
        `"Helvetica Neue"`,
        `Arial`,
        `"Noto Sans"`,
        `sans-serif`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
        `"Noto Color Emoji"`,
      ],
      serif: [
        `ui-serif`,
        `Georgia`,
        `Cambria`,
        `"Times New Roman"`,
        `Times`,
        `serif`
      ],
      mono: [
				`"JetBrains Mono"`,
        `ui-monospace`,
        `SFMono-Regular`,
        `Menlo`,
        `Monaco`,
        `Consolas`,
        `"Liberation Mono"`,
        `"Courier New"`,
        `monospace`,
      ],
    },
		extend: {
			colors: {
				"system-bg": "var(--system-bg)",
				"system-fg": "var(--system-fg)",
        "action-fg": "var(--action-fg)"
			},
      height: {
        "screen-px": "calc(100vh + 1px)"
      },
			minHeight: {
        "screen-px": "calc(100vh + 1px)",
				"scroll-px": "calc(100% + 1px)"
			},
      spacing: {
        "h-header": "5.5rem"
      }
		}
	},
	plugins: [],
}



// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }