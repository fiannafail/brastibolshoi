<template lang="pug">
div
	h1(class="header-bar") 
		nuxt-link(to="/admin") Admin Page
	div(class="container")
		Aside(v-bind:class="{ scrolled: top > 50 }" class="aside-container")
		main(class="main-container")
			nuxt-child
			no-ssr
				form(action="/up" method="post" enctype="multipart/form-data")
					input(type="file" name="file" id="fileToUpload")
					input(type="submit" value="Upload Image" name="submit")
</template>
<script>
import '~/plugins/vue-scroll'
import Aside from '../components/admin/Aside'

export default {
	head () {
		return {
			title: 'Admin Page'
		}
	},
	data: () => ({
		top: null
	}),
	mounted () {
		if (process.browser) {
			window.addEventListener('scroll', this.onScroll)
		}
	},
	methods: {
		onScroll () {
			if (process.browser) {
				this.top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			}
		}
	},
	components: {
		Aside
	}
}
</script>
<style lang="stylus" scoped>
aside-width = 275px
.aside-container
	transition .3s
	position relative
	&.scrolled
		transition .3s
		margin-top: -60px;
h1
	font-weight 400
	font-size 24px
	padding 8px
.header-bar 
	box-shadow 0 0 20px rgba(0,0,0,0.3)
	margin 0
	padding 16px
	background-color: #f9f9f9
	position relative
	z-index: 9
.main-container
	position relative
	margin-left: aside-width
	padding 20px
.container
	display flex
</style>

