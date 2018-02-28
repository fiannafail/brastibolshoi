<template lang="pug">
div
	aside(class="main-aside")
		h2 Панель управления
		ul
			li 
				nuxt-link(to="/admin/cartoons") Мультики
			li
				nuxt-link(to="/admin/audios") Аудио
			li
				nuxt-link(to="/admin/others") Полезности
		transition(name="fadeUp")
			div(class="panel" v-if="currentEditing" @click="closeEditing")
				span Отменить редактирование
				i(class="material-icons") close
			
</template>
<script>
import eventBus from '../event-bus'

export default {
	methods: {
		closeEditing () {
			eventBus.$emit('close-editing', false)
			this.currentEditing = false
		}
	},
	data: () => ({
		currentEditing: false
	}),
	mounted () {
		eventBus.$on('show-editing', () => { this.currentEditing = true })
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
aside-width = 275px
.panel
	display flex
	justify-content: space-around 
	align-items: center
	padding 15px 0
	font-weight: 500
	background-color: rgba(0,0,0,0.07)
	cursor pointer

	i
		color: $red-color
		transition .4s
	&:hover i
		transition .4s
		transform: scale(1.5)
h2
	font-weight 300
	font-size 18px
	padding 8px
.main-aside
	margin-top: -60px
	padding-top: 60px
	position fixed
	height 100%
	width aside-width
	background-color: #f9f9f9
	border-right 1px solid #ddd
	& ul 
		padding-left 0px
		li 
			padding 16px
			cursor pointer
			font-weight 400 
			&:hover
				background-color #f3f3f3
</style>

