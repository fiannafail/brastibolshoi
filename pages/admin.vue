<template lang="pug">
div
	transition(name="fade")
		div(class="overlay" v-if="overlay" @click="closeOverlay")
	h1(class="header-bar") 
		nuxt-link(to="/admin") Admin Page
	div(class="container")
		Aside(v-bind:class="{ scrolled: top > 50 }" class="aside-container")
		main(class="main-container")
			nuxt-child
</template>
<script>
import '~/plugins/vue-scroll'
import Aside from '../components/admin/Aside'
import eventBus from '../components/event-bus'

export default {
	head () {
		return {
			title: 'Admin Page'
		}
	},
	data: () => ({
		top: null,
		overlay: false
	}),
	mounted () {
		if (process.browser) {
			window.addEventListener('scroll', this.onScroll)
		}
		eventBus.$on('overlay', payload => {
			console.log(payload)
			this.overlay = payload
		})
	},
	methods: {
		closeOverlay () {
			this.overlay = false
			eventBus.$emit('close-modal')
		},
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
aside-width = 235px
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
	a
		color white
.header-bar 
	box-shadow 0 0 20px rgba(0,0,0,0.3)
	margin 0
	padding 16px
	background-color: #3b8070
	position relative
	z-index: 9
.main-container
	position relative
	margin-left: aside-width
	padding 20px
.container
	display flex
.overlay
	position fixed
	width 100%
	height 100%
	background-color: rgba(0, 0, 0, 0.75)
	z-index: 10
</style>

