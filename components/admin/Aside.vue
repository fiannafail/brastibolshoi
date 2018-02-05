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
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
aside-width = 275px
h2
	font-weight 300
	font-size 18px
	padding 8px
.main-aside
	position fixed
	height 100%
	width aside-width
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

