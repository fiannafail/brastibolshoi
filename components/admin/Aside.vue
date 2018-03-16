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
			li
				nuxt-link(to="/admin/advices") Советы
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
			this.currentEditing = false
			if (this.type === 'others') {
				eventBus.$emit('close-other-edit', false)
			}
			if (this.type === 'cartoons') {
				eventBus.$emit('close-cartoon-edit', false)
			}
		}
	},
	data: () => ({
		currentEditing: null,
		type: null
	}),
	mounted () {
		eventBus.$on('show-editing', () => {
			this.currentEditing = true
			this.type = 'cartoons'
		})
		eventBus.$on('other-editing', () => {
			this.currentEditing = true
			this.type = 'others'
		})
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
aside-width = 235px
.panel
	display flex
	justify-content: space-around 
	align-items: center
	padding 15px 0
	color white
	font-weight: 500
	font-family: Roboto
	font-size: 14px
	background-color: rgba(0,0,0,0.25)
	cursor pointer

	i
		color: $red-color
		transition .4s
	&:hover i
		transition .4s
		transform: scale(1.5)

.main-aside
	margin-top: -60px
	padding-top: 60px
	position fixed
	height 100%
	width aside-width
	background-color: #31373e
	border-right 1px solid #ddd
	h2
		font-weight 500
		font-family: Roboto
		font-size 18px
		padding 8px
		color white
	& ul 
		padding-left 0px
		li 
			padding 16px
			cursor pointer
			font-weight 500
			font-family: Roboto
			&:hover
				background-color #f3f3f3
</style>

