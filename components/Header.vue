<template lang="pug">
header(class="main-header")
	h1 
		nuxt-link(to="/") Растибольшой
			span(class="black") .ком
	nav(class="main-navigation")
		div 
			nuxt-link(to="/cartoons") Мультики
		div
			nuxt-link(to="/audios") Аудио
		div
			nuxt-link(to="/others") Полезное
</template>
<script>
export default {
	props: ['categories', 'name']
}
</script>

<style lang="stylus" scoped>
h1
	font-size: 42px
.black
	color #1a1512
.main-header 
	width 100%
	margin-bottom: 25px
	text-align center
.main-navigation
	margin 15px 0
	display flex
	justify-content center
	& > div
		padding 10px 25px
	font-family 'PT Sans'
	font-size 22px
	color #595653
	letter-spacing 2px
	a
		color #595653
		letter-spacing: 2.1px
ul
	margin 0 auto
	padding 25px
	box-sizing border-box
	width 500px
	justify-content: space-around
	display flex
	flex-wrap: wrap
	border solid 1px rgba(151, 151, 151, 0.3)
li
	list-style-type unset
	list-style-position inside
	color #01b4bc
	a
		font-family 'PT Sans'
		color #595653
.current
	color $global-color
	transition .5s
	a
		color $global-color
		font-weight bold
		transition .5s
</style>

