module.exports = {
	images: {
		domains: [
			// Dribbble CDN
			"cdn.dribbble.com",

			// Instagram CDN
			"scontent.cdninstagram.com"
		],

		// Instagram CDN
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.cdninstagram.com"
			}
		]
	},

	experimental: {
		// App folder structure
		appDir: true,

		// Fonts
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } }
		]
	}
}
