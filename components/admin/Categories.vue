<template lang="pug">
section(class="categories")
	h2 Категории
	ul
		li(
			v-for="(item, index) in items" 
			:key="index" 
			@click="getCat(item)"
			v-bind:class="{ current: current.categoriesId === item.categoriesId }"
			) {{ item.name }}
	div
		div(class="info" v-if="current.name === null")
			p Для редактирования выберите одну из категорий в списке сверху
		div(class="category-item" v-else)
			h3 Название категории: {{ current.name }}
			label Описание
			textarea(v-model="category.description")
			button(class="button" @click="setCat") Сохранить
</template>
<script>
import axios from '~/plugins/axios'

export default {
	props: ['items'],
	methods: {
		getCat (item) {
			this.category.description = item.description
			this.current = item
		},
		async setCat () {
			try {
				const res = await axios.patch(`/api/cartoons/updatecat/${this.current.categoriesId}`, this.category)
				console.log(res)
				if (res.status === 200) {
					this.Success()
				}
			} catch (e) {
				console.log(e)
			}
		}
	},
	data: () => ({
		current: {
			name: null,
			categoriesId: null
		},
		category: {
			description: null
		}
	}),
	notifications: {
		Success: {
			title: 'Категория успешно обновлена!',
			message: '',
			type: 'success'
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "~assets/css/admin.styl"

.categories
	box-sizing: border-box
	padding-left: 25px
ul
	display flex
	padding 0
	border: 2px solid #cccccc
	li
		width calc(100% / 5)
		padding 12px
		font-weight: 700
		border-right: 1px solid #cccccc
		text-align center
		cursor pointer
		&.current
			background-color rgba(0,0,0,0.05)
label
	padding-left: 0
	padding-bottom: 16px
	display block
.info
	position relative
	box-shadow: 1px 1px 5px rgba(0,0,0,0.35)
	background-color: #4cb982
	font-weight: 700
	color white
	font-size: 14px
	line-height: 1.5
	font-family: Roboto
	border-radius: 5px
	margin-top: 25px
	padding 16px 18px
	p
		margin 0
	&:before
		content ""
		top -15px
		left 15px
		position absolute
		width 0
		height 0
		border-style: solid
		border-width: 0 7.5px 15px 7.5px;
		border-color: transparent transparent #4cb982 transparent
.button
	margin-top: 25px
</style>

