<template lang="pug">
header(class="main-header")
	h1 
		nuxt-link(to="/") Растибольшой.ком
	nav(class="main-navigation")
		div 
			nuxt-link(to="/cartoons") Мультики
		div Аудио
		div Полезное
	slot
</template>
<style lang="stylus" scoped>
.main-header 
	width 100%
	text-align center
.main-navigation
	display flex
	justify-content center
	& > div
		padding 10px 25px
</style>

