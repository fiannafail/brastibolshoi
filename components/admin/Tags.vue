<template lang="pug">
section(class="tags-modal")
	h2 Тэги
	div(class="tags-wrapper")
		ul
			li(
				v-for="(item, index) in items" 
				:key="index" 
				@click="setCurrent(item,index)"
				v-bind:class="{ selected: selected === index }"
				) {{ item.name }}
		div
			div(class="info" v-if="selected == null")
				p Для редактирования выберите один из тегов в списке слева
			div(v-else)
				h3 Название тэга: {{ current.name }}
				label Описание:
				textarea(v-model="current.description" type="text")
				button(class="button" @click="save") Сохранить

</template>
<script>
import slugify from 'slug-generator'
import axios from '~/plugins/axios'

export default {
	props: ['items'],
	methods: {
		async setCurrent (item, index) {
			const { data } = await axios.get(`/api/cartoons/gettag/${slugify(item.name)}`)
			const tag = data.split(', ')
			this.current.description = tag[0]
			this.current.name = item.name
			this.selected = index
		},
		async save () {
			const { data } = await axios.post('/api/cartoons/settag', this.current)
			console.log(data)
			if (data === true) {
				this.Success()
			}
		}
	},
	data: () => ({
		selected: null,
		current: {
			name: null,
			description: null
		}
	}),
	notifications: {
		Success: {
			title: 'Тэг успешно обновлен!',
			message: '',
			type: 'success'
		}
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.tags-wrapper
	display flex
	align-items: start
	div sh3
		margin-bottom: 4px
	label
		padding-left: 2px
	div button
		margin-top: 26px
	div
		margin-left: 15px
		margin-top: 15px
		display flex
		flex-direction: column
		& > *
			margin-top: 5px
ul
	border: 2px #ccc solid
	padding 0
	li
		background-color: #f9f9f9
		padding 10px 45px
		border-bottom: 1px #cccccc solid
		cursor pointer 
		font-size: 16px
		font-weight: 700
		transition: .3s
		color #3b8070
		&.selected
			background-color: rgba(0,0,0,0.075)
			transition: .3s
		&:last-child
			border none
.info
	position relative
	box-shadow: 1px 1px 5px rgba(0,0,0,0.35)
	background-color: #4cb982
	font-weight: 700
	color white
	line-height: 1.5
	border-radius: 5px
	padding 16px 18px
	p
		margin 0
	&:before
		content ""
		top 10px
		left -14px
		position absolute
		width 0
		height 0
		border-style: solid
		border-width: 7px 14px 7px 0
		border-color: transparent #4cb982 transparent transparent
</style>
