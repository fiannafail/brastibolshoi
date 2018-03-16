<template lang="pug">
div
	h2 Советы
	div(class="advices-container")
		form(@submit.prevent="submit")
			div(class="form-group")
				label Совет
				textarea(v-model="content")
			button(class="button") Редактировать
		ItemsList(:items="advices" class="item-list" @remove="remove" @editing="editing")
</template>
<script>
import axios from '~/plugins/axios'
import ItemsList from '../../components/admin/ItemsList'

export default {
	async asyncData () {
		try {
			const { data } = await axios.get('/api/advices')
			return {
				advices: data
			}
		} catch (e) {
			console.log(e)
		}
	},
	data: () => ({
		id: null,
		content: null
	}),
	methods: {
		async submit () {
			try {
				const advice = await axios.patch('/api/advices/edit', { content: this.content, id: this.id })
				console.log(advice)
			} catch (e) {
				console.log(e)
			}
		},
		editing (item) {
			console.log(item)
			this.content = item.content
			this.id = item.id
		}
	},
	components: {
		ItemsList
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.advices-container
	display flex
</style>
