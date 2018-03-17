<template lang="pug">
	ul(v-if="$route.params.tag === undefined && categories"
		v-bind:class="[{ cartoons: name === 'cartoons' }, { audios: name === 'audios' }, { others: name === 'others' }]")
		li(
			v-for="(item, index) in categories" 
			:key="index" 
			v-bind:class="{ current: $route.params.category === item.slug }"
			)
			span
				nuxt-link(:to="`/${name}/${item.slug}`" replace ) {{ item.name }}
</template>
<script>
export default {
	props: ['categories', 'name']
}
</script>
<style lang="stylus" scoped>
ul
	margin 0 auto
	margin-bottom: 25px
	padding 25px
	box-sizing border-box
	width 500px
	justify-content: space-around
	display flex
	flex-wrap: wrap
	border solid 1px rgba(151, 151, 151, 0.3)
	border-radius: 10px
	position relative
	&:after, &:before
		bottom: 100%
		left: 50%
		border solid transparent
		content " "
		height: 0
		width: 0
		position: absolute
		pointer-events: none
	&.cartoons:after, &.cartoons:before
		left 22%
	&.audios:after, &.audios:before
		left 49%
	&.others:after, &.others:before
		left 77%
	&:after
		border-color: rgba(255, 255, 255, 0)
		border-bottom-color: #ffffff
		border-width 10px;
		margin-left -10px;
	&:before
		border-color: rgba(220, 220, 220, 0)
		border-bottom-color: #DCDCDC
		border-width 11px
		margin-left -11px
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
		color #fa8925
		font-weight bold
		transition .5s
</style>

