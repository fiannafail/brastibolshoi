<template lang="pug">
section(class="block")
	div(class="close" @click="close")
		i(class="material-icons") close
	slot(name="header")
	slot(name="body")
	div(class="buttons")
		slot(name="buttons")
		button(class="btn" @click="close") Отменить
</template>
<script>
import eventBus from '../../components/event-bus'

export default {
	methods: {
		close () {
			eventBus.$emit('overlay', false)
			eventBus.$emit('close-modal')
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.close
	position absolute
	width 36px
	height 36px
	right 10px
	top 10px
	transition .3s
	cursor pointer
	i
		font-size: 36px
		color $red-color
	&:hover
		transform scale(1.25)
		transition .3s
.block
	font-family: Roboto
	width 450px
	height 300px
	box-sizing: border-box
	padding 35px 30px
	background-color: #fff
	left calc(50% - 225px)
	z-index: 99
	box-shadow: 0 0 45px rgba(0,0,0,.35)
	display flex
	flex-direction: column
	justify-content: space-between
	h1
		color #3c3c3c
		margin 0
	p
		font-size: 18px
		line-height: 1.6
	.bold
		font-weight: 700
		color #3b8070
	.buttons
		margin-top: auto
		display flex
		justify-content: space-around
		margin 0 20px
</style>
