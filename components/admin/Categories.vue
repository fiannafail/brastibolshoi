<template lang="pug">
section(class="categories")
	h2 Категории
	ul
		li(v-for="(item, index) in items" :key="index" @click="getCat(item)") {{ item.name }}
	div(class="category-item")
	textarea(v-model="category.description")
</template>
<script>
import axios from '~/plugins/axios'

export default {
	props: ['items'],
	methods: {
		getCat (item) {
			this.category.description = item.description
			this.currentId = item.categoriesId
		},
		setCat () {
			try {
				const { data } = await axios.patch(`/api/cartoons/updatecat/${this.currentId.id}`, this.category)
			} catch (e) {
				console.log(e)
			}
		}
	},
	data: () => ({
		currentId: null,
		category: {
			description: null
		}
	})
}
</script>

<style lang="stylus" scoped>
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
</style>

