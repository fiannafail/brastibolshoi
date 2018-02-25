const nodeExternals = require('webpack-node-externals')

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'starter',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Roboto+Mono:500|PT+Sans:400,700|Source+Sans+Pro:300,400,600,700&amp;subset=cyrillic' }
		]
	},
	env: {
		siteTitle: 'Растибольшой.ком'
	},
	plugins: [
		{ src: '~/plugins/vue-notifications.js', ssr: false },
		{ src: '~/plugins/vue-lazyload.js', ssr: false }
	],
	/*
	** Global CSS
	*/
	css: ['~assets/css/main.css'],
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fa8925' },
	/*
	 ** Build configuration
	 */
	build: {
		vendor: ['vue-notifications'],
		extractCSS: true,
		/*
		 ** Run ESLINT on save
		 */
		extend (config, ctx) {
			if (ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			if (ctx.isServer) {
				config.externals = [
					nodeExternals ({
						whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-audio/]
					})
				]
			}
		}
	}
}
