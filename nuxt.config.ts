// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from "nuxt/config";

const modules: NuxtConfig["modules"] = [
	["nuxt-typed-router", { strict: true }],
	"@nuxt/devtools",
	"@nuxt/eslint",
	"~~/modules/figma2tailwind/index.ts", // Must be placed before "@nuxtjs/tailwindcss"
	"@nuxt/icon",
	"@nuxtjs/tailwindcss",
	"@nuxtjs/i18n",
	"@nuxtjs/color-mode",
	["@pinia/nuxt", { autoImports: ["defineStore"] }],
	"pinia-plugin-persistedstate",
	"@vueuse/nuxt",
];

export default defineNuxtConfig({
	modules,
	runtimeConfig: {
		public: {
			apiUrl: "https://bmm-api.brunstad.org",
			authUrl: "https://login.bcc.no",
			clientId: "L9891KdcqtoKmHg4r65lT7zbSjv55dNN",
			applicationInsights: "",
			systemName: "Web",
			isMac: process.platform === "darwin",
			mediaSupportEmail: "support@bcc.media",
		},
	},
	spaLoadingTemplate: true,
	i18n: {
		strategy: "no_prefix",
		skipSettingLocaleOnNavigate: true,
		defaultLocale: "en",
	},
	icon: {
		customCollections: [
			{
				dir: "./app/assets/icons",
				prefix: "",
				recursive: true,
				normalizeIconName: false,
			},
		],
	},
	imports: {
		dirs: ["stores"],
	},
	ssr: false,
	vite: {
		optimizeDeps: {
			include: [
				"@bcc-code/bmm-sdk-fetch",
				"@auth0/auth0-vue",
				"vue-sanitize-directive",
				"vue-sonner",
				"class-variance-authority",
				"ua-parser-js",
				"@headlessui/vue",
				"@floating-ui/vue",
				"vue-draggable-plus",
				"@zag-js/slider",
				"@zag-js/vue",
			],
			// https://stackoverflow.com/a/75655669/517914
			exclude: ["fsevents"],
		},
		vue: {},
	},
	nitro: {},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			base: { href: "/" },
			meta: [{ name: "description", content: "{{MetadataPlaceholder}}" }],

			link: [
				{ href: "https://fonts.googleapis.com", rel: "preconnect" },
				{
					href: "https://fonts.gstatic.com",
					rel: "preconnect",
					crossorigin: "anonymous",
				},
				{
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap",
					rel: "stylesheet",
				},
			],
		},
	},
	router: {
		options: {
			// Setting app.head.base changes the default for "hashMode" to "true" ...
			hashMode: false,
		},
	},
	colorMode: {
		classSuffix: "",
	},
	compatibilityDate: "2026-03-05",
	devtools: {
		enabled: true,
	},
});
