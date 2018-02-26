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
		div Полезное
	slot
</template>
<style lang="stylus" scoped>
h1
	font-size: 42px
.black
	color #1a1512
.main-header 
	width 100%
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
</style>

